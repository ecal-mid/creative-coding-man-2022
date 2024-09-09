function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	background("rgba(250, 250, 250)");
	noStroke();

	fill("black");
	ellipse(windowWidth / 2, windowHeight / 2, 100);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
