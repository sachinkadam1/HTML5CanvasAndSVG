var drawCircle = (function(win, doc) {

    win.onload = init;

    var canvas;
    var context;
    var ballSize = 30; //radius
    var nextColor;
    var circlesArr = [];
    var distance;
  
    function init() {
        canvas = doc.getElementById("testCanvas");
        context = canvas.getContext("2d");
         // mouse down event handler
        canvas.onmousedown = function(e) {
            
            nextColor = randomColor();
            x = e.pageX - e.target.offsetLeft;
            y = e.pageY - e.target.offsetTop;

            context.beginPath();
            context.fillStyle = nextColor;
            // Canvas function to draw circle of radius equal to ballsize
            context.arc(x, y,ballSize,0,2*Math.PI);
            context.fill();
            context.closePath();
       
        };
    }

})(window, document);
