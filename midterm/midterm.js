function setup() {
	createCanvas(1000, 550);
	
	design();

}

function design() {

	//BACKGROUND=======================================
    background(0);
    var columnNum = 10;
	var columnSize = width/columnNum;


	for (var a = 0; a <= width; a += columnSize) {
	

		  var r = random(130, 170);
		  var g = random(0, 40);
		  var b = random(140, 170);

		  fill(r, g , b);
		  noStroke();

		  rect(a, 0, 50, height);
		
	}

	//SHAPES====================================

	var numb = 22;
    var columns = Math.sqrt(numb);
    var rows = columns;
	var sW = width/columns;
    var sH = height/rows;



    //GHOST======================================
    for(var x = 10; x < width; x += sW) {
        for (var y = 10; y < height; y += sH) {

        if(random(1) > 0.5) {
		  var r = random(150, 190);
		  var g = random(160, 200);
		  var b = random(200, 240);

		  fill(r, g , b);
		  noStroke();

	       arc(x+40, y+40, 80, 80, PI, 0);
	       rect(x,y+40, 80, 30);
	       triangle(x, y+70, x+20, y+70, x+10, y+90);
	       triangle(x+20, y+70, x+40, y+70, x+30, y+90);
	       triangle(x+40, y+70, x+60, y+70, x+50, y+90);
	       triangle(x+60, y+70, x+80, y+70, x+70, y+90);

	       //eyes
	       fill(0);
	       ellipse(x+20, y+35, 15, 15);
	       ellipse(x+60, y+35, 15, 15);

	       //mouth
	       arc(x+40, y+60, 10, 10, PI, 0);
	   } else {

	      //monster
	   	  var r = random(0, 60);
		  var g = random(140, 180);
		  var b = random(0, 20);

		  fill(r, g, b);
		  noStroke();

		  rect(x+5, y+5, 80, 60, 10);
		  rect(x+20, y+50, 50, 50, 10);

		  //hair
		    fill(0);
		  triangle(x+15, y+5, x+35, y+5, x+25, y+20);
		  triangle(x+35, y+5, x+55, y+5, x+45, y+20);
		  triangle(x+55, y+5, x+75, y+5, x+65, y+20);

		  //eyes
		 arc(x+25, y+30, 20, 20, 0, PI);
		 arc(x+65, y+30, 20, 20, 0, PI);

		  //nose
		  triangle(x+45, y+50, x+40, y+65, x+50, y+65);

		  //mouth
		  ellipse(x+30, y+85, 5, 10);
		  ellipse(x+40, y+85, 5, 10);
		  ellipse(x+50, y+85, 5, 10);
		  ellipse(x+60, y+85, 5, 10);
	

	   }

	      //PUMPKIN========================================
	      for (var i = x+95; i < width; i+=sW) {
    		for (var k = y; k < height; k+=sH) {

    	  if(random(1) > 0.5) {
    		var r = random(200, 255);
		  	var g = random(70, 140);
		  	var b = random(0, 40);
    		fill(r, g, b);
    		noStroke();

    		ellipse(i+30, k+50, 50, 60);
    		ellipse(i+50, k+50, 80, 70);
    		ellipse(i+70, k+50, 50, 60);

    		fill(0);
    		//eyes
    		triangle(i+20, k+40, i+40, k+50, i+25, k+50);
    		triangle(i+60, k+50, i+80, k+40, i+75, k+50);

    		//mouth 
    		quad(i+20, k+65, i+30, k+60, i+40, k+65, i+30, k+70);
    		quad(i+40, k+65, i+50, k+60, i+60, k+65, i+50, k+70);
    		quad(i+60, k+65, i+70, k+60, i+80, k+65, i+70, k+70);
    	    } else {

    	    var r = random(220, 255);
		  	var g = random(60, 90);
		  	var b = random(0, 30);
    		fill(r, g, b);
    		noStroke();

    		ellipse(i+30, k+50, 50, 60);
    		ellipse(i+50, k+50, 80, 70);
    		ellipse(i+70, k+50, 50, 60);

    		fill(0);
    	    //eyes
    	    ellipse(i+30, k+45, 20, 20);
    		ellipse(i+70, k+45, 20, 20);

    		//mouth 
    		arc(i+50, k+60, 15, 15, 0, PI);
    	    }

    	//END================    
    	}

    	
    }
        }
    }


}

function mouseClicked() {
	design();
}