"use strict";


var Canvas = function () {

    var that = this;
    this.canvas = document.getElementById("draw");
    this.ctx = this.canvas.getContext("2d");
    this.thickness = 3;

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
            that.mouseXFirst=e.pageX || e.clientX;
            that.mouseYFirst=e.pageY || e.clientY;
            that.mouseXFirst=Math.floor(that.mouseXFirst-that.canvas.getBoundingClientRect().x);
            that.mouseYFirst=Math.floor(that.mouseYFirst-that.canvas.getBoundingClientRect().y-window.scrollY);
        });

        this.canvas.addEventListener("mouseup", function () {
            this.isDown = false;
        });

        this.canvas.addEventListener("mousemove", function (e) {
            that.mouseX=e.pageX || e.clientX;
            that.mouseY=e.pageY || e.clientY;
            that.mouseX=Math.floor(that.mouseX-that.canvas.getBoundingClientRect().x);
            that.mouseY=Math.floor(that.mouseY-that.canvas.getBoundingClientRect().y-window.scrollY);


            if(this.isDown) {
                // Display pixel on click
                that.ctx.beginPath();

                that.ctx.moveTo(that.mouseXFirst, that.mouseYFirst);
                that.ctx.lineTo(that.mouseX, that.mouseY);

                that.ctx.stroke();
                that.ctx.closePath();
                
                that.mouseXFirst = that.mouseX;
                that.mouseYFirst = that.mouseY;
            }

        });
    }
};


