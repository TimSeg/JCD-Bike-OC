// Set slider

"use strict";



class Slider {
    constructor(){
        this.name = "Slideshow"
        this.slides = document.getElementsByClassName("slide");
        this.dots = document.getElementsByClassName("dot");
        this.next = document.getElementById("next-arrow");
        this.previous = document.getElementById("prev-arrow");
        this.stop = document.getElementById("stop-defil");
        this.slideIndex = 1;
        this.stateStop = 0;
    }

    initSlider() {
        this.showSlides();
        this.document.addEventListener("keydown", this.keyboardControl.bind(this));
        //this.next.addEventListener("click", this.nextSlide.bind(this));
        //this.previous.addEventListener("click", this.previousSlide.bind(this));
        this.stop.addEventListener("click", this.stopDefilement.bind(this));
    }
   


    showSlides(n) {

        if (n > this.slides.length) { 
            this.slideIndex = 1;
        } 
        if (n < 1) {
        this.slideIndex = this.slides.length
        }
        for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none"; 
        }
        this.slides[this.slideIndex-1].style.display = "block"; 
    }


    plusSlides(n) {
        this.showSlides(slideIndex += n);
}

}

/////////////////////////////////////////////////////////////////////////////////

/*

var slideIndex = 1;
showSlides(slideIndex);


// Next and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}


*/