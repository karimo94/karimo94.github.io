var area = [51.505, -0.09];
var mymap = L.map('mapid').setView(area, 13);
//access token is obtained from mapbox api service
let accessToken = 'pk.eyJ1Ijoia2FyaW1vOTQiLCJhIjoiY2tlbnN2bG85MDUwbzJybjF4OWk4OHhmZiJ9.o3Z5DIWjKLOmigqgY5zYjQ';
//map is provided by mapbox api
//leaflet lets us be interactive with the map and set the location as well
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
}).addTo(mymap);
var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>You are here.</b><br>Sterry St.").openPopup();

//reverse geocoding

/*var geocodeService = L.esri.Geocoding.geocodeService();

mymap.on('click', function(e) {
    geocodeService.reverse().latlng(e.latlng).run(function(error, result) {
        if (error) {
            return;
        }

        L.marker(result.latlng).addTo(mymap).bindPopup(result.address.Match_addr).openPopup();
    });
});
*/

/*circle area
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

//a polygon of any shape can be made
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//adding popups to the markers
marker.bindPopup("<b>You are here.</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//stand-alone popup for 'your location' marker
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);*/