
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

//Set form

var booking = new Booking();
booking.initBooking();

//Set canvas

var canvas = new Canvas();
canvas.initCanvas();
