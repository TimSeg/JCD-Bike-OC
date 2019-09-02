
// Use strict mode
"use strict";

// Check DOM content loaded



//disable scroll on spacebar for slideshow keyboard controls
function disableScroll(e){

	if (e.keyCode) {
		/^(32)$/.test(e.keyCode) && e.preventDefault();
	}else {
		e.preventDefault();
	}

}

addEventListener("keydown", disableScroll, false);



// Set slider

var slider = new Slider();
slider.initSlider();



// Set map

//Set form

//Set canvas
