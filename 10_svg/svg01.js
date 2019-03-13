var pic = document.getElementById("vimage");

// Drawing circles and the lines connecting them
var lastCoords = [null, null];

pic.addEventListener('click', function(e){
    console.log(e);
    pic.innerHTML = pic.innerHTML + generateLine(e, e.offsetX, e.offsetY) +  generateCircle(e, e.offsetX, e.offsetY);
})

var generateCircle = function(e, xcor, ycor){
    string = "<circle cx=\"" +
	xcor + "\" cy=\"" +
	ycor + "\" r=\"10\" fill=\"red\" stroke=\"black\" />";
    console.log(string);
    return string;
}

var generateLine = function(e, xcor, ycor){
    if(lastCoords[0] == null){
	lastCoords[0] = xcor;
	lastCoords[1] = ycor;
	string = "<path d=\"M " +
	    xcor + " " +
	    ycor + " Z\" />";
	console.log(string);
	return string;
    }else{
	console.log(lastCoords);
	string = "<path stroke=\"black\" stroke-width=\"1\" d=\"M " +
	    lastCoords[0] + " " +
	    lastCoords[1] + " " +
	    "L " + xcor + " " + ycor + " Z\" />";
	lastCoords[0] = xcor;
	lastCoords[1] = ycor;
	console.log(string);
	return string;
    }
}



//Clearing the SVG
var clear_buddon = document.getElementById("but_clear");

clear_buddon.addEventListener('click', function(e){
    pic.innerHTML = '';
    lastCoords[0] = null;
    lastCoords[1] = null;
})
