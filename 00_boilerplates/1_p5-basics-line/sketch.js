const grid = {
	numColumns: 10,
};

const ball = {
	diameter: 20,
	color: "black",
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	background("white");
	noStroke();
	fill("black");

	for (
		let nombreEllipse = 0;
		nombreEllipse < grid.numColumns;
		nombreEllipse = nombreEllipse + 1
	) {
		const sizeColumn = windowWidth / grid.numColumns;

		const positionBall = {
			x: sizeColumn * nombreEllipse + sizeColumn / 2,
			y: windowHeight / 2,
		};
		ellipse(positionBall.x, positionBall.y, ball.diameter);

		stroke("red");
		noFill();
		rect(
			sizeColumn * nombreEllipse,
			0,
			sizeColumn * (nombreEllipse + 1),
			windowHeight
		);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
