
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground1,ground2,boxes,boxesl,ball,sling;

let i = [];
let a = [];

function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world;

//test = createSprite(400,200,50,50);

ground1 =  new Ground(400,390,800,20);
ground2 = new Ground(600,300,200,20);
boxes = new Boxes(400,200,50,30);
boxesl = new Boxes(400,200,50,30);

ball = new Ball(125,235,50);
//ball.depth = boxes.depth;
console.log(ball.y);

for(i = 1; i < 10; i++){
  boxes[i] = new Boxes(600+i,200,13,40);
 }

 for(a = 1; a < 6; a++){
  boxesl[a] = new Boxes(600+i,150,13,40);
 }

 sling = new Sling(ball.body,{x:125,y:235});


}

function draw() {
  background(0);  
  Engine.update(engine);

  ground2.display();
  ball.display();
  
  for(i = 1; i < 10; i++){
    boxes[i].display();
  }

  for(a = 1; a < 6; a++){
   boxesl[a].display()
  }

  sling.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();

}