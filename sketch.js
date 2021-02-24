
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,boyImage,treeImage,bg,sling,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9
var gameState="attached"

function preload()
{
	bg=loadImage("images/park.jpg")
	boyImage=loadImage("images/boy.png")
	treeImage=loadImage("images/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,690,800,20)
	
	mango1=new Mango(600,450,20)
	mango2=new Mango(650,450,20)
	mango3=new Mango(700,450,20)
	mango4=new Mango(750,480,20)
	mango5=new Mango(580,485,20)
	mango6=new Mango(640,480,20)
	mango7=new Mango(680,505,20)
	mango8=new Mango(700,510,20)
	mango9=new Mango(540,515,20)
	stone=new Stone(270,620,10)

	sling=new Slingshot(stone.body,{x:270,y:620})

	Engine.run(engine);
  
}


function draw() {
  
	background(bg);
	textSize(30)
	fill("navy")
	text("Press space to try again!!", 200,200)
	image(boyImage,250,590,100,120)
	image(treeImage,500,400,300,300)
	ground.display()

	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()

	stone.display()
	sling.display()
	detectCollision(stone ,mango1 )
	detectCollision(stone ,mango2 )
	detectCollision(stone ,mango3 )
	detectCollision(stone ,mango4 )
	detectCollision(stone ,mango5 )
	detectCollision(stone ,mango6 )
	detectCollision(stone ,mango7 )
	detectCollision(stone ,mango8 )
	detectCollision(stone ,mango9 )
	console.log(gameState)

}

function mouseDragged(){
	if(gameState==="attached"){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
}

function mouseReleased(){
	gameState="released";
	sling.fly()
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:270,y:620})
		sling.attach(stone.body)
		gameState="attached"
	}
}

function detectCollision(stone,mango){
	var distance=dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y)
	if(distance<=stone.radius+mango.radius){
			Matter.Body.setStatic(mango.body,false)
		}

}


