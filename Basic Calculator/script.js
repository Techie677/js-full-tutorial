let num1 = 9
let num2 = 7

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;
let sum = document.getElementById("sum");

function add() {
  let result = num1 + num2
  sum.textContent = "Result: " + result;
}
function subtract() {
  let result = num1 - num2
  sum.textContent = "Result: " + result;
}
function divide() {
  let result = num1 / num2
  sum.textContent = "Result: " + result;
}
function multiply() {
  let result = num1 * num2
  sum.textContent = "Result: " + result;
}