var bullet,wall
var speed,weight
var thickness


function setup() {
  createCanvas(1600,400);
  
bullet=createSprite(50,200,50,10)
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor="black"


thickness=random(22,83)
  speed=random([40,55,60,80,90])
weight=random(400,1500)
bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
  bullet.collide(wall)
    if( bullet.velocityX>60) {
    wall.shapeColor="red"

    }
    if( bullet.velocityX<60) {
      wall.shapeColor="green"
  
      }
}