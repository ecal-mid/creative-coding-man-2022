class Ball {
	constructor(position, diameter, color) {
		this.x = position.x;
		this.y = position.y;
		this.diameter = diameter;
		this.color = color;
	}

	setup() {
		this.velocity = { x: random(-1, 1), y: random(-1, 1) };
	}
	draw() {
		fill(this.color);
		ellipse(this.x, this.y, this.diameter);
	}

	getPosition() {
		return { x: this.x, y: this.y, diameter: this.diameter };
	}
	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;

		if (
			this.x > windowWidth - this.diameter / 2 ||
			this.x < this.diameter / 2
		) {
			this.velocity.x *= -1;
		}
		if (
			this.y > windowHeight - this.diameter / 2 ||
			this.y < this.diameter / 2
		) {
			this.velocity.y *= -1;
		}
	}
}
