


var canvas = document.getElementById('flappycanvas');
var context = canvas.getContext('2d');

var position = canvas.height - 30;

context.fillRect( 0, position, 30, 30);

function moveDown() {
    if (position < canvas.height - 30) {
        position += 20;
        context.clearRect( 0, 0, canvas.width, canvas.height);
        context.fillRect( 0, position, 30, 30);
    }
}

function moveUp() {
    position -= 20;
    context.clearRect( 0, 0, canvas.width, canvas.height);
    context.fillRect( 0, position, 30, 30);
}