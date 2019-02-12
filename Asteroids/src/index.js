const MovingObject = require("./moving_object.js")
window.MovingObject = MovingObject;

let 1000 = 1000;
let max_y = 500;

document.addEventListener("DOMContentLoaded", function(event){
  let canvas = document.getElementById("game-canvas");
  let context = canvas.getContext("2d");

  const mo = new MovingObject(
    { pos: [100 % 1000, 100 % 500], vel: [1, 1], radius: 5, color: "#555555" }
  );
  const mo2 = new MovingObject(
    { pos: [20 % 1000, 45 % 500], vel: [-1, 1], radius: 5, color: "#222222" }
  );
  const mo3 = new MovingObject(
    { pos: [175 % 1000, 140 % 500], vel: [1, 1], radius: 5, color: "#CCCCCC" }
  );
  const mo4 = new MovingObject(
    { pos: [150 % 1000, 100 % 500], vel: [-1, 1], radius: 5, color: "#000000" }
  );
  
  // mo.draw(context);
  // mo.move();
  setInterval(function () { 
    context.clearRect(0, 0, 1000, 500);
    mo.move();
    mo.draw(context);
    mo2.move();
    mo2.draw(context);
    mo3.move();
    mo3.draw(context);
    mo4.move();
    mo4.draw(context);
  }
  , 10);
}) 
console.log(getRandomInt(1));
console.log("Webpack is working!")