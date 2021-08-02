var path, boy;
var pathImg, boyImg
var left, right;

function preload(){
pathImg = loadImage("path.png")
boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
   path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;
  path.velocityY=4;
  boy= createSprite(180,340);
  boy.addAnimation("running" ,boyImg);
boy.scale=0.05;
left=createSprite(0,200,100,400);
right=createSprite(400,200,100,400);

left.visible=false;
right.visible=false;

}

function draw() {
  background("grey");
if(path.y>400){
path.y=200;
}

boy.x=World.mouseX
boy.collide(left);
boy.collide(right);


drawSprites();






}
