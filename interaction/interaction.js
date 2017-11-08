function setup() { 
  	createCanvas(400, 400);
  	rectMode(CENTER);
} 
function draw() { 
	noStroke();
	background(50, 20);
	fill(50, 100, 200);
	ellipse(mouseX, mouseY, 50);
	
}

function mousePressed() {
	background(200, 100);
}