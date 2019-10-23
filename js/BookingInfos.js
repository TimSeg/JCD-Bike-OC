"use strict";

document.getElementById("lastname").value = localStorage.getItem("lastname");
document.getElementById("firstname").value = localStorage.getItem("firstname");


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

var buttonBooking = document.getElementById("validate");
buttonBooking.addEventListener("click", function(){
    var lastName = document.getElementById("lastname").value;
    var firstName = document.getElementById("firstname").value;
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("firstname", firstName);

    var lastNameConfirm = document.getElementById("lastNameConfirm");
    var firstNameConfirm = document.getElementById("firstNameConfirm");
    lastNameConfirm.innerText = localStorage.getItem("lastname");
    firstNameConfirm.innerText = localStorage.getItem("firstname");


});









