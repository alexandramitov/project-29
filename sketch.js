var stand;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


stand = new Ground(400,200);






}

function draw() {
  background(255,255,255);  

  stand.display();

  drawSprites();
}