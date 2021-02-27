var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var ring;

var form, player, game;

var fishs,fish1,fish2,fish3,fish4;
var fish1Score,fish2Score,fish3Score,fish4Score

function preload(){
  fish1Img=loadImage("images/blueFish.png");
  fish2Img=loadImage("images/green.png");
  fish3Img=loadImage("images/yellow.png");
  fish4Img=loadImage("images/redFish.png");
  underTheSeaImg=loadImage("images/underTheSea.jpg");
  redRing=loadImage("images/redRing.png")
  orangeRing=loadImage("images/orangeRing.png")
  yellowRing=loadImage("images/yellowRing.png")
  greenRing=loadImage("images/greenRing.png")
  blueRing=loadImage("images/blueRing.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  fish1Score=0
  fish2Score=0
  fish3Score=0
  fish4Score=0
  fish5Score=0
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    spawnrings();
  }
  if(gameState===2){
    game.end();
  }


function spawnrings(){
  if(frameCount%10===0){
      ring=createSprite(displayWidth, Math.floor((Math.random()*1000)))
      ring.velocityX=-6;
      var rand =Math.round(random(1,5))
      switch(rand){
        case 1: ring.addImage(redRing)
          break;
        case 2: ring.addImage(orangeRing)
          break;
        case 3: ring.addImage(yellowRing)
          break;
        case 4: ring.addImage(greenRing)
          break;
        case 5: ring.addImage(blueRing)
          break;
        default: break;
      }
  }
}
}