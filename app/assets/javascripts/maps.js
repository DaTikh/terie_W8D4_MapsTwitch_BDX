var map;

function myMap() {

  mapProp = {
    center: new google.maps.LatLng(43.726400, -1.051667),
    zoom: 13
  };

  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function placeMarker(map, lat, lng, msg) {

  var marker = new google.maps.Marker({
    position: {lat: +lat, lng: +lng},
    map: map,
    animation: google.maps.Animation.BOUNCE
  });
  
  var infoWindow = new google.maps.InfoWindow({
    content: msg
  });

  google.maps.event.addListener(marker, 'click', function(event) {
    infoWindow.open(map, marker);
  });
}


function getFormInfos() {

  var form = document.getElementById("form")
  var lat = form.elements[0].value
  var lng = form.elements[1].value
  var msg = form.elements[2].value

  placeMarker(map, lat, lng, msg);
  map.setCenter(new google.maps.LatLng(+lat, +lng));
  map.setZoom(6);
}
