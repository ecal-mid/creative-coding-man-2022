const grid = {
	numColumns: 10,
	numRows: 10,
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

			const hue = xPos * (yPos * 4);
			const balle = {
				col: xPos,
				row: yPos,
				hue: hue,
				luminosity: 30,
				color: null,
				position: { x: positionBall.x, y: positionBall.y },
				velocity: { x: random(-1, 1), y: random(-1, 1) },
				diameter: random(1, 20),
			};
			arrayBalls.push(balle);
		}
	}
}

function draw() {
	noStroke();
	// background("rgba(255,255,255,0.1)");
	noStroke();

	for (let i = 0; i < arrayBalls.length; i++) {
		fill("hsl(" + arrayBalls[i].hue + ",100%, 50%)");

		arrayBalls[i].position.x =
			arrayBalls[i].position.x + arrayBalls[i].velocity.x;
		arrayBalls[i].position.y =
			arrayBalls[i].position.y + arrayBalls[i].velocity.y;
		if (
			arrayBalls[i].position.x >= windowWidth - arrayBalls[i].diameter / 2 ||
			arrayBalls[i].position.x <= arrayBalls[i].diameter / 2
		) {
			arrayBalls[i].velocity.x = -arrayBalls[i].velocity.x;
			arrayBalls[i].velocity.x = arrayBalls[i].velocity.x;
			arrayBalls[i].luminosity += 5;
		}
		if (
			arrayBalls[i].position.y >= windowHeight - arrayBalls[i].diameter / 2 ||
			arrayBalls[i].position.y <= arrayBalls[i].diameter / 2
		) {
			arrayBalls[i].velocity.y = -arrayBalls[i].velocity.y;
			arrayBalls[i].velocity.y = arrayBalls[i].velocity.y;
			arrayBalls[i].luminosity += 5;
		}
		ellipse(
			arrayBalls[i].position.x,
			arrayBalls[i].position.y,
			arrayBalls[i].diameter
		);
	}
}

function keyPressed(ev) {
	if (ev.keyCode == 37) {
		for (let i = 0; i < arrayBalls.length; i++) {
			arrayBalls[i].hue = arrayBalls[i].hue - 20;
			if (arrayBalls[i].hue <= 0) {
				arrayBalls[i].hue = 360;
			}
		}
	}

	if (ev.keyCode == 38) {
		for (let i = 0; i < arrayBalls.length; i++) {
			arrayBalls[i].diameter = arrayBalls[i].diameter + 10;
		}
	}

	if (ev.keyCode == 39) {
		for (let i = 0; i < arrayBalls.length; i++) {
			arrayBalls[i].hue = arrayBalls[i].hue + 20;
			if (arrayBalls[i].hue > 360) {
				arrayBalls[i].hue = 0;
			}
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
