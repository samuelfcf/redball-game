import Circle from "./Circle";

class Player {
  x: number;
  y: number;
  radius: number;
  color: string;
  context: any;
  circle: Circle;

  constructor(xInit, yInit, radius, color, context) {
    this.x = xInit;
    this.y = yInit;
    this.radius = radius;
    this.color = color;
    this.context = context;

    this.circle = new Circle(this.x, this.y, this.radius, this.color, this.context)
  }

  draw (x, y) {
    this.circle.draw(x, y, this.radius, this.color)
  }
}

export default Player;