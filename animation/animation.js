function setup() {
	createCanvas(800, 800);
	stroke(0, 250, 250);
	rectMode(CENTER);

}

function draw() {
	background(0, 15);

	push();
	stroke(0, 205, 197);
	translate(width/2, height/2);
	rotate(frameCount * PI / -400);
	rect(0, 0, 500, 500);
	pop();

	push();
	stroke(0, 220, 82);
	translate(width/2, height/2);
	rotate(frameCount * PI / 350);
	rect(0, 0, 450, 450);
	pop();

	push();
	stroke(151, 245, 0);
	translate(width/2, height/2);
	rotate(frameCount * PI / -300);
	rect(0, 0, 400, 400);
	pop();

	push();
	stroke(255, 235, 0);
	translate(width/2, height/2);
	rotate(frameCount * PI / 250);
	rect(0, 0, 350, 350);
	pop();
	
    push();
    stroke(255, 167, 0);
	translate(width/2, height/2);
	rotate(frameCount * PI / -200);
	rect(0, 0, 300, 300);
	pop();

	push();
	stroke(255, 19, 0);
	translate(width/2, height/2);
	rotate(frameCount * PI / 150);
	rect(0, 0, 250, 250);
	pop();

	push();
	stroke(229, 0, 134);
	translate(width/2, height/2);
	rotate(frameCount * PI / -100);
	rect(0, 0, 200, 200);
	pop();

	push();
	stroke(144, 10, 212);
	translate(width/2, height/2);
	rotate(frameCount * PI / 80);
	rect(0, 0, 150, 150);
	pop();

	push();
	stroke(64, 24, 215);
	translate(width/2, height/2);
	rotate(frameCount * PI / -60);
	rect(0, 0, 100, 100);
	pop();

	push();
	stroke(14, 114, 210);
	translate(width/2, height/2);
	rotate(frameCount * PI / 40);
	rect(0, 0, 50, 50);
	pop();

	

}