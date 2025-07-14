function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  // Create the line that starts in the middle and ends wherever the mouse goes
  line(250, 250, mouseX, mouseY);
}

function mouseClicked() {
  // Clear the canvas on mouse click
  background(220);

  // Generate a random color and affix to the stroke
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  stroke(r, g, b);
}
