var john, ground, road;
function preload(){
  runner = loadAnimation("Runner-1.png","Runner-2.png");
  road = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  ground=createSprite(200, 180, 400, 20)
  ground.addImage(road)
  invisibleground=createSprite(380, 190, 13, 400)
  invisibleground.visible=false
  invisibleground1=createSprite(30, 190, 13, 400)
  invisibleground1.visible=false
  john = createSprite(50,160,20,50);
  john.addAnimation("runing", runner);
  john.scale = 0.1;                                                             
  john.x = 200
  john.y = 330
}

function draw() {
  background("black");
  if (keyDown("d")) {
    john.x=john.x+15
}
    if (keyDown("a")) {
    john.x=john.x-15
}
 john.collide(invisibleground)
 john.collide(invisibleground1)
 ground.velocityY=6 
 if(ground.y>400){  
  ground.y=height/2 }
 drawSprites();
}
