// Import stylesheets
import './style.css';
import * as L from 'leaflet';
import type { LatLngExpression } from 'leaflet';

const state1 = {
  ch1: false,
};
const state2 = {
  ch2: false,
};
// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let mapcenter1 = [50.281234, 27.659904];
class MapBounds {
  minLat = '50.73819338';
  maxLat = '51.01980215';
  minLon = '29.24972534';
  maxLon = '29.56970215';
}

let Map2 = new MapBounds();

// class center {
//   [latitude : number, longitude :number]
// };

class camera1 {
  center: [] = [50.35, 27.66];
  radius: number;
}
class camera {
  center?: [] = [50.35, 27.66];
  radius: number;
}

//class usercams {
// [c1:camera, c2:camera, c3:camera, c4:camera]
//};
//var cams1 = C1.usercams;

let cam1 = new camera([50.359837, 27.991329]);
let cam2 = new camera();
let cam3 = new camera();
let cam4 = new camera();

cam1.center = [50.359837, 27.991329]; // dovb
cam2.center = [50.281234, 27.659904]; //bar
cam3.center = [50.424024, 27.830032]; //kb
cam4.center = [50.332116, 27.816944]; //yavne

cam1.radius = 11000;
cam2.radius = 15000;
cam3.radius = 15000;
cam4.radius = 15000;

var mymap = L.map('map').setView(mapcenter1, 9);
var topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png');
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//topoMap.addTo(mymap);
streetMap.addTo(mymap);

//------------------------
var polygon1 = L.polygon([cam1.center, cam2.center, cam3.center]).addTo(mymap);

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
//mapboxgl.accessToken = //'pk.eyJ1Ijoib2tvdGVsIiwiYSI6ImNrdmV5dWxncTB4OW4ydm8wem1zM3B2a2kifQ.FmG5cuzfg-erWu7TlKhmJA';
//var map = new mapboxgl.Map({
//container: 'MAPS',
//style: 'mapbox://styles/mapbox/streets-v11'
//});

//create Polyline cameras
var line12 = [cam1.center, cam2.center];
var line13 = [cam1.center, cam3.center];
var line23 = [cam3.center, cam2.center];

var pl12 = L.polyline(line12, { color: 'yellow' }).addTo(mymap);
var pl13 = L.polyline(line13, { color: 'yellow' }).addTo(mymap);
var pl13 = L.polyline(line23, { color: 'yellow' }).addTo(mymap);

var cc1 = L.circle(
  cam1.center,
  { radius: cam1.radius },
  { color: 'green' }
);
var cc2 = L.circle(
  cam2.center,
  { radius: cam2.radius },
  { color: 'red' }
);
var cc3 = L.circle(
  cam3.center,
  { radius: cam3.radius },
  { color: 'red' }
);

var cc4 = L.circle(cam4.center, { radius: cam4.radius }, { color: 'red' });


/*var polygon1 = L.polygon([
  [Map2.minLat, Map2.minLon],
  [Map2.minLat, Map2.maxLon],
  [Map2.maxLat, Map2.maxLon],
  [Map2.maxLat, Map2.minLon],
]).addTo(mymap);*/

function cdrow(c: camera) {}
cdrow(cam1);

/// GEOJSON
import('./k1.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k2.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k3.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k4.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k1-p.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k2-p.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k3-p.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./k4-p.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});
import('./B1.json').then((res) => {
  L.geoJSON(res).addTo(mymap);
});


// CHECKBOX
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');

ch1.onclick = (ev: MouseEvent) => {
  const checked = ev.target.checked;
  state1.ch1 = checked;
  console.warn(checked);
  if (checked) {
    cc1.addTo(mymap);
    cc2.addTo(mymap);
    cc3.addTo(mymap);
    cc4.addTo(mymap);
  } else {
    cc1.removeFrom(mymap);
    cc2.removeFrom(mymap);
    cc3.removeFrom(mymap);    
    cc4.removeFrom(mymap);
  }
};

