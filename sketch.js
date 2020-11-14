
var monkey , monkey_running,monkey_collided;
var banana,obstacle;
var bananaImage, obstacleImage;
var bananaG,obstacleG;
var ground,groundI,invisible;
var score;
var gameOver,gameOverI;

function preload(){
  
  groundI = loadImage("ground.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_collided = loadAnimation("sprite_4.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  gameOverI = loadImage("gameover5.png");
 
}



function setup() {
  
  createCanvas(400,250);
  
  monkey = createSprite(50,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.12;
  
  ground = createSprite(200,245,800,20);
  ground.shapeColor = "yellowgreen";
  ground.x = ground.width /2;
  
  gameOver = createSprite(200,100,10,10);
  gameOver.addImage("gameover",gameOverI);
  gameOver.scale = 0.6;
  gameOver.visible = false;
  
  bananaG = createGroup();
  obstacleG = createGroup();
  
}


function draw() {
  background("white");
  
  ground.velocityX = -4;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y >= 190) {
        monkey.velocityY = -15;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  banana();
  obstacles();
  
  if(bananaG.isTouching(monkey)){
    bananaG.destroyEach();
  }
  if(obstacleG.isTouching(monkey)){
    obstacleG.destroyEach();
    bananaG.destroyEach();
  }
  
  drawSprites();
}
function banana(){
  if (frameCount % 80 === 0){
    var  banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(50,140));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 150;
    monkey.depth = banana.depth;
    monkey.depth = monkey.depth+1;
    bananaG.add(banana);
  }
   
}
function obstacles(){
  if (frameCount % 200 === 0){
    var obstacle = createSprite(400,210,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -8;
    obstacle.scale = 0.2;
    ground.depth = obstacle.depth;
    ground.depth = ground.depth+1;
    obstacleG.add(obstacle);
  }
}




