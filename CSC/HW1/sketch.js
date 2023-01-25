let x= 200;
let y= 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  x = mousex;
  y = mousey;

  //draw face
  fill('white');
  circle(x,7,58);
  fill('black');
  square(x,y-10,5);
  square(x+10,y-10,5);
  square(x+5,y+5,5);
}
