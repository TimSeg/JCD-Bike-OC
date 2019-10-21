"use strict";


// Check for blanck fields in the form

function checkforblank(){
    if((document.getElementById("lastname").value === "") || (document.getElementById("firstname").value === "")) {
        alert("Entrez votre nom et prénom SVP");
        return false;
    }
    else{
        document.getElementById("bookingConfirmed").style.display = "block";
    }
}


class Booked {
    constructor() {
        this.confirmFrame = document.getElementById("bookingConfirmed");
        this.buttonBooking = document.getElementById("validate");

        this.canvas = document.getElementById("canvas");

        this.lastName = document.getElementById("lastname");
        this.firstName = document.getElementById("firstname");
        this.storedLastName = localStorage.getItem("lastname");
        this.storedFirstName = localStorage.getItem("firstname");

        this.recapInfoBooking = document.getElementById("infoBooking");
        this.lastNameConfirm = document.getElementById("lastNameConfirm");
        this.firstNameConfirm = document.getElementById("firstNameConfirm");
        this.stationAdressConfirm = document.getElementById("stationConfirm");
        this.minTimer = document.getElementById("minTimer");
        this.secTimer = document.getElementById("secTimer");

        this.noBooking = document.getElementById("noBooking");
        this.bookingTimerUp = document.getElementById("bookingTimerUp");

        this.stationAddress = sessionStorage.getItem("stationaddress");
        this.timeMin = sessionStorage.getItem("timeMin");
        this.timeSec = sessionStorage.getItem("timeSec");
        this.timer = "";
    }
}


Booking.prototype.initBooked = function () {
    this.buttonBooking.addEventListener("click", this.chekData.bind(this));


    if(this.timeSec === 0 && this.timeMin === 0) {
        sessionStorage.setItem("stationaddress", "");
        sessionStorage.setItem("stationname", "");
    }

    if(this.timeMin !== null && this.timeSec !== isNaN) {
        this.displayConfirmBook();
        this.startTimer();
    }
};



Reservation.prototype.checkData = function () {
    if(!((document.getElementById("lastname").value === "") || (document.getElementById("firstname").value === ""))){
        this.storeData();
    }
};


Reservation.prototype.storeData = function () {
    localStorage.setItem("lastname", this.lastName.value);
    localStorage.setItem("firstname", this.firstName.value);

    this.storedLastName = localStorage.getItem("lastname");
    this.storedFirstName = localStorage.getItem("firstname");

    this.stationAddress = sessionStorage.getItem("stationaddress");

    // Display with reservations info

    this.noBooking.classList.add("hide");
    this.bookingTimerUp.classList.add("hide");

    this.timeMin = 20;
    this.timeSec = 0;

    this.setInfoBooking();
    clearInterval(this.timer);
    this.startTimer();
};



Reservation.prototype.startTimer = function () {
    this.timer = setInterval(this.countDown.bind(this), 1000);
};


Reservation.prototype.countDown = function () {
    sessionStorage.setItem("timeMin",this.timeMin);
    sessionStorage.setItem("timeSec",this.timeSec);
    this.displayConfirmBook();
    this.timeSec--;
    if (this.timeSec < 0) {
        this.timeSec = 59;
        this.timeMin--;
    }
    if (this.timeMin < 0) {
        this.confirmFrame.classList.add("hide");
        this.bookingTimerUp.classList.remove("hide");
        clearInterval(this.timer);
    }
};
