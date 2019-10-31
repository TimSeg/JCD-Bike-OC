"use strict";
// Reminder :
//document.getElementById("lastname").value = localStorage.getItem("lastname");
//document.getElementById("firstname").value = localStorage.getItem("firstname");


// Check for blank fields in the form + display conclusion frame and remove the NoBooking message
function checkforblank(){
    if((document.getElementById("lastname").value === "") || (document.getElementById("firstname").value === "")) {
        alert("Entrez votre nom et prénom SVP");
        return false;
    }
    else{
        document.getElementById("bookingConfirmed").style.display = "block";
        document.getElementById("noBooking").style.display = "none";
    }
}


// Display personal infos from the Form + station location


class Booked{
    constructor(){
        this.buttonBooking = document.getElementById("validate");
        this.lastname = document.getElementById("lastname");
        this.firstname = document.getElementById("firstname");
        this.lastNameConfirm = document.getElementById("lastNameConfirm");
        this.firstNameConfirm = document.getElementById("firstNameConfirm");

        this.minTimer = document.getElementById("minTimer");
        this.secTimer = document.getElementById("secTimer");

        this.timeMin = sessionStorage.getItem("timeMin");
        this.timeSec = sessionStorage.getItem("timeSec");
        this.timer = "";

        this.timeMin = 20;
        this.timeSec = 0;

    }




    initBooked  () {
        this.buttonBooking.addEventListener("click", function () {

            var lastName = document.getElementById("lastname").value;
            var firstName = document.getElementById("firstname").value;

            localStorage.setItem("lastname", lastName);
            localStorage.setItem("firstname", firstName);


            clearInterval(this.timer);
            this.setBookInfos();
            this.startTimer();


        }.bind(this));
    }



    // Set timer
    startTimer() {
        this.timer = setInterval(this.countDown.bind(this), 1000);
    }

    countDown() {
        sessionStorage.setItem("timeMin",this.timeMin);
        sessionStorage.setItem("timeSec",this.timeSec);
        this.timeSec--;
        if (this.timeSec < 0) {
            this.timeSec = 59;
            this.timeMin--;
        }
        if (this.timeMin < 0) {

            clearInterval(this.timer);
            alert("Temps écoulé, veuillez faire une autre réservation");
        }
    }

    // display infos from local and session storage
    setBookInfos() {

        this.lastNameConfirm.innerText = localStorage.getItem("lastname");
        this.firstNameConfirm.innerText = localStorage.getItem("firstname");
        this.minTimer.innerText = sessionStorage.getItem("timeMin");
        this.secTimer.innerText = sessionStorage.getItem("timeSec");

    }



}





