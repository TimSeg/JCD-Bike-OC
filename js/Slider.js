// Set slider

"use strict";


class Slider {
    constructor() {
        this.slides = document.getElementsByClassName("slide");
        this.next = document.getElementById("next-arrow");
        this.previous = document.getElementById("prev-arrow");
        this.stop = document.getElementById("stop-defil");
        this.currentSlide = 1;
        this.autoDefil = setInterval(this.plusSlides.bind(this), 5000);
        this.stateStop = 0;
    }
