// This file acts as your "Content Management System" (CMS).
// To add a new photo, simply copy a block { ... } and paste it in the specific category list.

const galleryData = {
    // CATEGORY METADATA (Used for sorting Work page)
    categories: [
        { id: 'androon', title: 'Androon Lahore', link: 'androon.html', cover: 'assets/androon/6-PXL_20250810_021114184.jpg', lastUpdated: '2025-12-06' },
        { id: 'kartarpur', title: 'Kartarpur', link: 'kartarpur.html', cover: 'assets/kartarpur/PXL_20250815_122119037.jpg', lastUpdated: '2025-12-06' },
        { id: 'urban', title: 'Urban', link: 'urban.html', cover: 'assets/urban/1.jpg', lastUpdated: '2025-12-06' },
        { id: 'b_fast_cfd', title: 'FAST CFD', link: 'fast_cfd.html', cover: 'assets/fast cfd/7-PXL_20250824_113447913.jpg', lastUpdated: '2025-12-06' },
        { id: 'night', title: 'Night', link: 'night.html', cover: 'assets/night/ncover.jpg', lastUpdated: '2025-10-01' },
        { id: 'landscape', title: 'Landscape', link: 'landscape.html', cover: 'assets/landscape/L5.jpg', lastUpdated: '2025-11-15' },
        { id: 'golden', title: 'Golden Hour', link: 'golden hour.html', cover: 'assets/golden/1.jpg', lastUpdated: '2025-12-06' }
    ],

    // Photos for the "Night" page
    night: [
        { src: 'assets/night/ncover.jpg', alt: 'Night' },
        // Add more night photos here
    ],

    // Photos for the "Landscape" page
    landscape: [
        { src: 'assets/landscape/landcover.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L5.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L2.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L3.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L4.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L5.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L6.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L7.jpg', alt: 'Landscape' },
        { src: 'assets/landscape/L8.jpg', alt: 'Landscape' },
    ],

    // Photos for the "Urban" page
    urban: [
        { src: 'assets/urban/1.jpg', alt: 'Urban' },
        { src: 'assets/urban/2.jpg', alt: 'Urban' },
        { src: 'assets/urban/3.jpg', alt: 'Urban' },
        { src: 'assets/urban/4.jpg', alt: 'Urban' },
        { src: 'assets/urban/5.jpg', alt: 'Urban' },
        { src: 'assets/urban/6.jpg', alt: 'Urban' },
        { src: 'assets/urban/7.jpg', alt: 'Urban' },
        { src: 'assets/urban/8.jpg', alt: 'Urban' },
        { src: 'assets/urban/9.jpg', alt: 'Urban' },
        { src: 'assets/urban/10.jpg', alt: 'Urban' },
        { src: 'assets/urban/urbcover.jpg', alt: 'Urban' },
        { src: 'assets/urban/ur.jpg', alt: 'Urban' },
        { src: 'assets/urban/ur1.jpg', alt: 'Urban' },
        { src: 'assets/urban/ur2.jpg', alt: 'Urban' },
        { src: 'assets/urban/bir.jpg', alt: 'Birds' },
    ],

    // Photos for "Androon Lahore"
    androon: [
        { src: 'assets/androon/1-PXL_20250810_024046778.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/2-PXL_20250810_023748589.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/3-PXL_20250810_023641044.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/4-PXL_20250810_023502659.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/5-PXL_20250810_021119079.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/6-PXL_20250810_021114184.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/7-PXL_20250810_020647714.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/8-PXL_20250810_020100979.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/9-PXL_20250810_020022354.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/10-PXL_20250810_015646365.jpg', alt: 'Androon Lahore' },
        { src: 'assets/androon/11-PXL_20250810_015345345.jpg', alt: 'Androon Lahore' },
    ],

    // Photos for "Kartarpur"
    kartarpur: [
        { src: 'assets/kartarpur/1-PXL_20250815_123052761.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/2-PXL_20250815_115721299.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/3-PXL_20250815_112338342.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/4-PXL_20250815_111811362.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/5-PXL_20250815_105617419.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/6-PXL_20250815_105616088.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/7-PXL_20250815_105607939.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/8-PXL_20250815_105600830.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/PXL_20250815_114326938.jpg', alt: 'Kartarpur' },
        { src: 'assets/kartarpur/PXL_20250815_122119037.jpg', alt: 'Kartarpur' },
    ],

    // Photos for "FAST CFD"
    fast_cfd: [
        { src: 'assets/fast cfd/7-PXL_20250824_113447913.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/11-PXL_20250426_193411309.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/12-PXL_20250420_104858788.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/13-PXL_20250418_111904451.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/14-PXL_20250318_135015925.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/15-PXL_20250318_134448673.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/17-PXL_20250220_102001276.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/19-PXL_20250201_132928953.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/2-PXL_20250831_130248475.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/20-PXL_20250201_132710318.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/21-PXL_20250201_132533949.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/22-PXL_20250131_120834202.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/23-PXL_20250126_125107547.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/24-PXL_20241229_114326839.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/25-PXL_20241220_082214095.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/26-PXL_20241215_121830593.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/28-PXL_20241116_165252070.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/29-PXL_20241110_214938189.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/3-PXL_20250830_103630017.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/4-PXL_20250826_100616582.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/5-PXL_20250825_111053130.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/6-PXL_20250824_114408964.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/8-PXL_20250824_110931713.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/9-PXL_20250521_221507223.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250201_144103838.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250202_100039193.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250216_111822560.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250417_183049274.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250418_142329364.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250521_215923387.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250523_232206986.jpg', alt: 'FAST CFD' },
        { src: 'assets/fast cfd/PXL_20250831_132540286.jpg', alt: 'FAST CFD' },
    ],

    // Photos for the "Golden Hour" page
    golden: [
        { src: 'assets/golden/1.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/2.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/bird.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/bird2.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/gol.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/gol car.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/gol car 2.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/gol uni.jpg', alt: 'Golden Hour' },
        { src: 'assets/golden/gol vil.jpg', alt: 'Golden Hour' },
    ],

    // Highlights for the "Home" page
    highlights: [
        { src: 'assets/night/ncover.jpg', title: 'Night' },
        { src: 'assets/landscape/L5.jpg', title: 'Landscape' },
        { src: 'assets/urban/urbcover.jpg', title: 'Urban Sentinel' },
        { src: 'assets/golden/bird.jpg', title: 'Golden Hour' }
    ]
};
