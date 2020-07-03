// creating the required global variables
var car, wall, speed, weight;

function setup() {
  // creating the canvas with required size
  createCanvas(1600,400);

  // creating the sprite for car
  car =  createSprite(50, 200, 50, 50);

  // creating a sprite for wall
  wall = createSprite(1500, 200, 60, height/2);

  // creating random speed and weight
  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  // making background color as white
  background(255,255,255);

  //making the car's velocity as speed
  car.velocityX = speed;
  
  // checking the collision of the car with the wall
  if(wall.x - car.x <= (car.width + wall.width)/2){
    // making the car's velocity as 0
    car.velocityX = 0;

    // creating a variable for calculating deformation
    var deformation = (0.5*weight*speed*speed)/22500;

    // giving the colors according to their deformation
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

  }

  // drawing the sprites
  drawSprites();
}