var bingo;
var clicked = false;
function setup() {
	
	createCanvas(640, 360);
	bingo = color(255);
}

function draw() {
	background("black");

	
	/* draw quandrant lines */
	strokeWeight(1);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);


	/* for each quandrant, determine of mouse 
		is inside bounds */	
	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);
		bingo = "blue";
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);
		bingo = "green";
	} else if (mouseX > width/2 && mouseY < height/2){
		rect(width/2, 0, width, height/2);
		bingo = "yellow"; 
	} else {
		rect(0, 0, width/2, height/2);
		bingo = "red";
	}

	fill(bingo);
	ellipse(width/2, height/2, 200);
}