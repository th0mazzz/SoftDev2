var pic = document.getElementById("vimage");

pic.addEventListener('click', function(e){
    generateCircle(e, e.offsetX, e.offsetY)
})

var generateCircle = function(e, xcor, ycor){
    var newdot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newdot.setAttribute("fill", "purple");
    newdot.setAttribute("cx", xcor);
    newdot.setAttribute("cy", ycor);
    newdot.setAttribute("r", 30)
    pic.appendChild(newdot);

    newdot.addEventListener('click', function(e){
	e.stopPropagation();
	newdot.setAttribute("fill", "green");
	newdot.addEventListener('click', function(e){
	    e.stopPropagation();
	    newdot.remove();
	    generateCircle(e, Math.random() * 500, Math.random() * 500);
	})
    })
}

//Clearing the SVG
var clear_buddon = document.getElementById("but_clear");

clear_buddon.addEventListener('click', function(e){
    while(pic.children[0] != undefined){
	pic.removeChild(pic.children[0])
    }
})
