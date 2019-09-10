// Strict mode
"use strict";

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            window.alert(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        window.alert("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}