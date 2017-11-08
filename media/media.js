var jump;
var x = 0;
var y = 0;
var speedX = 5;
var speedY = 5;

function preload() {
	jump = loadSound("jump.wav");
}

function setup() {
	createCanvas(600, 600);
	noStroke();

}

function draw() {
	background(50);

	fill(255);
	ellipse(x, y, 50);

	if(x > width || x < 0) {
		speedX *= -1;
	}
}

function mousePressed() {
	jump play();
}