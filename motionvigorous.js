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
    fill(255, 200, 200, 200);
  }
  else {
    fill(255, 220, 200, 200);
  }

  ellipse(x, y, radius * 1
         );
  x += random(1, 2);
  y += random(1, 2);
}
