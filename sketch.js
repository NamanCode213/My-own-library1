var a1,b1,c1

function setup() {
  createCanvas(800,400);
  a1=createSprite(400, 200, 50, 50);
  b1=createSprite(200, 200, 50, 50);
  c1=createSprite(600,200,50,50)
  a1.shapeColor='orange'
  b1.shapeColor='orange'
  c1.shapeColor='orange'
}

function draw() {
  background(255,255,255);  
  a1.x=mouseX
  a1.y=mouseY
  
 if (collision(a1,b1)){

a1.shapeColor='lime'
b1.shapeColor='lime'

 }
 else{
  a1.shapeColor='orange'
  b1.shapeColor='orange'
}

  drawSprites();
}
