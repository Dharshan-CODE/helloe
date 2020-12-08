const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var m1,m2,m3,m4,m5,m6;
var boy,boyI,sky;
var t1,g1,s1,r1;

function preload()
{
   boyI = loadImage("boy.png");	
   sky = loadImage("gggg.jpg");
   t2 = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 600);
	
	boy = createSprite(200,350,50,50);
	boy.addImage(boyI);
	boy.scale=0.125/2;

	engine = Engine.create();
	world = engine.world;
	t1 = createSprite(700,300,500,600);
	t1.addImage(t2);
	t1.scale=0.5;

	g1 = new Ground(500,600,1000,40);
	s1 = new Stone(100,520,10);

	m1 = new Mango(600,200,30);
	m2 = new Mango(650,300,30);
	m3 = new Mango(500,200,30);
	m4 = new Mango(800,200,30);
	m5 = new Mango(700,200,30);
	m6 = new Mango(800,100,30);
	m7 = new Mango(800,100,30);
	m8 = new Mango(700,100,30);
	m9 = new Mango(800,280,30);
	m10 = new Mango(600,100,30);
	m11 = new Mango(900,200,30);

	r1 = new Rubber(s1.body,{x:190,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(sky);
  drawSprites();
 
  g1.display();
  s1.display();
  m1.display();
  m2.display();
  m3.display(); 
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  r1.display();

  stroke("black")
  fill("red");
  textSize(25);  
  text("Press Space to get a second Chance to Play!!",50 ,50);
	
  collide(m1,s1);
  collide(s1,m2);
  collide(s1,m3);
  collide(s1,m4);
  collide(s1,m5);
  collide(s1,m6);
  collide(s1,m7);
  collide(s1,m8);
  collide(s1,m9);
  collide(s1,m10);
  collide(s1,m11);

  
 
}
function mouseDragged(){

    Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY});
    
}
function mouseReleased(){
      r1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(s1.body, {x:100, y:520}) 
	  r1.attach(s1.body);
	}
  }
  function collide(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   
      
      if(distance<=lmango.r+lstone.r)
      {
       
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }
  