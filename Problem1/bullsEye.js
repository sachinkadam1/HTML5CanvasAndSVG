var sliderModule = (function(win, doc) {

    win.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;


    function init() {        
       
            var canvas = document.getElementById("testCanvas");
            var context = canvas.getContext("2d");
            var radius = 15;
            var height = canvas.height;
            var width = canvas.width;
            var rows = height / (2 * radius);
            var columns = width/(2*radius);
            var redColor = true;
            var startx = radius;  // start x index of first circle
            var starty = height - radius; // start y index of circle

            for (let row = 0; row < rows; row++) {
                for (let column = 0; column < columns; column++) {
                    
                    // for alternative colors
                    if (redColor) {
                                context.fillStyle = "#FF0000"; // red 
                            } else {
                                context.fillStyle = "#0000FF"; // blue 
                            }

                    redColor = !redColor;
                    context.beginPath();
                    // to draw circle
                    context.arc(startx, starty, radius, 0, 2 * Math.PI, true);
                    context.fill();
                    context.closePath();
                    startx = startx + (2 * radius);
                }
            redColor= !redColor;
            startx = radius;
            starty = starty - (2 * radius);
        }

    }

})(window, document);






