const os = require('os');

const Color = require('color');
const clc = require('cli-color');

const calculator = require('./Calculator');

const userInfo = os.userInfo();
console.log(clc.bold(Color('#00FF00').string()) + ` Hello, ${userInfo.username}! Welcome to the Node.js Calculator.`);

const num1 = 10;
const num2 = 5;

console.log(clc.bold('\nPerforming Calculations:'));
console.log(clc.cyan(`Addition: ${num1} + ${num2} = ${calculator.add(num1, num2)}`));
console.log(clc.yellow(`Subtraction: ${num1} - ${num2} = ${calculator.subtract(num1, num2)}`));
console.log(clc.green(`Multiplication: ${num1} * ${num2} = ${calculator.multiply(num1, num2)}`));
console.log(clc.magenta(`Division: ${num1} / ${num2} = ${calculator.divide(num1, num2)}`));

console.log(clc.red(`Division by zero: ${num1} / 0 = ${calculator.divide(num1, 0)}`));
