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

initMap() {
    let gMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: this.amiens
    });







    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Amiens&apiKey=79fd38d925a7ea9a6962391cf653c7abcb7ac88f",
        function (reponse) {

            let stations = JSON.parse(reponse);
            let latitude, longitude;

            // Markers on stations
            stations.forEach(function (station) {
                latitude = station.position.lat;
                longitude = station.position.lng;
                addMarker(station);
            });
            function addMarker(station) {
                let stationStatus = document.getElementById("statusStation");
                let marker = new google.maps.Marker({
                    position: station.position,
                    map: gMap,
                    icon:""
                });


                // green marker if station OPEN / red marker if closed (use else)
                if (station.status === "OPEN") {
                    marker.icon= {
                        url: "images/green-marker.png",
                    };
                } else {
                    marker.icon= {
                        url:"images/red-marker.png"
                    };
                }

                // Check content
                if (station.name) {
                    const reserve = document.getElementById("booking");


                    // Station status + infos text
                    if (station.status === "OPEN") {
                        stationStatus.textContent = "Station ouverte";
                    } else {
                        stationStatus.textContent = "Station fermée";
                    }


                    marker.addListener("click", function () {
                        const stationName = document.getElementById("stationName");
                        const stationAddress = document.getElementById("stationAddress");
                        const availableBikes = document.getElementById("bikesAvailable");
                        const bikeStands = document.getElementById("standsAvailable");
                        const buttonBooking = document.getElementById("butBooking");

                        const nameString = `${station.name}`;
                        const addressString = `${station.address}`;

                        stationName.innerText = nameString;
                        stationAddress.innerText = addressString;
                        bikeStands.innerText = station.bike_stands;
                        availableBikes.innerText = station.available_bikes;

                        sessionStorage.setItem("stationBikeAvailable", station.available_bikes);
                        let bikeAvailable = sessionStorage.getItem("stationBikeAvailable");

                        // Available bikes minus 1 if click on booking button
                        buttonBooking.addEventListener("click", function () {
                            if (station.available_bikes < 1) {
                                availableBikes.innerText = "Zéro vélo disponible ici";
                                buttonBooking.classList.add("hide");
                            } else if (station.available_bikes > 0) {
                                availableBikes.innerText = station.available_bikes;
                            }
                        });
                        if (station.available_bikes > 0) {
                            buttonBooking.classList.remove("hide");
                        }

                        sessionStorage.setItem("stationname", nameString);
                        sessionStorage.setItem("stationaddress", addressString);
                    });
                }

            }

        });




}



}