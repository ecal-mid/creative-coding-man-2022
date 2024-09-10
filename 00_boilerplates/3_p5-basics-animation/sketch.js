const grid = {
	numColumns: 100,
	numRows: 100,
};
const ball = {
	diameter: 10,
	color: "black",
};
const moveProps = {
	amplitude: null,
	velocity: 0.01,
};

const array = [0, 0, 0, 1];

function defineNumCells() {
	// grid.numRows = Math.floor(windowHeight / 10);
	// grid.numColumns = Math.floor(windowWidth / 10);
}

function setup() {
	moveProps.amplitude = windowWidth / 30;
	defineNumCells();
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
}

function draw() {
	noStroke();
	background("rgba(255,255,255,0.01)");
	fill("black");
	for (let yPos = 0; yPos < grid.numRows; yPos = yPos + 1) {
		for (let xPos = 0; xPos < grid.numColumns; xPos = xPos + 1) {
			const sizeColumn = windowWidth / grid.numColumns;
			const sizeRow = windowHeight / grid.numRows;
			const positionBall = {
				x: sizeColumn * xPos + sizeColumn / 2,
				y: sizeRow * yPos + sizeRow / 2,
			};
			const deplacement = {
				x:
					Math.sin((frameCount + xPos * 10) * moveProps.velocity) *
					moveProps.amplitude,
				y:
					Math.cos((frameCount + xPos * 10) * moveProps.velocity) *
					moveProps.amplitude,
			};

			noStroke();
			fill("black");
			ellipse(
				positionBall.x + deplacement.x,
				positionBall.y + deplacement.y,
				ball.diameter
			);
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
