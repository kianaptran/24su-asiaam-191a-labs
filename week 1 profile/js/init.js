// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: [ -118.44925, 34.07213], // Starting position [lng, lat]
    zoom: 15 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([ -118.44585, 34.07196])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('John Wooden Center: catch me trying to sneak in a quick pump'))
    .addTo(map);

    new maplibregl.Marker()
    .setLngLat([ -118.45348, 34.07278])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Olympic Study Hall: usually here studying or napping'))
    .addTo(map);

    new maplibregl.Marker()
    .setLngLat([ -118.44456, 34.07058])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('UCLA Store Ackerman: my place of work'))
    .addTo(map);