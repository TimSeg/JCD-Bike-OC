// Set slider

"use strict";



function Slider (){
    constructor(slideshow) {
        this.name = "slideshow";
        this.slides = document.getElementsByClassName("slide");
        this.dots = document.getElementsByClassName("dot");
        this.next = document.getElementById("next-arrow");
        this.previous = document.getElementById("prev-arrow");
        this.stop = document.getElementById("stop-defil");
        this.slideIndex = 1;
        this.stateStop = 0;
        this.slideAutomation = setTimeout(this.nextSlide.bind(this), 5000);
    }


    initSlider() {
        this.showSlides();
        this.document.addEventListener("keydown", this.keyboardControl.bind(this));
        this.next.addEventListener("click", this.nextSlide.bind(this));
        this.previous.addEventListener("click", this.previousSlide.bind(this));
        this.stop.addEventListener("click", this.stopDefilement.bind(this));
    }
   


    showSlides(n) {

        if (n > this.slides.length) { 
            this.slideIndex = 1;
        } 
        if (n < 1) {
        this.slideIndex = this.slides.length;
        }
        for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none"; 
        }
        this.slides[this.slideIndex-1].style.display = "block"; 
    }



    nextSlide() {
        this.showSlides(this.slideIndex += 1);
    }

    previousSlide() {
        this.showSlides(this.slideIndex -= 1);
    }

}




/////////////////////////////////////////////////////////////////////////////////
