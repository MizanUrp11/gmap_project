
var chittagong = L.marker([22.38182534391498,91.79589911233589]).bindPopup("Chittagong");
var dhaka = L.marker([23.77529123645138, 90.36034436425061]).bindPopup("Dhaka");


var cities = L.layerGroup([chittagong,dhaka]);

var basemapProperties = {
    "link": 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    "zoom": 18,
    "attribution": 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    "id": 'mapbox/streets-v11',
    "grayscaleMapid":"mapbox/light-v9",
    "tileSize": 512,
    "zoomOffset": -1
}
var grayscale = L.tileLayer(basemapProperties.link, {id: basemapProperties.grayscaleMapid, tileSize: 512, zoomOffset: -1, attribution: basemapProperties.attribution});
var streets   = L.tileLayer(basemapProperties.link, {id: basemapProperties.id, tileSize: 512, zoomOffset: -1, attribution: basemapProperties.attribution});

var basemaps = {
    "Grayscale": grayscale,
    "Streets":streets
}
var overlayMaps = { "cities":cities}
var mymap = L.map('mapid', {
    center:[23.787484, 90.341471],
    zoom: 6,
    layers: [grayscale, cities]
});

var layerControl = L.control.layers(basemaps,overlayMaps,{
    collapsed: false,
});
layerControl.addTo(mymap);
layerControl._container.remove();

document.getElementById('layerSidebar').appendChild(layerControl.onAdd(mymap));

    

// mymap.addEventListener("click",function(e){
//     console.log(e.latlng);
// })