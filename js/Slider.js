// Set slider



class Slideshow {
    constructor() {
        this.slides = document.getElementsByClassName("slide");
        this.stop = document.getElementById("stop-defil");
        this.currentSlide = 1;
        this.prevSlide = document.getElementById("prev-slide");
        this.nextSlide = document.getElementById("next-slide");
        this.slideshowAuto = setInterval(this.plusSlides.bind(this), 5000);
        this.stateStop = 0;
}

initSlideshow() {
    this.showSlides();
    document.addEventListener("keydown", this.keyboardControl.bind(this));
    this.prevSlide.addEventListener("click", this.prevSlides.bind(this));
    this.nextSlide.addEventListener("click", this.plusSlides.bind(this));
    this.stop.addEventListener("click", this.stopDefil.bind(this));
}

showSlides(n) {
    if (n > this.slides.length) {
        this.currentSlide = 1;
    }
    if (n < 1) {
        this.currentSlide = this.slides.length;
    }
    for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
    }
    this.slides[this.currentSlide - 1].style.display = "block";
}

