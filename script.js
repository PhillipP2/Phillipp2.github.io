const overlayContainer = document.querySelector(".overlay-container");
const overlay = document.querySelector(".overlay");
const contactBtn = document.getElementById("contact-btn");

overlayContainer.addEventListener('click', evt => {
  if (evt.target.classList.contains('overlay-container')) {
    overlayContainer.classList.remove('show');
    overlay.classList.remove('show');
  }
})

contactBtn.addEventListener('click', () => {
  overlayContainer.classList.toggle('show');
  overlay.classList.toggle('show');
})



