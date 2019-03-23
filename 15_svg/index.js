/*
  Thomas Zhao
  Softdev pd8
  K15 -- Scattered
  2019/03/22
*/

var svg = d3.select("body").append("svg");
svg.attr("height", 500);
svg.attr("width", 1000);
svg.style("border", "1px solid")

depth = [31,8,179,73,85,80,46,33,50,21,11,33,33,7,161,33,41,40,16,119]
magnitude = [7.5,6.2,6.1,6.1,6,6.5,6.4,6.6,6.4,6.5,6.6,6.1,6,6,6.1,6.2,6.5,6,6.5,6]

for(i = 0; i < depth.length; i++){
    var circle = d3.select("svg").append("circle");
    circle.attr("cx", depth[i] * 10);
    circle.attr("cy", magnitude[i] * 60);
    circle.attr("r", 2);
    circle.attr("stroke", "black");
    circle.attr("fill", "red");
}

for(i = 0; i < depth.length; i++){
    var text = d3.select("svg").append("text");
    text.attr("x", depth[i] * 10);
    text.attr("y", magnitude[i] * 60);
    text.text("D: " + depth[i] + "units, \nMag: " + magnitude[i]);
    text.attr("font-size", "8px");
    text.attr("fill", "red");
}
