
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImage;
var boy, boyImage;

function preload()
{
	treeImage= loadImage("Plucking mangoes/tree.png");
  boyImage= loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

  tree = createSprite(200,200,100,10)
  tree.addImage(treeImage);

  boy = createSprite(100,500,10,10 );
  boy.addImage(boyImage)

  

  mango1= new Mango(100,100,10,10);
  stone1= new Stone(200,200,10,10);


	Engine.run(engine);
  world = engine.world;
}


function draw() {
  
  background("white");
  
  drawSprites();
  mango1.display();
  stone1.display();
}



