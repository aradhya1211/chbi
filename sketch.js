const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	

var body;
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new balll(50,660,2,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
  
}
function keyPressed() {
	 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});

	 } }