"use strict";


// Check for blanck fields in the form

function checkforblanck(){
    if((document.getElementById('lastname').value === "") || (document.getElementById('firstname').value === "")) {
        alert('Entrez votre nom et prénom SVP');
        return false;
    }
}