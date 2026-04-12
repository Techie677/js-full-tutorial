// Objects & functions
let person = {
  name: "Phil",
  age: 23,
  country: "Kenya"
}

function logData() {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.country}.`);
}

logData();


// If else
let age = 85;
console.log("\nTrain charges:");

if(age < 6) {
  console.log("Less than 6 years old - Free");
} else if(age < 18) {
  console.log("6 to 17 years old - Child discount");
} else if(age < 27) {
  console.log("18 to 26 years old - Student discount");
} else if(age < 67) {
  console.log("27 to 66 years old - Full price");
} else {
  console.log("67 years and above - Senior citizen discount");
}


// Loops & arrays
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

console.log("\nThe five largest countries in the world:");
for(const country of largeCountries) {
  console.log(`-${country}`);
}


// Push, pop, unshift, shift challenge
// give china & pakistan back their positions in the array
let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
console.log("\nMixed up countries:");

for(const country of largeCountries2) {
  console.log(`-${country}`);
}
largeCountries2.pop(); // removes Monaco
largeCountries2.push("Pakistan"); // adds Pakistan to the end of the array

console.log("\nPop push success, Pakistan redeemed:");

for(const country of largeCountries2) {
  console.log(`-${country}`);
}

largeCountries2.shift(); // removes Tuvalu
largeCountries2.unshift("China"); // adds China to the beginning of the array

console.log("\nShift unshift succees, China redeemed:");

for(const country of largeCountries2) {
  console.log(`-${country}`);
}


// Logical operators
let dayOfMonth = 13;
let weekday = "Friday";

if(dayOfMonth === 13 && weekday === "Friday") {
  console.log("\nSpooky!🧐It's Friday the 13th.");
}


// Rock paper scissors
let hands = ["rock", "paper", "scissor"];
function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(getHand());


// Sorting fruits
let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruits() {
  for(const fruit of fruits) {
    if(fruit === "🍎") {
      appleShelf.textContent += "🍎";
    } else if(fruit === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}

sortFruits();