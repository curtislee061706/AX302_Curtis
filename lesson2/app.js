console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

ctx.moveTo(10, 10);
ctx.lineTo(290,290);
ctx.strokeStyle = "rgb(255,50,50)";
ctx.lineWidth = 2
ctx.stroke();

ctx.moveTo(10, 290);
ctx.lineTo(290,10);
ctx.strokeStyle = "rgb(255,50,50)";
ctx.lineWidth = 2
ctx.stroke();

ctx.moveTo(10, 150);
ctx.lineTo(290,150);
ctx.strokeStyle = "rgb(255,50,50)";
ctx.lineWidth = 2
ctx.stroke();

ctx.moveTo(150, 290);
ctx.lineTo(150,10);
ctx.strokeStyle = "rgb(255,50,50)";
ctx.lineWidth = 2
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fillRect(125,125,50,50);

ctx.strokeStyle = "blue";
ctx.strokeRect(50,50,200,200);

ctx.clearRect(135,135,30,30);



var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d")


ctx1.fillStyle = "black";
ctx1.fillRect(150,150,150,150);

ctx1.fillStyle = "black";
ctx1.fillRect(0,0,150,150);

var c2 = document.getElementById("two");
var ctx2 = c2.getContext("2d")

ctx2.fillStyle = "black";
ctx2.fillRect(0,0,300,300);

ctx2.fillStyle = "white";
ctx2.fillRect(10,10,135,135);

ctx2.fillStyle = "white";
ctx2.fillRect(160,10,135,135);

ctx2.fillStyle = "white";
ctx2.fillRect(10,160,135,135);

ctx2.fillStyle = "white";
ctx2.fillRect(160,160,135,135);


















