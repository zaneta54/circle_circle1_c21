var fixedRect, movingRect;
var circle,circle1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
circle = createSprite(100,200,50,70,10);
circle1 = createSprite(100,300,20,40,20);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  circle.velocityY= +2;
  circle1.velocityY = -2;
  circle.shapeColor = "pink";
  circle1.shapeColor = "yellow";
circle.debug = true;
circle1.debug = true;
}

function draw() {
  background(0,0,0);  

 bounceoff(movingRect,fixedRect);
 bounceoff(circle,circle1);
  drawSprites();
}
function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x - object1.x < object2.width/2 +object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y -object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
}
