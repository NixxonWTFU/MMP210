function setup() {
	createCanvas(800, 600);
	background(185, 152, 167);



	var P = color(185, 152, 167);
	var DP = color(159, 127, 132);
	var LB = color(212, 212, 239);
	var DB = color(187, 190, 227);
	var LP = color(228, 212, 205);

	var frame = (100, 180);
	var pane = (80, 160);
	var off = (50);

var columnNum = 4;
var rowNum = 3;
var columnSize = width/columnNum;
var rowSize = height/rowNum;

for (var x = 40; x <= width; x += columnSize) {
	for (var y = 10; y <= height; y += rowSize) {

	noStroke();

	fill(LP);
    rect(x-30, y-10, 20, height);
    rect(x+10, y-10, 20, height);
    rect(x+50, y-10, 20, height);
    rect(x+90, y-10, 20, height);
    rect(x+130, y-10, 20, height);
   


    fill(255);
    rect(x, y, 100, 180);

    fill(LB);
    rect(x + 10, y +10, 80, 160);

    fill(DB);
    rect(x + 10, y +10, 80, 40);

    fill(255);
     rect(x + 45, y +10, 10, 160);

     rect(x + 10, y + 30, 80, 10);
     rect(x + 10, y + 140, 80, 10);

     

	}
}


    




}