var canvas;
var context;


var player;
/// handle timing and frame regulation
var interval = 1000/60;
var timer = setInterval(animate, interval);

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

player = new GameObject();
player.force = 1;
follower = new GameObject();
follower.x = 20;
follower.y = 20;
follower.color = "#0000ff";

function animate()
{
    context.clearRect(0,0,canvas.clientWidth, canvas.height);
    angularMovement();
    player.drawTriangle();
    follower.drawTriangle();
}

function angularMovement()
{
    if(w)
    {
        var radians = player.angle * Math.PI/180;
        player.ax = Math.cos(radians);
        player.ay = Math.sin(radians);

        player.vx += player.ax * player.force;
        player.vy += player.ay * player.force;
    }
        if(s)
    {
        var radians = player.angle * Math.PI/180;
        player.ax = Math.cos(radians);
        player.ay = Math.sin(radians);

        player.vx += player.ax * -player.force;
        player.vy += player.ay * -player.force;
    }
    if(a)
    {
        player.angle -= 2;
    }
    if (d)
    {
        player.angle += 2;
    }

    player.move();
}

