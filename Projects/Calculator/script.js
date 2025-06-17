function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function exponentiate(a, b) {
    return a**b;
}

function operate(a, Op, b) {
    let result = 0;

    if (Op === '+') {
        result = add(a, b);
    } else if (Op === '-') {
        result = subtract(a, b);
    } else if (Op === '*') {
        result = multiply(a, b);
    } else if (Op === '^') {
        result = exponentiate(a, b)
    } else {
        result = divide(a, b);
    }
    return result;
}

const display = document.querySelector('.display');
const numDigits = document.querySelectorAll('.num');
const operatorDigits = document.querySelectorAll('.operator');
const plusMinusdigit = document.querySelector('#plus-minus');
const clearDigit = document.querySelector('#clear');
const egalDigit = document.querySelector('#egal');

function clearDisplay() {
    clearDigit.addEventListener('click', () => {
        display.textContent = '';
        firstNum = '';
        secondNum = '';
        Op = '';
        operatorJustPressed = false;
    });
}

function signDigit() {
    plusMinusdigit.addEventListener('click', () => {
        if (display.textContent < 0) {
            display.textContent = display.textContent.slice(1);
        } else if (display.textContent > 0) {
            display.textContent = '-' + display.textContent;
        }
    })
}

let firstNum = '';
let secondNum = '';
let Op = '';
let operatorJustPressed = false;

function takeNumDisplay() {
    operatorDigits.forEach(operatorDigit => {
        operatorDigit.addEventListener('click', () => {
            if (Op !== '') {
                secondNum = parseFloat(display.textContent);
                let result = operate(firstNum, Op, secondNum);
                display.textContent = result;
                firstNum = result;
            } else {
                firstNum = parseFloat(display.textContent);
            }
            Op = operatorDigit.textContent;
            operatorJustPressed = true;
        });
    });

    numDigits.forEach(numDigit => {
        numDigit.addEventListener('click', () => {
            if (operatorJustPressed) {
                display.textContent = numDigit.textContent;
                operatorJustPressed = false;
            } else {
                display.textContent += numDigit.textContent;
            }
        });
    });

    egalDigit.addEventListener('click', () => {
        secondNum = parseFloat(display.textContent);
        let result = operate(firstNum, Op, secondNum);
        display.textContent = result;

        firstNum = parseFloat(result.textContent);
        secondNum = '';
        Op = '';
        operatorJustPressed = false;
    })
}

// Appel des fonctions
clearDisplay()
signDigit()
takeNumDisplay()