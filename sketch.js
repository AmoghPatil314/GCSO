var car,wall;
var speed,weight;

function setup() {
  createCanvas(600,600);
  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(100, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(570, 200, 60,height/2);
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
  background(0,0,0);
  if (car.x - wall.x <= car.width/2 + wall.width/2
    && wall.x - car.x <= car.width/2 + wall.width/2) {
    car.velocityX=0;
    carColor();
  }
   

  car.collide(wall);
  drawSprites();
}

function carColor(){
  var deform = 0.5 * weight * speed * speed/22509;
  if (deform>180){
    car.shapeColor="red";
  }
  if (deform<180 && deform>100) {
    car.shapeColor="yellow";
  }
  if (deform<100) {
    car.shapeColor="green";
  }
}