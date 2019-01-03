var drawCircle = (function (win, doc) {

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
        canvas.onmousedown = function (e) {

            // Clear the canvas everytime new circle is drawn 
            context.clearRect(0, 0, canvas.width, canvas.height);
            nextColor = randomColor();
            x = e.pageX - e.target.offsetLeft;
            y = e.pageY - e.target.offsetTop;

            // loop through all circle and check weather they are overlapping or not 

            for (var i = 0; i < circlesArr.length; i++) {
                distance = calculateDistance(circlesArr[i].X, circlesArr[i].Y, x, y);
                if (distance < 2 * ballSize) {

                    // deactivate overlapping circles
                    circlesArr[i].isActive = false;
                }
            }

            // object which store information about circles on canvas

            circlesArr.push({
                X: x,
                Y: y,
                color: nextColor,
                isActive: true
            })

            drawCircles();

        };
    }

    // this function will calculate distance between current circle and liast of circle in circlesArr. this a disatance between center of circles

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    function drawCircles() {
        for (var i = 0; i < circlesArr.length; i++) {

            // only show active circles
            if (circlesArr[i].isActive == true) {
                context.beginPath();
                context.fillStyle = circlesArr[i].color;
                context.arc(circlesArr[i].X, circlesArr[i].Y, ballSize, 0, 2 * Math.PI);
                context.fill();
                context.closePath();
            }
        }
    }
})(window, document);
