function setup() {
	createCanvas(400, 400);
}

function draw() {
	background("black");

	fill("#DC0404");
	ellipse(200, 200, 250, 300);
    
    fill("black");
    ellipse(140, 190, 90, 140);
    ellipse(260, 190, 90, 140);
    
    line(140, 70, 140, 330);
    line(260, 70, 260, 330);
    
    fill("white")
    ellipse(140, 190, 40, 60);
    ellipse(260, 190, 40, 60);
}