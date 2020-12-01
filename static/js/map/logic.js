var map = L.map('map').setView([42.35, -71.08], 13);

// load a tile layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "streets-v11",
    accessToken: API_KEY
});

// load GeoJSON from an external file
$.getJSON("http://127.0.0.1:5000/locations", function (data) {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
});