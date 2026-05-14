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
follower.force = 1;

var fX = .90;
var fY = .90;

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

    player.vx *= fX;
    player.vy *= fY;
    player.move();
    follow();
}

function point()
{
    var dx = player.x - follower.x;
    var dy = player.y - follower.y;

    var radians = Math.atan2(dy,dx);
    follower.angle = radians * 180/Math.PI;
}

function follow()
{
    var dx = player.x - follower.x;
    var dy = player.y - follower.y;

    var radians = Math.atan2(dy,dx);
    follower.angle = radians * 180/Math.PI;

    follower.vx = Math.cos(radians) *follower.force;
    follower.vy = Math.sin(radians) *follower.force;

    follower.x += follower.vx * 2;
    follower.y += follower.vy * 2;
}