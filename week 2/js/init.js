// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: [-118.4430,34.0691], // Starting position [lng, lat]
    zoom: 15 // Starting zoom level
});

function createButtons(latitude,longitude,title){
    const newButton = document.createElement("button"); // (1)! 
    newButton.id = "button"+title; // (2)! 
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

addMarker(34.070,-118.444, "UCLA", "Where I work on campus")
addMarker(34.056,-118.234, "Metro", "Where I work at Metro")
addMarker(34.059,-118.374, "Games", "Where I work at games")