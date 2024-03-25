let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 51.45514208384734, lng: -2.5917920717959344 },
    zoom: 18,
  });
  const marker = new google.maps.Marker({
    position: { lat: 51.45514208384734, lng: -2.5917920717959344 },
    map: map,
    title: "Marker Title" // Optional title for the marker
});
}
initMap();


