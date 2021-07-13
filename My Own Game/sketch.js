var bg, bgImg;
var helicopter, helicopterImg, helicopter2, helicopter2Img;

function preload(){
  bgImg= loadImage("Images/forestBg.jpg");
  helicopterImg= loadAnimation("Images/helicopter3.png", "Images/helicopter1.png");
  
}

function setup() {
  createCanvas(1200,700);

  bg=createSprite(0,300,1500,1000);
  bg.addImage(bgImg);
  bg.scale=1;
  bg.velocityX=-3;

  helicopter= createSprite(200,100);
  helicopter.addAnimation("helicopters", helicopterImg);
  helicopter.scale=0.43;
  

}

function draw() {
  background("gray");
  
  if(bg.x<500){
    bg.x=bg.width/2;
  }

  if(keyDown(UP_ARROW)){
    helicopter.y=helicopter.y-3;
  }

  if(keyDown(DOWN_ARROW)){
    helicopter.y= helicopter.y+3;
  }
  
  if(keyDown(RIGHT_ARROW)){
    helicopter.x=helicopter.x+3;
  }

  if(keyDown(LEFT_ARROW)){
    helicopter.x=helicopter.x-3;
  }


  drawSprites();
}