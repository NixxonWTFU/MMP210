function setup() {
	createCanvas(400, 400);
    var red = color("red");
    var black = color("#000000");
    var white = color("#ffffff");
    var blue = color("blue");
    

    background(0);

    fill(red);
    ellipse(200, 200, 250, 300);
    
    fill(black);
    ellipse(140, 190, 90, 140);
    ellipse(260, 190, 90, 140);
    
    line(140, 70, 140, 330);
    line(260, 70, 260, 330);
    
    fill(white)
    ellipse(140, 190, 40, 60);
    ellipse(260, 190, 40, 60);
}


function draw() {
	
}