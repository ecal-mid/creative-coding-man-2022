class Ball {
	constructor(position, diameter, color) {
		this.x = position.x;
		this.y = position.y;
		this.diameter = diameter;
		this.color = color;
		this.maxVelocity = 1;
	}

	setup() {
		this.velocity = {
			x: random(-this.maxVelocity, this.maxVelocity),
			y: random(-this.maxVelocity, this.maxVelocity),
		};
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
