var popSound;
var speedX = 5;
var speedY = 2;
var x = 0;
var y = 0;

function preload() {
	popSound = loadSound('pop.mp3');
}

function setup() {
	createCanvas(400, 400);
	noStroke();
    fill(255);
}

function draw() {
    
    var r = random(0,250);
    var g = random(0, 250);
    var b = random(0, 250);
	background(0);

	ellipse(x, y, 60);

	if (x > width || x < 0) {
	speedX *= -1;
    fill(r, g, b);
	popSound.play();
       
	}

	if (y > height || y < 0) {
	speedY *= -1;
    fill(r, g, b);
	popSound.play();
	}

	x +=speedX;
	y +=speedY;
}
