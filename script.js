const numberButton = document.querySelectorAll("#number")
const operatorButton = document.querySelectorAll("#operator")
const advanceOperatorButton = document.querySelector("#advanceOperator")
const clearButton = document.querySelector("#clear")
const dotButton = document.querySelector("#dot")
const equalButton = document.querySelector("#equal")
const resultDiv = document.querySelector(".result")
const archiveDiv = document.querySelector(".archive")

let operator;
let firstNumber;
let secondNumber;
let result;

equalButton.addEventListener("click", () => {
    secondNumber = Number(resultDiv.innerHTML)
    archiveDiv.innerHTML += secondNumber + "="
    resultDiv.innerHTML = ""
    switch (operator) {
        case "%":
            result = (firstNumber * secondNumber) / 100
            break;

        case "/":
            result = firstNumber / secondNumber
            break;

        case "*":
            result = firstNumber * secondNumber
            break;

        case "-":
            result = firstNumber - secondNumber
            break;

        case "+":
            result = firstNumber + secondNumber
            break;

        default:
            break;
    }
    resultDiv.innerHTML += result
})

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        resultDiv.innerHTML += button.innerHTML
    })
})

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        firstNumber = Number(resultDiv.innerHTML)
        operator = button.innerHTML
        if (archiveDiv.innerHTML.includes("=")) {
            archiveDiv.innerHTML = ""
            archiveDiv.innerHTML += firstNumber + " " + operator + " "
            resultDiv.innerHTML = ""
        }else{
            archiveDiv.innerHTML += firstNumber + " " + operator + " "
            resultDiv.innerHTML = ""
        }
    })
})

advanceOperatorButton.addEventListener("click" , () => {
  if (resultDiv.innerHTML.startsWith("-")) {
    resultDiv.innerHTML = resultDiv.innerHTML.slice(1)
  }else if (resultDiv.innerHTML.startsWith("")){
    resultDiv.innerHTML = "-" + resultDiv.innerHTML
  }
})

clearButton.addEventListener("click", () => {
    resultDiv.innerHTML = ""
    archiveDiv.innerHTML = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
})

dotButton.addEventListener("click" , () => {
    if (!resultDiv.innerHTML.includes(".")) {
        resultDiv.innerHTML += "."
    }
})

