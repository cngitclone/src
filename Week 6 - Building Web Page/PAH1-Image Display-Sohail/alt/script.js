document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");

    const images = [img1, img2, img3];

    function bringToFront(targetImg) {
        images.forEach(img => {
            if (img.id === targetImg.id) {
                img.style.zIndex = "10";
            } else {
                img.style.zIndex = "1";
            }
        });
    }

    btn1.addEventListener("click", () => bringToFront(img1));
    btn2.addEventListener("click", () => bringToFront(img2));
    btn3.addEventListener("click", () => bringToFront(img3));
});