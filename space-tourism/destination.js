const tabList = document.querySelector('.tab-list');
const pictureSource = document.querySelector('.destination-picture source');
const pictureImg = document.querySelector('.destination-picture img')
const destinationName = document.querySelector('.destination-name')
const destinationText = document.querySelector('.body'); 
const destinationDistance = document.querySelector('.distance');
const destinationTime = document.querySelector('.time');

let destinations = [];

function renderDestination(destination) {
  const { name, images, description, distance, travel } = destinations.find(element => element.name === destination);
  destinationName.innerText = name;
  pictureSource.srcset = images.webp
  pictureImg.src = images.png;
  destinationText.innerText = description;
  destinationDistance.innerText = distance;
  destinationTime.innerText = travel;
}

// Event Listeners
tabList.addEventListener('click', evt => {
  if (!evt.target.matches('.tab')) {
    return;
  }
  updateSlider(tabList,evt.target);
  renderDestination(evt.target.dataset.value);
});

// Load destination data from json file
fetch('./data.json')
  .then(res => res.json())
  .then(data => {
      destinations  = data.destinations; 
  });
