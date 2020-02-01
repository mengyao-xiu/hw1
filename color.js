var x;
var y;
var radius;

function setup() {
  createCanvas(400, 600);
  x = random(width);
  y = random(height);
  radius = 100;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = mouseX;
      y = mouseY;
    }
    fill(300, 30, 20, 300);
  }
  else {
    fill(25, 20, 20, 250);
  }

  ellipse(x, y, radius * 2
         );
  x += random(-1, 1);
  y += random(-1, 1);
}
