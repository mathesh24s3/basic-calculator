let i = 0;
let j = 0;
let k = 0;
let numberArray = [""];
let number = [""];
let calculationArray = [""];
let sum = 0,
  diff = 0,
  mult = 1;
div = 1;

const numbersInputElement = document.querySelectorAll("input.numbers");

const operatorsInputElements = document.querySelectorAll(".operators");

const clearAllElement = document.getElementById('clearAll');

const backspaceElement = document.getElementById('backspace');

const equaltoElement = document.getElementById("equalto");

const outputSpanElement = document.querySelector("#output span p");

for (const number of numbersInputElement) {
  number.addEventListener("click", inputNumber);
}

for (const operator of operatorsInputElements) {
  operator.addEventListener("click", storeNumber);
}

clearAllElement.addEventListener('click' , reset);

backspaceElement.addEventListener('click', backspace)

equaltoElement.addEventListener('click' , calculate);
