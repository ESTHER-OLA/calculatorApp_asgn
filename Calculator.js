const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
};

module.exports = { add, subtract, multiply, divide };
