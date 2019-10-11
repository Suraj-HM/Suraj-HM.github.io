

// VARIALBLE INITIALIZATOIN
var width = 20;

var bubbleSortCanvas = document.getElementById('bubbleSortCanvas');
var context = bubbleSortCanvas.getContext('2d');

var bubbleSortCanvasheight = bubbleSortCanvas.height = window.innerHeight;
var bubbleSortCanvaswidth = bubbleSortCanvas.width = window.innerWidth;

var bubble_i = 0;
var heights = [];

var bsort_range_slider = document.getElementById("bubble_vis_density");


// SUPPORTING FUNCTIONS

function drawCanvas() {
    bubble_i = 0;
    heights = [];
    context.clearRect(0, 0, bubbleSortCanvaswidth, bubbleSortCanvasheight);
    for (let index = 0; index < Math.floor(bubbleSortCanvaswidth / (width)); index++) {
        if (index % 2 == 0) {
            let height = Math.ceil(Math.random() * bubbleSortCanvasheight);
            heights[index] = height;
            context.fillRect(index * width, 0, width, height);
        }
    }
}

function changeWidth() {
    if (bubbleSortCanvasheight > 0) {
        let val = parseInt(200 / bsort_range_slider.value);
        if (val == 0) {
            val = 1;
        }
        width = val;
        drawCanvas();
    } else {
        alert('Resize screen ...!');
    }
}

function resizeCanvas() {
    if( bubbleSortCanvaswidth/bubbleSortCanvasheight < 9/16) {
        bubbleSortCanvasheight = window.innerHeight - 380;
        bubbleSortCanvas.height = window.innerHeight - 380;
    } else {
        bubbleSortCanvasheight = window.innerHeight - 250;
        bubbleSortCanvas.height = window.innerHeight - 250;
    }

    bubbleSortCanvaswidth = bubbleSortCanvas.width = window.innerWidth - 100;
    changeWidth();
}

// SORTING ALGORITHM
function bubbleSortStep() {
    if (heights.length - 1 > bubble_i) {
        for (let j = bubble_i; j < heights.length; j++) {
            if (heights[bubble_i] > heights[j]) {
                context.clearRect(0, 0, bubbleSortCanvaswidth, bubbleSortCanvasheight);
                for (let index = 0; index < Math.floor(bubbleSortCanvaswidth / (width)); index++) {
                    if (index == bubble_i) context.fillStyle = "#00FF00";
                    else if (index == j) context.fillStyle = "#FF0000";
                    else context.fillStyle = "#000000";
                    context.fillRect(index * width, 0, width, heights[index]);
                }
                let temp = heights[bubble_i];
                heights[bubble_i] = heights[j];
                heights[j] = temp;
            }
        }
        bubble_i += 1;
    }
    if (heights.length - 1 > bubble_i) {
        for (let j = bubble_i; j < heights.length; j++) {
            if (heights[bubble_i] > heights[j]) {
                let temp = heights[bubble_i];
                heights[bubble_i] = heights[j];
                heights[j] = temp;
            }
        }
        bubble_i += 1;
    } else {
        context.clearRect(0, 0, bubbleSortCanvaswidth, bubbleSortCanvasheight);
        for (let index = 0; index < Math.floor(bubbleSortCanvaswidth / (width)); index++) {
            context.fillStyle = "#0000FF";
            context.fillRect(index * width, 0, width, heights[index]);
        }
        alert('Sorted ..!');
    }
    context.fillStyle = "#000000";
}

function bubbleSort() {
    if (heights.length - 1 > bubble_i) {
        for (; bubble_i < heights.length - 1; bubble_i++) {
            for (let j = bubble_i; j < heights.length; j++) {
                if (heights[bubble_i] > heights[j]) {
                    let temp = heights[bubble_i];
                    heights[bubble_i] = heights[j];
                    heights[j] = temp;
                }
            }
        }
        context.clearRect(0, 0, bubbleSortCanvaswidth, bubbleSortCanvasheight);
        for (let index = 0; index < Math.floor(bubbleSortCanvaswidth / (width)); index++) {
            context.fillStyle = "#0000FF";
            context.fillRect(index * width, 0, width, heights[index]);
        }
    } else {
        alert('Sorted ..!');
    }
    context.fillStyle = "#000000";
}

resizeCanvas();
changeWidth();