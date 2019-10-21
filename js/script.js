
// Use strict mode
"use strict";

// Check DOM content loaded


// Set slider
var slider = new Slider();
slider.initSlider();

// Set map

var map = new GoogleMap();

function initMap() {
  map.initMap();
}

//Set canvas

var canvas = new Canvas();
canvas.initCanvas();


//Set booking confirmation form

var booked = new Booked();
booked.initBooked();


