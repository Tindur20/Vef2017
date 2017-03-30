"use strict";
//breytur fyrir markeranna
var markers = [];

//function til að byrta kort
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    //Miðjan á íslandi
    //65.0680218,-19.3345726
    center: new google.maps.LatLng(65.0680218,-19),
    mapTypeId: 'terrain'
  });
}

//náð í apann
$.ajax({
    'url': 'http://apis.is/earthquake/is',
    'type': 'GET',
    'dataType': 'json',
    'success': function(data) {
      
      show(data);

/*
          Sliderinn 
*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 50 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.values[ 0 ]/10 + " - " + ui.values[ 1 ]/10);
          ShowOnMap(data, ui.values[0]/10,ui.values[1]/10);
        }
  });

       $( "#amount" ).val( "0.0" + " - " + "4.0");

    }
});


//Setur data á kortið
function show(data){
  for (var i = 0; i < data.results.length; i++) {
      var lat = data.results[i].latitude; //sækir latitude frá json skráninni
      var lon = data.results[i].longitude;//sækir longitude frá json skráninni
      var latLng = new google.maps.LatLng(lat, lon);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: GetCircle(data.results[i].size)
      });
      markers.push(marker);
    }
}

//breytir markerunum
function ShowOnMap(data, s1, s2){
  for (var i = 0; i < markers.length; i++) {
    if (data.results[i].size < s1 || data.results[i].size > s2) {
      markers[i].setMap(null);
    }
    else {
      markers[i].setMap(map);
    }
  }
}

//gerir hringi staðinn fyrir 
//þetta er frá google 
function GetCircle(size){
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, size * 3) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}