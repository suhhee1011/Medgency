
const map = L.map("map-template").setView([43.6532, -79.3832], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var patientIcon = L.icon({
    iconUrl: '/image/Agen.jpeg',
    iconSize: [38, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

const helperMarker = new L.marker([43.6552, -79.3822]).addTo(map).bindPopup('Helper: Billy');
const patientMarker = new L.marker([43.6502, -79.3852],{icon : patientIcon}).addTo(map).bindPopup('Patient: Gina').openPopup();
    