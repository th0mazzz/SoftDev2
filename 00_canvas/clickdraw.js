// Thomas Zhao
// SoftDev2 pd8
// K00 -- and I want to Paint It Better
// 2019-01-30

//Defines global non-function variables
var slate = document.getElementById("slate");
var context = slate.getContext("2d");
var clearButton = document.getElementById("clearButton");
var toggleButton = document.getElementById("toggleButton");
var modeDisplay = document.getElementById("modeDisplay");
var mode = "Rektangle"

//Starts off the mode display with current mode
modeDisplay.innerHTML = mode;

//Clears the entire canvas
var clearCanvas = function(e) {
    var canvasHeight = context['canvas']['height']
    var canvasWidth = context['canvas']['width']
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    console.log("Clearing the canvas")
}

//Draws on canvas upon click
var draw = function(e) {
    console.log(e)
    console.log(context)
    if(mode == "Rektangle"){
	context.fillRect(e.offsetX, e.offsetY, 100, 50);
    }
    else{
	context.beginPath();
	context.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 2 * Math.PI);
	context.stroke();
    }
}

//Toggles mode and updates mode display
var toggle = function(e) {
    if(mode == "Rektangle"){
	mode = "Sirkle Dot Thing";
    }
    else{
	mode = "Rektangle"
    }
    modeDisplay.innerHTML = mode;
    console.log(mode)
}

//Event Listeners
clearButton.addEventListener("click", clearCanvas);
toggleButton.addEventListener("click", toggle);
slate.addEventListener("click", draw);
