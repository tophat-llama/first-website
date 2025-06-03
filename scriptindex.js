
// Gallery Image Swap Arrow-Function
// Click-listener all sideImages class, store main src in temp const, swap clicked Image into Main, and swap temp const into the Side Image.
const mainImage = document.getElementById('imageMain');
const thumbnails = document.querySelectorAll('.sideImage');

thumbnails.forEach(sideImage => {
    sideImage.addEventListener('click', () => {
    const swappedImage = mainImage.src;
    mainImage.src = sideImage.src;
    sideImage.src = swappedImage;
    });
});

// Modal Expression of Interest Form
// Click listener the modal button, set display from none to block. Show form content. On x-span thing click, set back to none again.

const modal = document.getElementById("formModal");
const btn = document.getElementById("modalButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function openBox() {
  modal.style.display = "block";
}

span.onclick = function closeBox() {
  modal.style.display = "none";
}

