// Initialize the map
const centerLngLat = [-117.854,33.676]
const startingZoomLvl = 15

let startingPoint = {"startingZoomLvl": 15, "centerLngLat": [-118.444,34.071]}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=3o1p8QOuX7nNtoM3YRz0', // Your style URL
    center: startingPoint.centerLngLat, // Starting position [lng, lat]
    zoom: startingPoint.startingZoomLvl // Starting zoom level
});

function createButtons(latitude,longitude,title){
    const newButton = document.createElement("button"); // (1)! 
    newButton.id = "button"+title; // (2)! 
    newButton.setAttribute("class","clickbuttons")
    newButton.innerHTML = title; // (3)! 
    newButton.setAttribute("lat",latitude); // (4)! 
    newButton.setAttribute("lng",longitude); // (5)! 
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [longitude,latitude], //(6)!
        })
    })
    document.getElementById("content").appendChild(newButton); //(7)! 
}

function addMarker(latitude,longitude,title,message){
    new maplibregl.Marker()
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML(`<h2>${title}</h2> <h3>${message}</h3>`))
        .addTo(map)
    createButtons(latitude,longitude,title,message);
    return message
}

map.on('load',function(){
    fetch("map.geojson")
        .then(response=> response.json())
        .then(data=> {
            processData(data)
        });
});

function processData(results){
    console.log(results) //for debugging: this can help us see if the results are what we want
    results.features.forEach(feature => {
        //console.log(feature) // for debugging: are we seeing each feature correctly?
        // the console log can make sure we have the right field names selected!
        let coordinates = feature.geometry.coordinates;
        let longitude = coordinates[0];
        let latitude = coordinates[1];
        let title = feature.properties.title;
        let message = feature.properties.message;
        addMarker(latitude,longitude,title,message);
    });
};