
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola 
var chao
var pd
var pe

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var bola_options={
		isStatic : false,
		restitution:0.3,
		friction:0,
		density:1.2
	}  



	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	bola=Bodies.circle(200,200,34,bola_options)
	World.add(world,bola)

	chao=new Solo(400,680,800,34)
	pe=new Solo(550,600,20,120)
	pd=new Solo(750,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("GREEN");
  
 Engine.update(engine)

 ellipse(bola.position.x,bola.position.y,34)

  drawSprites();

  chao.display()
  pd.display()
  pe.display()
 
}

var plane_option={
	isStatic : true
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bola,bola.position,{x:200,y:-200})
	}
}
