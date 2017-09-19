function setup() {
	createCanvas(800, 400);
	background(109, 64, 147);

	noStroke();
	var BP = color(102, 6, 98);
	var DP = color(71, 7, 53);
	var LP = color(152, 45, 135);
	var WP = color(160, 130, 159);
	var LB = color(107, 177, 204);
	var BB = color(37, 127, 162);
	var DB = color(15, 53, 72);

	var str1 = "Nathalie";
    var str2 ="Eugene";

	background(DB);

	/*circles in back*/
	fill(BP);
	ellipse(250, 100, 200, 200);
	ellipse(550, 150, 100, 100);

	/*stripes in back*/
	fill(DP);
	rect(50, 300, 700, 10);
	fill(BP);
	rect(100, 330, 600, 10);
	fill(LP);
	rect(150, 360, 500, 10);


	/*circle in front*/
	fill(LB);
	ellipse(400, 200, 300, 300);

	/*stripes in circle*/
	fill(DB);
	rect(200, 225, 400, 25);
	rect(200, 275, 400, 25);

	/*triangles*/
	fill(DP);
	triangle(125, 150, 75, 300, 175, 300);
	triangle(150, 300, 215, 225, 275, 300);
	triangle(550, 300, 600, 200, 650, 300);
	triangle(600, 300, 675, 150, 725, 300);

	/*text*/
	fill(LP);
	stroke(LB);
	strokeWeight(6);
	textSize(70);
	textFont("Racer");
	text(str1, 180, 155);

	fill(LP);
	stroke(LB);
	strokeWeight(6);
	textSize(70);
	textFont("Racer");
	text(str2, 220, 220);

}

function draw() {
	
}