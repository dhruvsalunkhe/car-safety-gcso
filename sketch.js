var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(50, 100);
  weight = random(400, 1500);

  wall = createSprite(1500, 200, 60, 800);
  wall.shapeColor = color(80, 80, 80);
  
  car = createSprite(50, 200, 35, 15);
  car.shapeColor = "white";
}

function draw() {
  background(0); 

  car.velocityX = speed;

  if (wall.x - car.x  <= (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/22500;
     
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
      textSize(24);
      stroke(0, 255, 0);
      fill(0, 255, 0);
      text("No Damage !! :)", 750, 200);
    }
    if (deformation > 100 && deformation < 180) {
      car.shapeColor = color(230, 230, 0);
      textSize(24);
      stroke(230, 230, 0);
      fill(255, 0, 0);
      text("Moderate Damage ! :|", 750, 200);
    }
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
      textSize(24);
      stroke(255, 0, 0);
      fill(255, 0, 0);
      text("Severe Damage ! ! ! ! ! :(", 750, 200);
    }
  }

  drawSprites();
}
