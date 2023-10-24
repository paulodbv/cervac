let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("cervacmap"), {
    center: { lat: -8.020410537719727, lng: -34.91315460205078 },
    zoom: 14,
  });
}

initMap();