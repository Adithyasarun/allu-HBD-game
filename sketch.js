
var trex ,trex_running,ground,groundimg,invground;
var score=0
var PLAY=1
var END=0
var gameState=PLAY
var obGrp
var cloudGrp
var gameOver,gameOverimg
var restartimg,restart
function preload(){
  
  trex_running = loadImage("allu.png")

  groundimg = loadImage("ground2.png")

  cloudimg= loadImage("cloud.png")

  ob1=loadImage("download.jpg")
  ob2=loadImage("download.jpg")
  ob3=loadImage("download.jpg")
  ob5=loadImage("download.jpg")
  ob4=loadImage("download.jpg")
  ob6=loadImage("download.jpg")

  gameOverimg = loadImage("gameOver.png")

  restartimg = loadImage("restart.png")



}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(60,150,10,10)
  trex.addImage(trex_running)
  trex.scale=0.2

  ground= createSprite(300,185,600,20)
  ground.addImage(groundimg)
 
  invground= createSprite(300,195,600,10)
  invground.visible = false

  cloudGrp = createGroup()
  obGrp = createGroup()

  gameOver = createSprite(300,80)
  gameOver.addImage(gameOverimg)
  gameOver.scale = 0.5
  gameOver.visible = false

  restart = createSprite(300,120)
  restart.addImage(restartimg)
  restart.scale = 0.5
  restart.visible = false
}

function draw(){

  background("white")
  text ("Score:-", 500,30)

if (gameState===PLAY)
   {
  score=Math.round(frameCount/5)
  ground.velocityX=-5
  if(ground.x<0){
    ground.x=300
  
  }
  if (keyDown("space")&&trex.y>166){
    trex.velocityY = -12
  }
  trex.velocityY += 0.8

  spclouds()
  spawnOb()

  if(obGrp.isTouching(trex)){
    
    score = score + 1
  }
}
else if (gameState === END)
{
  ground.velocityX=0
  obGrp.setVelocityXEach(0)
  cloudGrp.setVelocityXEach(0)

  gameOver.visible = true
  restart.visible = true


}


trex.collide(invground)


drawSprites()
}

function spclouds(){

if (frameCount%60===0){
  cloud=createSprite(600,50,10,10)
  cloud.addImage(cloudimg)
  cloud.scale=0.5
  cloud.velocityX=-4

  cloud.y=Math.round(random(30,70))
  trex.depth= cloud.depth+1
  cloud.lifetime=150

  cloudGrp.add(cloud)


}

}

function msg (){

    console.warn("this is how waring appers")
    console.error("this is how error apper") 
    console.info("this how info apper")
}

function spawnOb(){
  if (frameCount%60===0){
    obstacle=createSprite(600,170,10,10)
    obstacle.velocityX=-4
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1 : obstacle.addImage(ob1)
      break
      case 2 : obstacle.addImage(ob2)
      break
      case 3 : obstacle.addImage(ob3)
      break
      case 4 : obstacle.addImage(ob4)
      break
      case 5 : obstacle.addImage(ob5)
      break
      case 6 : obstacle.addImage(ob6)
      break
    }
      obstacle.scale=0.2
      obstacle.lifetime=135

      obGrp.add(obstacle)
    }



}
