const map = L.map('map').setView([-34.80542038082431, -58.334107384092654], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([-34.80542038082431, -58.334107384092654])
  .addTo(map)
  .bindPopup('<b>Tu negocio</b><br>¡Te esperamos acá!')
  .openPopup();
