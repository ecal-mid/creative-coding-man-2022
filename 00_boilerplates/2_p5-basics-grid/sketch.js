const grid = {
	xPos: 10,
	yPos: 10,
};

const ball = {
	diameter: 10,
	color: "black",
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	background("white");
	noStroke();
	fill("black");
	for (let yPos = 0; yPos < grid.yPos; yPos = yPos + 1) {
		for (let xPos = 0; xPos < grid.xPos; xPos = xPos + 1) {
			const sizeColumn = windowWidth / grid.xPos;
			const sizeRow = windowHeight / grid.yPos;
			const positionBall = {
				x: sizeColumn * xPos + sizeColumn / 2,
				y: sizeRow * yPos + sizeRow / 2,
			};
			noStroke();
			fill("black");
			ellipse(positionBall.x, positionBall.y, ball.diameter);
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
