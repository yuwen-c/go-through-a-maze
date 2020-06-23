const draw = () => {
    // grad the canvas
        const canvas = document.getElementById("canvas1");
    // (we create one) ctx is an context object with draw methods
        const ctx = canvas.getContext("2d");
    // setting parameter of draw method
        // ctx.fillStyle = "rgba(0,200,0,1)";
    // draw a rectangle (x, y, width. height)
        // ctx.fillRect(36, 10, 22, 50);
       ctx.beginPath();
       ctx.moveTo(0, 0); // set the start point
       ctx.lineTo(130, 50);
       ctx.lineTo(70,100);
       ctx.strokeStyle = "#FF0000";
       ctx.lineWidth = 3;
    // close the
       ctx.closePath();
    // draw with stroke
       ctx.stroke();
    }
    