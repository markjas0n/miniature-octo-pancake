const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):',
  }
];

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;

  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
  }

  shapeInstance.setColor(shapeColor);

  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeInstance.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}

inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});
