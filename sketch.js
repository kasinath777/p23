
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var iron,hammer,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	iron = new Iron(500,650,40,PI/2);
	hammer = new Hammer(400,400,60,20);

	ground = new Ground(600,height,1200,20)

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  iron.display();
  ground.display();
  
  drawSprites();
 
}



