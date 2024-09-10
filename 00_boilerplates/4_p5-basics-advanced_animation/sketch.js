const grid = {
	numColumns: 10,
	numRows: 10,
};
const ball = {
	diameter: 20,
	color: "black",
};
const moveProps = {
	amplitude: null,
	velocity: 0.01,
};

const arrayBalls = [];

function defineNumCells() {
	// grid.numRows = Math.floor(windowHeight / 10);
	// grid.numColumns = Math.floor(windowWidth / 10);
}

function setup() {
	moveProps.amplitude = windowWidth / 30;
	defineNumCells();
	initBalls();
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
}

function initBalls() {
	for (let yPos = 0; yPos < grid.numRows; yPos = yPos + 1) {
		for (let xPos = 0; xPos < grid.numColumns; xPos = xPos + 1) {
			const sizeColumn = windowWidth / grid.numColumns;
			const sizeRow = windowHeight / grid.numRows;
			const positionBall = {
				x: sizeColumn * xPos + sizeColumn / 2,
				y: sizeRow * yPos + sizeRow / 2,
			};
			const balle = {
				col: xPos,
				row: yPos,
				position: { x: positionBall.x, y: positionBall.y },
				velocity: { x: random(-1, 1), y: random(-1, 1) },
			};
			arrayBalls.push(balle);
		}
	}
}

function draw() {
	noStroke();
	background("rgba(255,255,255,0.01)");
	fill("black");

	for (let i = 0; i < arrayBalls.length; i++) {
		arrayBalls[i].position.x =
			arrayBalls[i].position.x + arrayBalls[i].velocity.x;
		arrayBalls[i].position.y =
			arrayBalls[i].position.y + arrayBalls[i].velocity.y;

		noStroke();
		fill("black");
		ellipse(arrayBalls[i].position.x, arrayBalls[i].position.y, ball.diameter);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}
