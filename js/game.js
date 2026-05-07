	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw a lazy version of the "matrix"----------------------------------
	//---------------------You will recalculate some particles positions and colors when they move off screen---------------
	//---------------------Follow the commented instructions below to complete this assignment------------------------------

var canvas;
var context;


var player;

/// handle timing and frame regulation
var interval = 1000/60;
var timer = setInterval(animate, interval);

var colors = [];
colors[0] = "#ff0000";
colors[1] = "#00ff00";
colors[2] = "#0000ff";

var amount = 50;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

var dots = [];
for (var i=0;i <amount; i++)
{
    dots[i] = new GameObject();
    dots[i].x = Math.random() * canvas.width;
    dots[i].y = Math.random() * canvas.height;
    dots[i].color = colors[Math.floor(rand(0,2.9))];
    dots[i].width = rand (5,20);
}




function animate()
{
    context.clearRect(0,0,canvas.clientWidth, canvas.height);
    
    for (i=0; i<amount; i++)
    {
        dots[i].drawCircle();
    }
}

