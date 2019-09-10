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
    }
}