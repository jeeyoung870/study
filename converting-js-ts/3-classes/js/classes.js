class GraphicElement {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render() {
    return "";
  }
}

export class Point extends GraphicElement {
  render() {
    return `Point (${this.x}, ${this.y})`;
  }
}

export class Rectangle extends GraphicElement {
  width = 0;
  height = 0;

  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  render() {
    return `Rectangle (${this.x}, ${this.y}) - (${this.width}, ${this.height})`;
  }
}

module.exports = {
  GraphicElement,
  Point,
  Rectangle,
};
