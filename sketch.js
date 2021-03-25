
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobobject1;
var bobobject2;
var bobobject3;
var bobobject4;
var bobobject5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	bobobject1 = new Bob(200,470,100);
	bobobject2 = new Bob(300,470,100);
	bobobject3 = new Bob(400,470,100);
	bobobject4 = new Bob(500,470,100);
	bobobject5 = new Bob(600,470,100);

	roof = new Roof(400,40,500,20);

	rope1= new Rope(bobobject1.body,roof.body,-100*2,0);
	rope1.shapeColor=("black");
    rope2= new Rope(bobobject2.body,roof.body,-50*2,0);
	rope2.shapeColor=("black");
    rope3= new Rope(bobobject3.body,roof.body,-0*2,0);
	rope3.shapeColor=("black");
    rope4= new Rope(bobobject4.body,roof.body,50*2,0);
	rope4.shapeColor=("black");
    rope5= new Rope(bobobject5.body,roof.body,100*2,0);
	rope5.shapeColor=("black");


    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-25,y:-25}); } 
} 



