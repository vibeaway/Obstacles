var ground, groundimage
var invisibleground
var cloud,cloudimage
var obstacle,cactus1,cactus2,cactus3,cactus4,cactus5,cactus6
var trex ,trex_running;
function preload(){
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
  cactus1=loadImage("obstacle1.png")
  cactus2=loadImage("obstacle2.png")
  cactus3=loadImage("obstacle3.png")
  cactus4=loadImage("obstacle4.png")
  cactus5=loadImage("obstacle5.png")
  cactus6=loadImage("obstacle6.png")
}

function setup(){
    createCanvas(600,200)
    
    //create a trex sprite
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5

  ground = createSprite(200,175,400,10)
  ground.velocityX = -4
  ground.addImage(groundimage)
invisibleground = createSprite(200, 180, 400, 10)
invisibleground.visible = false
  
}

function draw(){
    background(0)
  if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5
  if(ground.x<30){
    ground.x = 200   
  }

spawnclouds()
spawnobstacles()
  trex.collide(invisibleground);
    drawSprites()
  

}
 function spawnclouds(){
  if(frameCount%60===0){
  cloud = createSprite(600,30,20,10)
  cloud.velocityX = -4
  cloud.y=Math.round(random(10,40))
  cloud.addImage(cloudimage);
  cloud.scale=0.5
 }
}
function spawnobstacles(){
  if(frameCount%60===0){
obstacle=createSprite(600,180,10,40)
obstacle.velocityX = -6
var num = Math.round(random(1,6))
switch(num){
  case 1: obstacle.addImage(cactus1)
  break;
  case 2: obstacle.addImage(cactus2)
  break;
  case 3: obstacle.addImage(cactus3)
  break;
  case 4: obstacle.addImage(cactus4)
  break;
  case 5: obstacle.addImage(cactus5)
  break;
  case 6: obstacle.addImage(cactus6)
  break;
  default: break;

}
  }
}
