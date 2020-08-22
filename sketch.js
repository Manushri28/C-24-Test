var paperBall;
var ground;
var binPart1, binPart2, binPart3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup()
{
	createCanvas(400, 800);

	paperBall = new CrumpPaper (300, 360);

	ground = new Ground (400, 380, 800, 40);

	binPart1 = new ThrowBin (620,340,20, 150);
	binPart2 = new ThrowBin (620,370,150, 20);
	binPart3 = new ThrowBin (755,340,20, 150);
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
}

function draw() {

  background(0);
  
  binPart1.display();
  binPart2.display();
  binPart3.display();

  paperBall.display();
  
  ground.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:-85});
  }
}
