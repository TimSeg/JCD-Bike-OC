// Strict mode
"use strict";

class GoogleMap {

    constructor() {

        // Add coordonates for center map

        this.amiens = {
            lat: 49.894009,
            lng: 2.295838
        };
    }

initGoogleMap() {
    let gMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: this.amiens
    });


// Call Ajax

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Amiens&apiKey=79fd38d925a7ea9a6962391cf653c7abcb7ac88f", function (reponse) {
            let stations = JSON.parse(reponse);
            stations.forEach(function(station) {
                createMarker(station);
            });
        });




}



}