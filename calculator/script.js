let container = document.getElementById('container');
let inputSpan = document.getElementById('inputSpan');
let answerSpan = document.getElementById('answerSpan');
let digitsDiv = document.getElementById('digitsDiv');
let decimal = document.getElementById('decimal');
// let operatorsDiv = document.getElementById('operatorsDiv');
let operators = document.querySelectorAll('.operator');
let equalSign = document.getElementById('equalBtn');
let clearBtn = document.getElementById('clearBtn');

let toggleBtn = document.getElementById('toggleBtn');
let theme = document.querySelector("#theme-link");

toggleBtn.addEventListener("click", () => {
    console.log("clicked")
    if (theme.getAttribute("href") == "light-theme.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "dark-theme.css";
      // Otherwise...
      } else {
        // ... switch it to "light-theme.css"
        theme.href = "light-theme.css";
      }
})

let invalidNumbers = ['.-', '-.', '.', '-'];
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

function modulo(a, b) {
    return a % b;
}

function operate(operator, num1, num2) {
    if (!num2) { // when no second number, return first number
        return num1;
    }
    
    let operatorWord = "";
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operator == "/") {
        operatorWord = "divide";
    }
    if (operator == "*") {
        operatorWord = "multiply";
    }
    if (operator == "-") {
        operatorWord = "subtract";
    }
    if (operator == "+") {
        operatorWord = "add";
    }
    if (operator == "%") {
        operatorWord = "modulo";
    }
    console.log(operatorWord, num1, num2);
    console.log(this[operatorWord](num1, num2));
    return this[operatorWord](num1, num2)
}

let firstVal = "";
let operator = "";
let secondVal = "";
// read buttons pressed, append value to var, display in inputSpan
// only click decimal once per number

digitsDiv.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    currentDigit = event.target.innerText;
    if (currentDigit == "=") {
        return;
    }
    if (!operator) {
        if (currentDigit == "." && firstVal.includes(".")) {
            // if decimal in firstVal, skip
            return;
        }
        firstVal = firstVal.concat(currentDigit); 
        inputSpan.textContent = firstVal;
    } else {
        if (currentDigit == "." && secondVal.includes(".")) {
            // if decimal in secondVal, skip
            return;
        }
        secondVal = secondVal.concat(currentDigit);
        inputSpan.textContent = inputSpan.textContent + currentDigit
    }
    
  })



operators.forEach(op => {
    op.addEventListener('click', (event) => {
        operator = event.target.innerText;
        if (!firstVal) {
            if (operator == "-") {
                firstVal = operator + firstVal;
                inputSpan.textContent =  firstVal;
                operator = "";
            } else {
                inputSpan.textContent = "";
                // return; // ignore for any other operator pressed before firstVal
            }     
        } else { // normal operation
            inputSpan.textContent = firstVal + ' ' + operator + ' ' 
            // overwrites current operator if you click on different one
        }
        
    })
});


equalSign.addEventListener('click', (event) => {
    console.log(firstVal, secondVal)
    if (invalidNumbers.includes(firstVal) || invalidNumbers.includes(secondVal)) {
        // alert('invalid');
        return;
    }
    let ans = operate(operator, firstVal, secondVal);
    answerSpan.textContent = ans;
    clearValues();
})

clearBtn.addEventListener('click', allClear);

function allClear() {
    clearValues();
    inputSpan.textContent = "";
    answerSpan.textContent = "";
}

function clearValues() {
    firstVal = "";
    secondVal = "";
    operator = "";
}
