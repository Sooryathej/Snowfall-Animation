const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var ice=[];
var maxSnow=100;
var backgroundImg;
var bg = "Day.jpg";

function preload(){
  bg=loadImage("Day.jpg");
}

function setup() {
  createCanvas(1047,699);
  
  engine=Engine.create();
  world= engine.world;

  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
      ice.push(new Snow(random(0,1350), random(0,50)));
   }
  }
}

function draw() {
  background(bg);
  Engine.update(engine);

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
  }

  drawSprites();
}