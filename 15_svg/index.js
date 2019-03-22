data = [21, 720, 600, 213, 531, 121]
datados = [6.083330, 10.233330, 21.6000, 76.0000, 600.0000, 45.0000]
var svg = d3.select("body").append("svg");
svg.attr("height", 800);
svg.attr("width", 800);

for(i = 0; i < data.length; i++){
var circle = d3.select("svg").append("circle");
    //console.log(data);
    //console.log(data[0]);
    circle.attr("cx", data[i]);
    circle.attr("cy", datados[i]);
    circle.attr("r", 10);
    circle.attr("stroke", "black");
    circle.attr("fill", "red");
}


var labels = d3.select("body").select("svg")
    .selectAll("circle")
    .data(data)
    .enter().append("text")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });

