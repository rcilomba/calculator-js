const display = document.querySelector(".display");
let operator = null;
let firstNumber = "";
let secondNumber = "";
let result;

document.querySelectorAll(".number").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!operator) {
      firstNumber += this.getAttribute("data-num");
      console.log("firstNumber: " + firstNumber);
      document.querySelector(".display").innerHTML = firstNumber;
    } else {
      secondNumber += this.getAttribute("data-num");
      console.log("second number: " + secondNumber);
      document.querySelector(".display").innerHTML = secondNumber;
    }
    //
  });
});

document.querySelectorAll(".operator").forEach((btn) => {
  btn.addEventListener("click", function () {
    operator = this.getAttribute("data-op");
    console.log(operator);
  });
});

document.querySelector(".equalTo").addEventListener("click", function () {
  switch (operator) {
    case "add":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      //
      document.querySelector(".display").innerHTML = result;
      break;
    case "divide":
      result = parseInt(firstNumber) / parseInt(secondNumber);
      //
      document.querySelector(".display").innerHTML = result;
      //
      if (result == firstNumber / 0) {
        //
        document.querySelector(".display").innerHTML = "no number";
        console.log("cant divide with 0");
      }
      break;
    case "substract":
      result = parseInt(firstNumber) - parseInt(secondNumber);
      //
      document.querySelector(".display").innerHTML = result;
      break;
    case "multiply":
      result = parseInt(firstNumber) * parseInt(secondNumber);
      //
      document.querySelector(".display").innerHTML = result;
      break;

    case "noNum":
      if (result.inclide(!firstNumber)) {
        consolo.log("no numbers");
      }
      break;

    default:
      break;
  }
  console.log(result);
});

// if (result.includes(!firstNumber)) {
//   console.log("no number, error");
// }

document.querySelector(".clear").addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  result = "";
  //
  document.querySelector(".display").innerHTML = 0;
  console.log(firstNumber);
});

// om result ej include Number = error

// case "noNumber":
//       if (result.includes(firstNumber)) {
//         console.log("no number, error");
//       }

//börja med funktion, plus och minus
//eventlistener, som tar html från den document.querySelector som man väljer

//att göra
//man ska ej kunna dividera med 0 -check
// ej kunna göra operation utan siffror
// visa numbers i displayen -check
