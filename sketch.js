
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bg, obstacleGroup
var score

var PLAY=1
var END=0
var gameState= PLAY
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
monkey=createSprite(50,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.18;
  
  ground= createSprite(600,390,1200,20);
  ground.shapeColor="yellow";
 
  
  
  
  bg=createGroup();
  sg=createGroup();
}


function draw() {
background("brown");
  if(gameState===PLAY){
      ground.velocityX=-4;
     if(ground.x<0){
   ground.x=600
   } 
    if(keyDown("space")){
     monkey.velocityY=-10;
     }
    monkey.velocityY=monkey.velocityY+1;
    
     bf();
  if(monkey. isTouching(bg)){
     bg.destroyEach();
     }
  
  stones();
  if(monkey.isTouching(sg)){
     gameState=END
     }
     }
  
  if(gameState===END){
      ground.velocityX=0;
     bg.setVelocityXEach(0);
    sg.setVelocityXEach(0);
    bg.destroyEach();
    sg.destroyEach();
    monkey.destroy();
    ground.destroy();
    fill("yellow");
    textSize(60);
    text("Game over",100,200);
    
     }

  
  
  
  monkey.collide(ground);
  
 
  drawSprites();
}

function bf(){
  if(frameCount%100===0){
     
  banana= createSprite(600,200);
  banana.addImage(bananaImage);
  banana.scale=0.18;
  banana.velocityX=-4;
    banana.y=random(50,250);
    banana.lifetime=150;
    bg.add(banana);
}
}


function stones(){
  if(frameCount%300===0){
     
     
  s = createSprite(600,330);
  s.addImage(obstacleImage);
s.scale=0.25;
  s.velocityX=-4;
    s.lifetime=150;
    sg.add(s);
  }
}

