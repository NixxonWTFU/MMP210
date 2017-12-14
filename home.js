var fallSpd = [];
var fallNum = 100;
var fallSz = [];
var fallX = [];
var fallY = [];
var fallColor = [];

function setup() {
	createCanvas(1200, 500);
	background(0);
	noStroke;
	rectMode(CENTER);

	for (var i = 0; i < fallNum; i++) {
		var x = random(0, width);
		fallX.push(x);
		var y = random(0, height);
		fallY.push(y);
		var size = random(50, 80);
		fallSz.push(size);
		fallSpd.push(random(5, 10));

		}

}

function draw() {
    
    text("j a v a s c r i p t", width/6, height/2);
    textSize(120);
    stroke(255);
	design();
}

function design() {
	var x = 0;
	var y = 0;

	for (var i = 0; i < fallNum; i++) {
		fallDrops(fallX[i], fallY[i], fallSz[i]);
		fallY[i] += fallSpd[i];

		if (fallY[i] - fallSz[i]/2 > height) {
			fallY[i] = -fallSz[i]/2;
		}
	}
}

function fallDrops(x, y, size) {
	background(0, 15);
	stroke(0, 205, 197);
	strokeWeight(3);
	rect(x,y, 30, 30);
}