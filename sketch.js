var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);

 
  rabbit.x = mouseX;

//spawning Apples and Leaves
  if(frameCount % 80 == 0){
    createApples();
    
    
  }
  if(frameCount % 50 == 0){
    createLeaf();
  }
  drawSprites();
  console.log(frameCount);

  
}
//creating Apples
function createApples(){
  var apples;
  apples = createSprite(random(50,350),40)
  apples.addImage(appleImg);
  apples.visible = true;
  apples.scale = 0.1;
  apples.velocityY = 2;
}

//Creating Leaves
function createLeaf(){
  var leaf;
  leaf = createSprite(random(50,350),40)
  leaf.addImage(leafImg);
  leaf.visible = true;
  leaf.scale = 0.1;
  leaf.velocityY = 2;
}