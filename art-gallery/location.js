const addressXCordinate = 41.4813163;
const addressYCordinate = -71.3103603;
let map = L.map('map').setView([41.4818884, -71.3114193], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFkbWVsb24yIiwiYSI6ImNreHM3Ynl4NDJ5YzMybnBucjhsbXBwY3UifQ.0wXqs1YNEuwt3YINq4TzyQ'
}).addTo(map);

let customPin = L.icon({
  iconUrl: './icon-location.svg',
  iconSize:     [33, 44], // size of the icon
  iconAnchor:   [16, 44], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([41.4813163, -71.3103603], {icon: customPin}).addTo(map);