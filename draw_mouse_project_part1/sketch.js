function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}

function draw() {}

function mouseClicked() {
  // Generate a random color
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  fill(r, g, b);

  // Generate a random width/height variable
  let diameter = random(25, 100);

  ellipse(mouseX, mouseY, diameter, diameter);
}
