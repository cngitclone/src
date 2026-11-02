// Functionality must be executed after DOM has loaded, using DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Select the button elements by their required IDs
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    // Select the image elements by their unique IDs
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    // Group images in an array for easy iteration when resetting z-indexes
    const images = [img1, img2, img3];

    // Core functionality function: Bring Image to Front
    function bringToFront(targetImage) {
        // Requirement: All other images must reset their z-index to 1
        images.forEach(img => {
            img.style.zIndex = '1';
        });
        
        // Requirement: corresponding image should appear in front by setting its z-index to 10
        targetImage.style.zIndex = '10';
    }

    // Event Handling: Use addEventListener in JavaScript for each button
    btn1.addEventListener('click', () => bringToFront(img1));
    btn2.addEventListener('click', () => bringToFront(img2));
    btn3.addEventListener('click', () => bringToFront(img3));
});