// JavaScript to animate image when clicked
document.querySelector(".header img").addEventListener("click", () => {
  const img = document.querySelector(".header img");
  img.style.transition = "transform 0.5s";
  img.style.transform = "scale(1.2)";
  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 500);
});
function animateImage(element) {
  element.querySelector('img').style.transform = 'scale(1.2)';
}

function resetImage(element) {
  element.querySelector('img').style.transform = 'scale(1)';
}


