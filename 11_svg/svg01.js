/*
  Thomas Zhao
  SoftDev pd8
  K11 -- Ask Circles [Change || Die] ¡­While On The Go
  2019-03-17
*/


//Globals
var requestID = 0;
var moving = false;

// SVG area
var pic = document.getElementById("vimage");

pic.addEventListener('click', function(e){
    generateCircle(e, e.offsetX, e.offsetY)
})

//Circles
var generateCircle = function(e, xcor, ycor){
    var newdot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newdot.setAttribute("fill", "purple");
    newdot.setAttribute("cx", xcor);
    newdot.setAttribute("cy", ycor);
    newdot.setAttribute("r", 30)

    newdot.setAttribute("xvel", 1)
    newdot.setAttribute("yvel", 1)
    
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

//Moving the circles
var move_buddon = document.getElementById("but_move");

var move = function(){
    window.cancelAnimationFrame(requestID);
    for(i=0; i < pic.children.length; i++){
	console.log(pic.children[i])

	child = pic.children[i]

	var xcor = parseInt(child.getAttribute('cx'));
	var ycor = parseInt(child.getAttribute('cy'));
	var r = parseInt(child.getAttribute('r'));
	var xvel = parseInt(child.getAttribute('xvel'));
	var yvel = parseInt(child.getAttribute('yvel'));
	
	console.log(pic.getAttribute('width'));

	if(xcor + r >= pic.getAttribute('width') || xcor - r <= 0){
	    xvel = xvel * -1;
	}
	if(ycor + r >= pic.getAttribute('height') || ycor - r <= 0){
	    yvel = yvel * -1;
	}
	
	child.setAttribute('cx', xcor + xvel);
	child.setAttribute('cy', ycor + yvel);
	child.setAttribute('xvel', xvel);
	child.setAttribute('yvel', yvel);
    }
    requestID = window.requestAnimationFrame(move);
}

move_buddon.addEventListener('click', function(e){
    if(!moving){
	move();
    }
    moving = true;
});

//Clearing the SVG
var clear_buddon = document.getElementById("but_clear");

clear_buddon.addEventListener('click', function(e){
    isMoving = false;
    while(pic.children[0] != undefined){
	pic.removeChild(pic.children[0])
    }
})


//Cool button - switches all circle's directions when moving
var cool_buddon = document.getElementById("but_cool");

var switchDirection = function(){
    for(i=0; i < pic.children.length; i++){
	console.log(pic.children[i])

	child = pic.children[i]

	var xvel = parseInt(child.getAttribute('xvel'));
	var yvel = parseInt(child.getAttribute('yvel'));

	child.setAttribute('xvel', xvel * -1);
	child.setAttribute('yvel', yvel * -1);
    }
}

cool_buddon.addEventListener('click', function(e){
    if(moving){
	switchDirection();
    }
});
