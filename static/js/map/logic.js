// Store API enpoint inside variable usgsUrl
var locationsURL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
  "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// Perform a GET request to the query URL
d3.json(locationsURL, function (data) {
    console.log(data);
    // createFeatures(data.features);
});

// function createFeatures(locationsData) {
//     function onEachFeature(feature, layer) {
//         layer.bindPopup("<h3>" + feature.properties.Security +
//             "</h3><hr><p>" + feature.properties.City + "</p>");
//     }

//     var locations = L.geoJSON(locationsData, {
//         onEachFeature: onEachFeature
//     });

//     createMap(locations);
// }

// function createMap(locations) {
//     // Add a tile layer (the background map image) to our map
//     // We use the addTo method to add objects to our map
//     var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 512,
//         maxZoom: 18,
//         zoomOffset: -1,
//         id: "mapbox/streets-v11",
//         accessToken: API_KEY
//     });

//     // Darkmap layer
//     var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//         maxZoom: 18,
//         id: "dark-v10",
//         accessToken: API_KEY
//     });

//     // Satellite layer
//     var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         maxZoom: 9,
//         id: "satellite-streets-v11",
//         accessToken: API_KEY
//     });

//     // Outdoors layer
//     var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//         maxZoom: 10,
//         id: "outdoors-v11",
//         accessToken: API_KEY
//     });

//     // baseMaps layer
//     var baseMaps = {
//         "Street Map": streetmap,
//         "Dark Map": darkmap,
//         "Satellite": satellite,
//         "Outdoors": outdoors
//     };

//     // Create overlay object to hold our overlay layer
//     var overlayMaps = {
//         Locations: locations
//     };

//     // Create our initial map object
//     // Set the longitude, latitude, and the starting zoom level
//     var myMap = L.map("map", {
//         center: [45.52, -122.67],
//         zoom: 13
//     });

//     // Create a layer control
//     // Pass in our baseMaps and overlayMaps
//     // Add the layer control to the map
//     L.control.layers(baseMaps, overlayMaps, {
//         collapsed: false
//     }).addTo(myMap);
// }