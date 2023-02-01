function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  //red opaque
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(200, 175, 150);
  //blue opaque
  noStroke();
  fill(0, 0, 255, 100);
  ellipse(150, 250, 150);
  //green opaque
  noStroke();
  fill(0, 255, 0, 100);
  ellipse(250, 250, 150);
}