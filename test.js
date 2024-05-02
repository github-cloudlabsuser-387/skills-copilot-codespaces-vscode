const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (number1) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
        rl.question('Enter the second number: ', (number2) => {
            let result;

            switch(operator) {
                case '+':
                    result = parseFloat(number1) + parseFloat(number2);
                    break;
                case '-':
                    result = parseFloat(number1) - parseFloat(number2);
                    break;
                case '*':
                    result = parseFloat(number1) * parseFloat(number2);
                    break;
                case '/':
                    if(number2 != 0) {
                        result = parseFloat(number1) / parseFloat(number2);
                    } else {
                        console.log("Cannot divide by zero");
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log("Invalid operator");
                    rl.close();
                    return;
            }

            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});

const calculate = require('./calculate'); // assuming you exported the calculate function in a file named calculate.js

test('adds 1 + 2 to equal 3', () => {
  expect(calculate(1, '+', 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculate(5, '-', 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
  expect(calculate(4, '*', 2)).toBe(8);
});

test('divides 8 / 2 to equal 4', () => {
  expect(calculate(8, '/', 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
  expect(() => calculate(5, '/', 0)).toThrow("Cannot divide by zero");
});

test('throws error when invalid operator is used', () => {
  expect(() => calculate(5, 'x', 3)).toThrow("Invalid operator");
});