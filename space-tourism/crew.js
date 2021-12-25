const dotSlider = document.querySelector('.dot-slider');
const crewImgSource = document.querySelector('.crew-picture source');
const crewImg = document.querySelector('.crew-picture img');
const crewName = document.querySelector('.crew-name');
const crewTitle = document.querySelector('.crew-title');
const crewText = document.querySelector('.body');

let crews = []

const renderCrew = (position) => {
  const { name, images, role, bio } = crews[position];
  crewName.innerText = name;
  crewImgSource.srcset = images.webp;
  crewImg.src = images.png;
  crewTitle.innerText = role;
  crewText.innerText = bio;
}

dotSlider.addEventListener('click', evt => {
  if (!evt.target.matches('.dot-slider > button')) {
    return;
  }
  updateSlider(dotSlider, evt.target);
  renderCrew(evt.target.dataset.position);

});

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    crews = data.crew;
  })