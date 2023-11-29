export interface IRenderable {
  render(): string;
}

export interface IPositioned {
  x: number;
  y: number;
}

export class GraphicElement implements IRenderable, IPositioned {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  render(): string {
    return "";
  }
}

export class Point extends GraphicElement {
  render() {
    return `Point (${this.x}, ${this.y})`;
  }
}

export class Rectangle extends GraphicElement {
  width: number = 0;
  height: number = 0;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  render() {
    return `Rectangle (${this.x}, ${this.y}) - (${this.width}, ${this.height})`;
  }
}
