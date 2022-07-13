function reset() {
  numberArray = [""];
  number = [""];
  calculationArray = [""];
  i = 0;
  j = 0;
  k = 0;
  outputSpanElement.textContent = "";
}

function backspace() {
  numberLength = number.length - 1;
  number.splice(numberLength, 1);
  outputSpanElement.textContent = number.join(" ");
}

function resetNumbers() {
  numberArray = [""];
  i = 0;
}

// function calcSum() {
//   for (let k = 0; k < calculationArray.length; k++) {
//     sum += calculationArray[k];
//   }
//   console.log(sum);
// }

// function difference() {
//   for (let k = 0; k < calculationArray.length; k++) {
//     diff += calculationArray[k];
//   }
//   console.log(diff);
// }
// function multiply() {
//   for (let k = 0; k < calculationArray.length; k++) {
//     mult *= calculationArray[k];
//   }
//   console.log(mult);
// }

// function divide() {
//   for (let k = 0; k < calculationArray.length; k++) {
//     div /= calculationArray[k];
//   }
//   console.log(div);
// }

function calculate(event) {
  const value = event.target.value;
  calculationArray[k] = +numberArray.join("");
  k++;
  console.log(calculationArray);
  number[j] = +numberArray.join("");
  j++;
  number[j] = value;
  j++;
  outputSpanElement.textContent = number.join(" ");
  outputSpanElement.classList.add("calculate-number");
  resetNumbers();
  sum = number[0];
  diff = number[0];
  mult = number[0];
  div = number[0];
  let previousNumber = 0;
  for (let j = 1; j < number.length - 1; j += 2) {
    if (number[j] === "+") {
      if (j === 1) {
        sum += number[j + 1];
        previousNumber = sum;
      } else {
        previousNumber += number[j + 1];
      }
    } else if (number[j] == "-") {
      if (j === 1) {
        diff -= number[j + 1];
        previousNumber = diff;
      } else  {
        previousNumber -= number[j + 1];
      }
    } else if (number[j] == "*") {
      if (j === 1) {
        mult *= number[j + 1];
        previousNumber = mult;
      } else  {
        previousNumber *= number[j + 1];
        
      }
    } else if (number[j] == "/") {
      if (j === 1) {
        div /= number[j + 1];
        previousNumber = div;
      } else if (j > 1) {
        previousNumber /= number[j + 1];
      }
    }
  }
  console.log(previousNumber);
  outputSpanElement.textContent = previousNumber;
}

function inputNumber(event) {
  const value = event.target.value;
  numberArray[i] = value;
  outputSpanElement.textContent = numberArray.join("");
  outputSpanElement.classList.add("input-number");
  i++;
}

function storeNumber(event) {
  const value = event.target.value;
  calculationArray[k] = +numberArray.join("");
  k++;
  console.log(calculationArray);
  number[j] = +numberArray.join("");
  j++;
  number[j] = value;
  j++;
  outputSpanElement.textContent = number.join(" ");
  outputSpanElement.classList.add("calculate-number");
  resetNumbers();
}
