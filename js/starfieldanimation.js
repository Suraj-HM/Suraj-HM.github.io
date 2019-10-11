
class Object {
    constructor( width, height) {
        this.width = width;
        this.height = height;
    }
}



var canvas = document.getElementById('mycanvas');

var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;


var obj = new Object( 20, 20);

context.fillRect( width/2 - obj.width, height/2 - obj.height, obj.width, obj.height);

