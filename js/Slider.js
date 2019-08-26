// Set slider

"use strict";



class Slider {
    constructor() {
        this.name = "slideshow";
        this.slides = document.getElementsByClassName("slide");
        this.dots = document.getElementsByClassName("dot");
        this.next = document.getElementById("next-arrow");
        this.previous = document.getElementById("prev-arrow");
        this.stop = document.getElementById("stop-defil");
        this.slideIndex = 0;
        this.stateStop = 0;
        
    }


    initSlider() {
        document.addEventListener("keydown", this.keyboardControl.bind(this));
        this.next.addEventListener("click", this.nextSlide.bind(this));
        this.previous.addEventListener("click", this.previousSlide.bind(this));
        this.stop.addEventListener("click", this.stopAuto.bind(this));
        
        this.nextSlide();
        
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


//laft and right arrows click controls


    nextSlide() {
        this.showSlides(this.slideIndex += 1);
        //set automatic scrolling
        this.slideAutomation = setTimeout(this.nextSlide.bind(this), 5000);
    }

    previousSlide() {
        this.showSlides(this.slideIndex -= 1);
    }

//keyboard arrows controls for slideshow scrolling
    
    keyboardControl(e) {
        switch (e.key) {

            case "ArrowLeft":
                this.previousSlide();
                break;

            case "ArrowRight":
                this.nextSlide();
                break;

            default:
                console.log("Merci d'utiliser uniquement les touches fléchées gauche/droite du clavier");
            
        }
    }


// Stop slideshow automation

    stopAuto() {
        if (this.stateStop === 0) {
            clearTimeout(this.slideAutomation);
            //this.stop.textContent = "Arrêter/Démarrer le diaporama";
            this.stateStop ++;
        }
        else  {
            this.slideAutomation = setTimeout(this.nextSlide.bind(this), 5000);
            //this.stop.textContent = "Arrêt du défilement";
            this.stateStop --;}
    }

}





/////////////////////////////////////////////////////////////////////////////////