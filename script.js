
const input = document.getElementById("input");
const add = document.getElementById("add");
const subtract = document.getElementById("sub");
const multiply = document.getElementById("mul");
const divide = document.getElementById("div");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const percentage = document.getElementById("percent");
const plusMinus = document.getElementById("plus-minus");
const number = document.querySelectorAll(".num");


let firstNumber = 0;
let secondNumber = 0;
let selectedOperator;

let isClicked = false;
let isClickedMul = false;
let isClickedSub = false;
let isClickedAdd = false;
let isClickedDiv = false;



const numberArray = [];


const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
function division(a, b){
  if(a / b !== Infinity) {
    return a / b;
  } else {
    return "Error!";
  } 
  
}


const calculate = (operator, num1, num2) => {
      switch (operator){
        case "+":
          return addition(num1, num2);
          case "-":
            return subtraction(num1, num2)
            case "*":
          return multiplication(num1, num2);
          case "/":
          return division(num1, num2);
            
      }
}

number.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
      input.value += this.value;
  }); 
});

decimal.addEventListener("click", function(e) {
  if(!isClicked) {
  input.value += this.value;
  isClicked = true;
} 
}); 

add.addEventListener("click", () => {
   if(!isClickedAdd) {
    selectedOperator = "+";
  firstNumber = parseInt(input.value);
numberArray.push(input.value);
input.value = '';
isClicked = true;
   } else {
    selectedOperator = "+";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
    isClickedAdd = false;
  }
});

subtract.addEventListener("click", () => {
  if(!isClickedSub) {
  selectedOperator = "-";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
isClicked = true;
   } else {
    selectedOperator = "-";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
    isClickedSub = false;
  }
});

multiply.addEventListener("click", () => {
  if(!isClickedMul) {
  selectedOperator = "*";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
isClickedMul = true;
  } else {
    selectedOperator = "*";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
    isClickedMul = false;
  }
});

divide.addEventListener("click", () => {
  if(!isClickedDiv) {
 selectedOperator = "/";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
isClicked = true;
   } else {
    selectedOperator = "/";
 firstNumber = input.value;
numberArray.push(input.value);
input.value = '';
    isClickedDiv = false;
  }
});

percentage.addEventListener("click", () => {
  input.value = input.value / 100;
})

plusMinus.addEventListener("click", () => {
  input.value = - input.value;
})

// edit equal function for multiple clicks of = operator,  round up number to 2 decimal place
// add if statement for NaN Inputs isNaN(input)
// add return to each end of an if statement
equal.addEventListener("click", () => {
  if (selectedOperator === "+"){
    secondNumber = parseInt(input.value);
    input.value = calculate("+", firstNumber, secondNumber);
    
  } else if (selectedOperator === "-"){
    secondNumber = input.value;
    input.value = calculate("-", firstNumber, secondNumber)
  } else if (selectedOperator === "*"){
    secondNumber = input.value;
    input.value = calculate("*", firstNumber, secondNumber)
  } else if (selectedOperator === "/"){
    secondNumber = input.value;
   input.value = calculate("/", firstNumber, secondNumber)
  }
 if((selectedOperator === null || firstNumber === null)) {
     input.value = '';
 }
  });


function clearOutput() {
  firstNumber = "";
  secondNumber = "";
  selectedOperator = "";
  input.value = "";
} 

clear.addEventListener("click", clearOutput);


