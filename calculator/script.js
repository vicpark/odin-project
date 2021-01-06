let containerDiv = document.getElementById('container');
let inputSpan = document.getElementById('inputSpan');
let answerSpan = document.getElementById('answerSpan');
let digits = document.getElementById('digits');
let operators = document.getElementById('operators');
let equalSign = document.getElementById('equalBtn');
let clearBtn = document.getElementById('clearBtn');
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a / b;
}

function operate(operand, num1, num2) {
    let operator = "";
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (operand == "/") {
        operator = "divide";
    }
    if (operand == "*") {
        operator = "multiply";
    }
    if (operand == "-") {
        operator = "subtract";
    }
    if (operand == "+") {
        operator = "add";
    }
    console.log(operator, num1, num2);
    console.log(this[operator](num1, num2));
    return this[operator](num1, num2)
}

// let computeSequence = {
//     firstVal
// }
let firstVal = "";
let operand = "";
let secondVal = "";
// read buttons pressed, append value to var, display in inputSpan
digits.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    currentDigit = event.target.innerText;
    if (currentDigit == "=") {
        return;
    }
    if (!operand) {
        firstVal = firstVal.concat(currentDigit); 
        inputSpan.textContent = firstVal;
    } else {
        secondVal = secondVal.concat(currentDigit);
        inputSpan.textContent = inputSpan.textContent + currentDigit
    }
    
  })

operators.addEventListener('click', (event) => {
    // clear firstVal, save firstVal, save operand, wait for secondVal, finally equal click
    let isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    operand = event.target.innerText; //only if operand is empty?
    inputSpan.textContent = inputSpan.textContent + ' ' + operand + ' '
})

equalSign.addEventListener('click', (event) => {
    let ans = operate(operand, firstVal, secondVal)
    answerSpan.textContent = ans;
    firstVal = "";
    secondVal = "";
    operand = "";
})

clearBtn.addEventListener('click', allClear);
function allClear() {
    firstVal = "";
    secondVal = "";
    operand = "";
    inputSpan.textContent = "";
    answerSpan.textContent = "";
}
