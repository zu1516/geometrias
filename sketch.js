let posX=40;
let posY=60;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(55, 88, 199);
}
function draw(){
  stroke(122, random(400), 214)
  fill(random(255),random(120), random (300))
  rect (random(850),posY,50,60);
  posY=posY+1;
   if(posY==windowHeight){
    posY=40;
  }
  
  
}