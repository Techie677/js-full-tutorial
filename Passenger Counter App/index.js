let passengerCount = 0;
let incBtn = document.getElementById("increment-btn");
let countDisplay = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  passengerCount += 1;
  console.log(passengerCount);
  countDisplay.textContent = passengerCount
}

function save() {
  console.log(passengerCount);
  let countStr = passengerCount + " - ";
  saveEl.textContent += countStr;
  countDisplay.textContent = 0;
  passengerCount = 0;
}

let myPoints = 3;

function add3Points (){
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

add3Points();
remove1Point();
remove1Point();
add3Points();
add3Points();
console.log(myPoints);