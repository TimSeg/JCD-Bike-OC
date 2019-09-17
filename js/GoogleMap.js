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
            function addMarker(station) {
                let stationStatus = document.getElementById("statusStation");

                let marker = new google.maps.Marker({
                    position: station.position,
                    map: gMap,
                    icon:""
                });

                // Check if station Open
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

                    marker.addListener("click", function () {
                        const stationName = document.getElementById("stationName");
                        const stationAddress = document.getElementById("stationAddress");
                        const bikeStands = document.getElementById("standsAvailable");
                        const availableBikes = document.getElementById("bikesAvailable");
                        const buttonReservation = document.getElementById("butBooking");

                        // Status infos
                        if (station.status === "OPEN") {
                            stationStatus.textContent = "Station ouverte";
                        } else {
                            stationStatus.textContent = "Station fermée";
                        }

                        //Removing excessive numbers with regex
                        const regex = /#0+0/gm;
                        const nameString = `${station.name}`;
                        const addressString = `${station.address}`;
                        const subst = "";


                        // The substituted value will be contained in the result variable

                        const nameTruncated = nameString.replace(regex, subst);
                        const addressTruncated = addressString.replace(regex, subst);


                        stationName.innerText = nameTruncated;
                        stationAddress.innerText = addressTruncated;
                        bikeStands.innerText = station.bike_stands;
                        availableBikes.innerText = station.available_bikes;

                        sessionStorage.setItem("stationBikeAvailable", station.available_bikes);
                        let bikeAvailable = sessionStorage.getItem("stationBikeAvailable");

                        // Bike available minus 1 by click on validate btn
                        buttonReservation.addEventListener("click", function () {
                            if (station.available_bikes < 1) {
                                availableBikes.innerText = "Aucun vélo de disponible à cette station.";
                                buttonReservation.classList.add("hide");
                            } else if (station.available_bikes > 0) {
                                availableBikes.innerText = station.available_bikes + " vélo(s) restant(s) disponible(s).";
                            }
                        });
                        if (station.available_bikes > 0) {
                            buttonReservation.classList.remove("hide");
                        }

                        sessionStorage.setItem("stationname", nameTruncated);
                        sessionStorage.setItem("stationaddress", addressTruncated);
                    });
                }

            }

            let stations = JSON.parse(reponse);
            let latitude, longitude;
            // Add Markers for each station latitude & longitude
            stations.forEach(function (station) {
                latitude = station.position.lat;
                longitude = station.position.lng;
                addMarker(station);
            });
        });




}



}