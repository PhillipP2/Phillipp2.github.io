const circleSlider = document.querySelector('.circle-slider');
const techName = document.querySelector('.tech-name');
const techText = document.querySelector('.body');
const techImgSrc = document.querySelector('.tech-picture source');
const techImg = document.querySelector('.tech-picture img');
const mediaQueryLarge = window.matchMedia('(min-width: 65rem');

let technologies = []

const renderTechnology = (position) => {
  const { name, images, description } = technologies[position];
  techName.innerText = name;
  techImgSrc.srcset = images.portrait;
  techImg.src = images.landscape;
  techText.innerText = description;
}


// Unused.  Replaced this function with picture html element
const updateImgOrientation = () => {
  if(mediaQueryLarge.matches) {
    techImg.src = techImg.src.replace('landscape', 'portrait');
  } else {
    techImg.src = techImg.src.replace('portrait', 'landscape');
  }
} 

// Event listeners
// mediaQueryLarge.addEventListener('change', updateImgOrientation);
circleSlider.addEventListener('click', evt => {
  if (!evt.target.matches('.circle-slider > button')) {
    return;
  }
  updateSlider(circleSlider, evt.target);
  renderTechnology(evt.target.dataset.position);
  // updateImgOrientation();

});


// Load json data
fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    technologies = data.technology;
  });
// updateImgOrientation();


