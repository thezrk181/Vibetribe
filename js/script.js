/* CINEMATIC V2 SCRIPT */

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initSlider();
    renderGallery(); // From V1 CMS
});

// 1. MENU LOGIC (Overlay)
const initMenu = () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const overlay = document.getElementById('menu-overlay');

    if (menuBtn && overlay) {
        menuBtn.addEventListener('click', () => overlay.classList.add('open'));
        closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
    }
};

// 2. SLIDER LOGIC (Homepage)
// 2. SLIDER LOGIC (Homepage)
const initSlider = () => {
    const sliderContainer = document.querySelector('.slider');
    if (!sliderContainer) return;

    // Get images from Work Categories (Dynamic)
    let images = [];
    if (typeof galleryData !== 'undefined' && galleryData.categories) {
        images = galleryData.categories
            .map(cat => cat.cover)
            .filter(src => src !== ''); // Filter out empty covers
    }

    // Fallback if no data
    if (images.length === 0) {
        images = ['assets/night/ncover.jpg', 'assets/urban/ur1.jpg', 'assets/landscape/L5.jpg'];
    }

    // Shuffle Array
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledImages = shuffle(images);

    // Inject Slides
    sliderContainer.innerHTML = shuffledImages.map((src, index) =>
        `<div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${src}');"></div>`
    ).join('');

    // Start Loop
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
};

// 3. CMS LOGIC (Render Galleries)
// 3. CMS LOGIC (Render Galleries & Work Grid)
const renderGallery = () => {
    // A. Render Category Pages (Urban, Night, etc.)
    const gridContainer = document.querySelector('.cms-grid[data-category]');
    if (gridContainer) {
        const category = gridContainer.getAttribute('data-category');
        if (typeof galleryData !== 'undefined' && galleryData[category]) {
            const images = galleryData[category];
            const html = images.map(img => `
                <div class="grid-item" data-src="${img.src}"> 
                    <img src="${img.src}" alt="${img.alt}" loading="lazy">
                    ${img.title ? `<div class="overlay">${img.title}</div>` : ''}
                </div>
            `).join('');
            gridContainer.innerHTML = html;
            initLightbox();
        }
    }

    // B. Render Work Page (Sorted Categories)
    const workGrid = document.getElementById('work-grid');
    if (workGrid && typeof galleryData !== 'undefined' && galleryData.categories) {
        const sortedCats = [...galleryData.categories].sort((a, b) => {
            return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        });

        const html = sortedCats.map(cat => `
            <a href="${cat.link}" class="grid-item" ${!cat.cover ? 'style="min-height: 250px; background: #1a1a1a; display: flex; align-items: center; justify-content: center;"' : ''}>
                ${cat.cover ? `<img src="${cat.cover}" alt="${cat.title}">` : ''}
                <div class="overlay" ${!cat.cover ? 'style="opacity: 1; position: static;"' : ''}>${cat.title}</div>
            </a>
        `).join('');
        workGrid.innerHTML = html;
    }
};

// 4. LIGHTBOX LOGIC
const initLightbox = () => {
    // Create/Find Lightbox
    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);
    }

    const items = document.querySelectorAll('.cms-grid .grid-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');

            // Content
            lightbox.innerHTML = `
                <img src="${src}">
                <div class="lightbox-close">&times;</div>
            `;

            // Show
            lightbox.classList.add('active');

            // Close Events
            const closeBtn = lightbox.querySelector('.lightbox-close');
            const close = () => lightbox.classList.remove('active');

            closeBtn.addEventListener('click', close);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) close();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') close();
            }, { once: true });
        });
    });
};
