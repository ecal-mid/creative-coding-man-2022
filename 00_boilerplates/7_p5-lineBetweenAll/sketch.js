const grid = {
	numColumns: 20,
	numRows: 2,
};
const ball = {
	diameter: 20,
	color: "red",
};

const balls = [];
const backgroundColor = "rgba(250,250,250,)";

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
		balls[i].draw();
	}

	for (let i = 0; i < balls.length; i++) {
		for (let j = 0; j < balls.length; j++) {
			if (i == j) {
				continue;
			}
			const pos1 = balls[i].getPosition();
			const pos2 = balls[j].getPosition();
			strokeWeight(1);
			// colorMode(HSL);
			// // stroke color based on framecount
			// stroke(frameCount % 360, 100, 50);
			stroke("rgba(0,0,0,1)");
			strokeCap(ROUND);
			line(pos1.x, pos1.y, pos2.x, pos2.y);
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
