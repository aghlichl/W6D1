Function.prototype.inherits = function(superClass){
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;0
  
}



function MovingObject() { 
  
}

MovingObject.prototype.fly = function(){
  console.log("flies");
}

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

let comet = new Asteroid();
let rocket = new Ship();

comet.fly();
rocket.fly();


