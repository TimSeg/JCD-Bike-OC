// Strict mode
"use strict";

class GoogleMap {

    constructor() {

        // Add coordonates for center map

        this.amiens = {lat: 49.894009, lng: 2.295838};


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

                    // Display infos for each selected station
                    if (station.name) {
                        const reservation = document.getElementById("booking");

                        // Station status + infos text
                        if (station.status === "OPEN") {
                            stationStatus.textContent = "Station ouverte";
                        }
                        else {
                            stationStatus.textContent = "Station fermée";
                        }


                        // green marker if station OPEN / red marker if closed (use else)
                        if (station.status === "OPEN") {
                            marker.icon= {url: "images/green-marker.png",};
                        }
                        else {
                            marker.icon= {url:"images/red-marker.png"};
                        }


                        marker.addListener("click", function () {

                            document.getElementById("booking").style.display="block";

                            const stationName = document.getElementById("stationName");
                            const stationAddress = document.getElementById("stationAddress");
                            const availableBikes = document.getElementById("bikesAvailable");
                            const bikeStands = document.getElementById("standsAvailable");
                            const buttonBooking = document.getElementById("validate");

                            const nameString = `${station.name}`;
                            const addressString = `${station.address}`;

                            // Get personnal infos from previous rental to avoid re-typing
                            var storedLastName = localStorage.getItem("lastname");
                            var storedFirstName = localStorage.getItem("firstname");
                            document.getElementById("lastname").value = storedLastName;
                            document.getElementById("firstname").value = storedFirstName;

                            // display infos about station
                            stationName.innerText = nameString;
                            stationAddress.innerText = addressString;
                            availableBikes.innerText = station.available_bikes;
                            bikeStands.innerText = station.available_bike_stands;




                            // New available bikes number : -1 on validation
                            let newAvailableBikes;

                            buttonBooking.addEventListener("click", function () {

                                sessionStorage.setItem("stationname", nameString);
                                sessionStorage.setItem("stationaddress", addressString);



                                //
                                var stationAddressConfirm = document.getElementById("stationConfirm");
                                stationAddressConfirm.innerText = sessionStorage.getItem("stationaddress");

                                if (reservation.timeMin !== null && reservation.timeSec !== isNaN) {
                                    newAvailableBikes = station.available_bikes-1;
                                    sessionStorage.setItem("stationBikeAvailable", newAvailableBikes);
                                }
                                else {
                                    newAvailableBikes = station.available_bikes;
                                }

                                newAvailableBikes = sessionStorage.getItem("stationBikeAvailable");


                                if (newAvailableBikes < 1) {
                                    availableBikes.innerText = "Aucun vélo n'est plus disponible à cette station.";
                                    buttonBooking.classList.add("hide");
                                }
                                else if (newAvailableBikes > 0) {
                                    availableBikes.innerText = newAvailableBikes + " vélo(s) encore disponible(s).";
                                    buttonBooking.classList.remove("hide");
                                }


                            });
                        });
                    }
                }
            });
    }
}

