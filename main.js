var mymap = L.map('mapid').setView([35.988611, -78.907222], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3Rlcm5zaW8iLCJhIjoiY2psZ2gzNGlmMTdndzN3bHF6bmNsYXNoNCJ9.hnlS0lqu9mOd4VpmUpZoQQ'
}).addTo(mymap);


var marker = L.marker([35.994674, -78.898696]).addTo(mymap);

marker.openPopup();
// "<b>Howdy Y'all!</b>"


function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

navigator.geolocation.getCurrentPosition(function(position) {
      // console.log(position.coords)
      // Get the coordinates of the current possition.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      console.log(lat, lng)
})


// optimized Haversine formula from 'Salvador Dali' on Stack Overflow
function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

distance(35.994674, -78.898696, 35.9732809, -78.91758349999999)
