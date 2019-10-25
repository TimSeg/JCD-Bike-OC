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
    }

}

Booked.prototype.initBooked = function () {
    this.buttonBooking.addEventListener("click", function () {

        var lastName = document.getElementById("lastname").value;
        var firstName = document.getElementById("firstname").value;
        localStorage.setItem("lastname", lastName);
        localStorage.setItem("firstname", firstName);

        this.lastNameConfirm.innerText = localStorage.getItem("lastname");
        this.firstNameConfirm.innerText = localStorage.getItem("firstname");
    }.bind(this));
};





