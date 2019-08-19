// Set slider

"use strict";


class Slideshow {
    constructor() {
        this.slides = document.getElementsByClassName("slide");
        this.next = document.getElementById("next-arrow");
        this.previous = document.getElementById("prev-arrow");
        this.stop = document.getElementById("stop-defil");
        this.slideIndex = 1;
        this.autoDefil = setInterval(this.plusSlides.bind(this), 5000);
        this.stopDefil = 0;
    }

    initSlideshow() {
        this.showSlides();
        document.addEventListener("keydown", this.keyboardControl.bind(this));
        this.next.addEventListener("click", this.nextSlide.bind(this));
        this.previous.addEventListener("click", this.previousSlide.bind(this));
        this.stop.addEventListener("click", this.stopDefilement.bind(this));
    }



/*
class Slideshow {
    constructor(){
        this.name = "Slideshow"
        this.slides = document.getElementsByClassName("slide");
        this.dots = document.getElementsByClassName("dot");
        this.next = document.getElementById("next-arrow");
        this.previous = document.getElementById("prev-arrow");
        this.stop = document.getElementById("stop-defil");
        this.slideIndex = 1;
}

initSlideshow() {
    this.showSlides();
        document.addEventListener("keydown", this.keyboardControl.bind(this));
        this.next.addEventListener("click", this.nextSlide.bind(this));
        this.previous.addEventListener("click", this.previousSlide.bind(this));
        this.stop.addEventListener("click", this.stopDefilement.bind(this));
}*/

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


    plusSlides() {
        this.showSlides(this.slideIndex += 1);
    }

    prevSlides() {
        this.showSlides(this.slideIndex -= 1);
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
