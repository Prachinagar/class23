const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(900,250,70,70);
    box5 = new Box(800,180,70,70)
    ground = new Ground(500,height,1000,20)
    pig1 = new Pig(800,300,50,50)
    pig2 = new Pig(800,250,50,50);
    log1 = new Log(800,270,300,PI)
    log2 = new Log(800,200,300,PI)
    log3 = new Log(720,150,150,-45)
    log4 = new Log(880,150,150,45)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}