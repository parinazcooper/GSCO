var wall, car1, car2, car3;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  wall=createSprite(1500, 200, 60,400);
  wall.shapeColor="grey";
  speed=random(30,95);
  weight=random(400,1500);
car1server=createSprite(50, 200, 60,30);
car1.shapeColor="white";
}

function draw() {
  background(0); 
 car1.velocityX=speed;
 var deformation= (0.5*weight*speed*speed) /(22500);
 if(car1.collide(wall))
  {
  
    if(deformation<100){
      car1.shapeColor="green";
    }
    if(deformation<180 && deformation>100){
   car1.shapeColor="yellow";
    }
    if(deformation>180){
      car1.shapeColor="red";
     }
  }





  drawSprites();
}