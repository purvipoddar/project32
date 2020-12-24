
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var ground1,ground2,ground3;
var poly;
var constrain;

var score =0

function setup() {
  createCanvas(1100,600);
  engine = Engine.create();
	world = engine.world;
  // stroke(255)
  
  ground1 = new Ground(555,580,1100,20);
 
  fill("brown");
  ground2 = new Ground(400,263,300,15);
  ground3 = new Ground(780,500,350,15);
  
// stack1 blocks
  // layer1 
   block17 = new Box(785,490,35,45);
   block18 = new Box(747,493,35,45);
   block19 = new Box(815,490,35,45);
   block20 = new Box(845,490,35,45);
   block2 = new Box(710,490,35,45);
   block3 = new Box(740,430,37,47);
   block4 = new Box(785,430,35,47);   
   block5 = new Box(820,435,35,45);
   block6 = new Box(750,428,35,45);
   block7 = new Box(779,391,35,47);

  // stack2 blocks
  //  layer1
   block1 = new Box(299,236,30,40);
   block11 = new Box(420,235,30,40);     
   block12 = new Box(450,235,30,40);
   block13 = new Box(360,195,30,40);
   block14 = new Box(390,195,30,40);
   block8 = new Box(330,235,30,40)
   block9 = new Box(360,235,30,40);
   block10 = new Box(390,235,30,40);   
   block15 = new Box(420,195,30,40);
   block16 = new Box(390,155,30,40);
 
  
 
   poly = new Hexa(100,100,15);

   constrain = new Const(poly.body,{x:100,y:150});

   text("SCORE:"+score,750,40);

  Engine.run(engine);

}

function draw() {
 background(0);  
 ground1.display();
 ground2.display();
 ground3.display();

fill("blue");
 
 block2.display();
 block3.display();
 block4.display();

 fill("pink");
 block1.display();
 block5.display();
 block6.display();
 block7.display();

fill("red")
 block8.display();
 block9.display();

 fill("yellow");
 block10.display();

fill("blue");
 block11.display();
 block12.display();
 block13.display();
 block14.display();

 fill("pink");
 block15.display();
 block16.display();
 block17.display();

 fill("red");
 block18.display();
 block19.display();

 fill("yellow");
 block20.display();

 poly.display();

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();

 drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY);
}
function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}
  function mouseReleased(){
    constrain.fly()
}
function keyPressed(){
  if(keyCode===32){
      constrain.attach(poly.body)
  }
}