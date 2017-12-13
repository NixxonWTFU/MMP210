var numSpaceships = 20;
var speed = [];
var SpaceshipX = [];
var SpaceshipY = [];
var SpaceshipSize = [];
var SpaceshipColor = [];


function setup() {
	createCanvas(720, 360);
	background(0);
	fill(255);
	noStroke();
	
	for (var i = 0; i < numSpaceships; i++) {
		var x = random(0, width);
		SpaceshipX.push(x);
		var y = random(0, height);
		SpaceshipY.push(y);
		var size = random(20, 40);
		SpaceshipSize.push(size);
		SpaceshipColor.push(color(
			random(100, 220),
			random(0, 100),
			random(100, 255)
			));
		speed.push(random(1, 7));
		
	}
}

function draw() {
	background(0); 
	for (var i = 0; i < numSpaceships; i++) {
		fill(SpaceshipColor[i]);
		spaceship(SpaceshipX[i], SpaceshipY[i], SpaceshipSize[i]);
		SpaceshipX[i] += speed[i];

		if (SpaceshipX[i] - SpaceshipSize[i]/2 > width) {
			SpaceshipX[i] = -SpaceshipSize[i]/2;
		}
	}

}

function spaceship(x,y,size) {
	

	
	arc(x, y, size, size, PI, 0);
	arc(x, y, size*2, size*2, 0, PI);

	fill(255);
	rect(x-size, y+size/20, size*2, size/8);

	fill(0);
	ellipse(x-size/4, y-size/4, size/6, size/6);
	ellipse(x+size/4, y-size/4, size/6, size/6);

	fill(255);

	arc(x, y+size/2, size, size/2, 0, PI);
	ellipse(x-size/2, y+size/2, size/4, size/4);
	ellipse(x+size/2, y+size/2, size/4, size/4);


}


