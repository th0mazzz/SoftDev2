// weiWhen (Thomas Zhao and Weiwen Zhou)
// SoftDev2 pd8
// K01 -- and I want to Paint It Better
// 2019-01-31

//Defines global non-function variables
var slate = document.getElementById("slate");
var context = slate.getContext("2d");
var clearButton = document.getElementById("clearButton");
var toggleButton = document.getElementById("toggleButton");
var modeDisplay = document.getElementById("modeDisplay");
var state = "Rektangle"

//Starts off the mode display with current state
modeDisplay.innerHTML = state;

//Clears the entire canvas
var clearCanvas = function(e) {
    var canvasHeight = context['canvas']['height']
    var canvasWidth = context['canvas']['width']
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    console.log("Clearing the canvas")
}

//Draws on canvas upon click
var draw = function(e) {
    //console.log(e);
    //console.log(context);
    if(state == "Rektangle"){
	context.fillRect(e.offsetX, e.offsetY, 100, 50);
    }
    else{
	context.beginPath();
	/*
	  CanvasRenderingContext2D.beginPath();

	  This statement clears path information that may previously already be there.
	  In the context of this code, it ensures that the circles-dots are individual
	  circles and are not connected in any way.
	*/
	
	context.ellipse(e.offsetX, e.offsetY, 5, 5, 0, 0, 2 * Math.PI);
	/*
	 event.offsetX
	 event.offsetY

	 The offset properties contain the x-coordinate and y-coordinate properties relative
	 to the target element. The target element is part of the MouseEvent properties.
	 In the context of this code, they provide the x-coordinates and the y-coordinates
	 of the MouseEvent relative to the HTML canvas element.
	*/
	
	context.stroke();
    }
    console.log(e)
    console.log(e.offsetX);
}

//Toggles state and updates mode display
var toggle = function(e) {
    if(state == "Rektangle"){
	state = "Sirkle Dot Thing";
    }
    else{
	state = "Rektangle"
    }
    modeDisplay.innerHTML = state;
    console.log(state)
}

//Event Listeners
clearButton.addEventListener("click", clearCanvas);
toggleButton.addEventListener("click", toggle);
slate.addEventListener("click", draw);
