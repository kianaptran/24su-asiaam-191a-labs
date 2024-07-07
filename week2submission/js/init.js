// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/aquarelle/style.json?key=3o1p8QOuX7nNtoM3YRz0', // Your style URL
    center: [-117.854,33.676], // Starting position [lng, lat]
    zoom: 15 // Starting zoom level
});

function createButtons(latitude,longitude,title){
    const newButton = document.createElement("button"); // (1)! 
    newButton.id = "button"+title; // (2)! 
    newButton.setAttribute("class","coffeebutton")
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

addMarker(33.676,-117.854, "Krisp", "blueberry matcha is best here")
addMarker(33.759,-117.949, "Airoma", "pandan drinks are yummy here")
addMarker(33.655,-117.867, "Stereoscope", "cool interior")