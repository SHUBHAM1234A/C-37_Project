var canvas, backgroundImage;
var bg,bg2;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var loadingSprite;
var loading_anim;
var question, contestant, quiz;

function preload(){
  bg = loadImage("img.jpg");
  bg2 = loadImage("43654.jpg");
  loading_anim = loadAnimation("Loading anim/frame-1.png","Loading anim/frame-2.png","Loading anim/frame-3.png","Loading anim/frame-4.png","Loading anim/frame-5.png","Loading anim/frame-6.png","Loading anim/frame-7.png","Loading anim/frame-8.png","Loading anim/frame-9.png","Loading anim/frame-18.png","Loading anim/frame-19.png","Loading anim/frame-20.png","Loading anim/frame-21.png","Loading anim/frame-22.png","Loading anim/frame-23.png","Loading anim/frame-24.png","Loading anim/frame-25.png","Loading anim/frame-26.png","Loading anim/frame-27.png","Loading anim/frame-28.png","Loading anim/frame-29.png","Loading anim/frame-30.png");
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
  loadingSprite = createSprite(510,340,10,10);
  loadingSprite.addAnimation("loadanim",loading_anim);
  //loading_anim.frameDelay = 0.1;
  loadingSprite.scale = 0.2;
  loadingSprite.visible = false;
}


function draw(){
  background(bg);
  drawSprites();
  if(contestantCount === 2){
    quiz.update(1);
  }

  if(contestantCount >= 1 && contestantCount < 2){
    fill("yellow");
    textSize(23);
    textFont("Times New Roman");
    text("Waiting for another player to answer...",130,340);
    //anim();

    loadingSprite.visible = true;
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
}


function anim(){
  
}