const grid = {
	numColumns: 2,
	numRows: 1,
};
const ball = {
	diameter: 200,
	color: "black",
};

const balls = [];

const backgroundColor = "rgba(250,250,250)";

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(2);
	background(backgroundColor);
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
	background(backgroundColor);
	noStroke();

	for (let i = 0; i < balls.length; i++) {
		balls[i].update();
		// balls[i].draw();
	}

	for (let i = 0; i < balls.length - 1; i += 2) {
		const pos1 = balls[i].getPosition();
		const pos2 = balls[i + 1].getPosition();
		strokeWeight(2);
		const gradient = Math.abs(Math.sin(frameCount * 0.01) * 255);
		console.log(gradient);
		stroke(gradient);
		line(pos1.x, pos1.y, pos2.x, pos2.y);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
