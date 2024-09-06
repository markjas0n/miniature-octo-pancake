const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Circle render method should return correct SVG', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle render method should return correct SVG', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Square render method should return correct SVG', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
  });
});
