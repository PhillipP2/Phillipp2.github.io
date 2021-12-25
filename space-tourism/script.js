const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');
const nav = document.querySelector('.nav');

const toggleHamburger = () => {
  if (nav.classList.contains('active')) {
    hamburgerImg.src = './assets/shared/icon-close.svg';
    hamburger.ariaExpanded = 'true';
  } else {
    hamburgerImg.src = './assets/shared/icon-hamburger.svg';
    hamburger.ariaExpanded = 'false';
  }
};

const updateSlider = (slider, newSelection) => {
  let previousSelection = slider.querySelector(`[aria-selected="true"]`);
  previousSelection.setAttribute('aria-selected', 'false');
  newSelection.setAttribute('aria-selected', 'true');
};

hamburgerImg.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleHamburger();
});