const grid = {
	numColumns: 10,
	numRows: 10,
};
const ball = {
	diameter: 100,
	color: "black",
};

const balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	initBalls();
}

function initBalls() {
	let sizeCell = {
		column: windowWidth / grid.numColumns,
		row: windowHeight / grid.numRows,
	};
	let margin = {
		x: sizeCell.column - ball.diameter,
		y: sizeCell.row - ball.diameter,
	};
	for (let numRow = 0; numRow < grid.numRows; numRow++) {
		for (let numCol = 0; numCol < grid.numColumns; numCol++) {
			let positionBall = {
				x: sizeCell.column * numCol + ball.diameter / 2 + margin.x / 2,
				y: sizeCell.row * numRow + ball.diameter / 2 + margin.y / 2,
			};

			const instanceBall = new Ball(positionBall, ball.diameter, ball.color);

			instanceBall.setup();
			balls.push(instanceBall);
		}
	}
}

function mousePressed() {
	let isOverBall = false;
	for (let i = 0; i < balls.length; i++) {
		const pos = balls[i].getPosition();
		if (dist(mouseX, mouseY, pos.x, pos.y) < ball.diameter / 2) {
			isOverBall = true;
			balls.splice(i, 1);
		}
	}
	if (!isOverBall) {
		addBall();
	}
}

function addBall() {
	const instanceBall = new Ball(
		{ x: mouseX, y: mouseY },
		ball.diameter,
		"rgb(0,255,0)"
	);
	instanceBall.setup();
	balls.push(instanceBall);
}

function draw() {
	background("rgba(250, 250, 250,0.02)");
	noStroke();
	/*********
	Create a line of nColumns balls
	*************/
	// Calculate the position of the ball

	// Adding another level of loop to create a grid

	for (let i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].draw();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
