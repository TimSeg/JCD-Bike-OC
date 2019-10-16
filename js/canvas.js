"use strict";


var Canvas = function () {

    this.canvas = document.getElementById("draw");
    this.ctx = this.canvas.getContext("2d");


    // Canvas resolution

    this.canvas.width = 280;
    this.canvas.height = 130;
    this.canvas.style.width = "280px";
    this.canvas.style.height = "130px";
    this.mouseX;
    this.mouseY;
    this.mouseXFirst;
    this.mouseYFirst;

    this.initCanvas = function (){
        this.canvas.addEventListener("mousedown", function (e) {
            this.isDown = true;

            //set mouse position on 0 (x and y) on canvas
            this.mouseXFirst = e.pageX || e.clientX;
            this.mouseYFirst = e.pageY || e.clientY;
            this.mouseXFirst = Math.floor(this.mouseXFirst-this.canvas.getBoundingClientRect().x);
            this.mouseYFirst = Math.floor(this.mouseYFirst-this.canvas.getBoundingClientRect().y-window.scrollY);
        }.bind(this));

        //stop draw when stop click
        this.canvas.addEventListener("mouseup", function () {
            this.isDown = false;
        }.bind(this));


        this.canvas.addEventListener("mousemove", function (e) {
            this.mouseX = e.pageX || e.clientX;
            this.mouseY = e.pageY || e.clientY;
            this.mouseX = Math.floor(this.mouseX-this.canvas.getBoundingClientRect().x);
            this.mouseY = Math.floor(this.mouseY-this.canvas.getBoundingClientRect().y-window.scrollY);

            if(this.isDown) {

                // Display pixels on click - drawing
                this.ctx.beginPath();

                //drawing threads between points to make curves
                this.ctx.moveTo(this.mouseXFirst, this.mouseYFirst);
                this.ctx.lineTo(this.mouseX, this.mouseY);

                this.ctx.stroke();
                this.ctx.closePath();
                
                this.mouseXFirst = this.mouseX;
                this.mouseYFirst = this.mouseY;

                // thickness (px) of the line
                this.ctx.lineWidth = 5;
            }
        }.bind(this));
    }
};

