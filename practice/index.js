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



// After the lead tracker extension
// let & const
const player = "Phil";
const opponent = "Justin";
const game = "AmazingFighter";

let points = 0;
let hasWon = false;

points +=100;
hasWon = true;

if (hasWon) {
  console.log(`${player} got ${points} points and has won the ${game} game!`);
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game`);
}

// Log out items of an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];


function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logItems(myCourses);


// save to local storage
let value = "Nice code";
//localStorage.setItem("value", JSON.stringify( value ));
const valueFromLocalStorage = JSON.parse(localStorage.getItem("value"));
console.log(valueFromLocalStorage);


// addEventListener
let data = [
  {
    player: "Phil",
    score: 70
  },
  {
    player: "Ryan",
    score: 63
  }
]

let scoreBtn = document.getElementById("score-btn");
let scoreDisplay = document.getElementById("score-display");

scoreBtn.addEventListener("click", function() {
  let scoreLog = data[0].score
  console.log(scoreLog);
  scoreDisplay.textContent  = scoreLog;
});


// Sentence generator
 /* 
  The function takes two parameters: a description and an array.
  Should return a string based on the description and array.  
 */

  function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `;
    const lastIndex = arr.length - 1;
    const secondLastIndex = arr.length - 2;

    for(let i = 0; i < arr.length; i++) {
      if (i === lastIndex) {
        baseString += "and " + arr[i] + ".";
      } 
      else if (i === secondLastIndex) {
        baseString += arr[i] + " ";
      } else {
        baseString += arr[i] + ", ";
      }
    }
    return baseString;
  }

  const sentence = generateSentence("best fruits", ["bananas", "pawpaws", "mangoes"]);
  const sentence2 = generateSentence("best bikes", ["Honda Crf300L rally", "Qjmotor 450 rx", "Yamaha Tenere 7000 rally"]);
  console.log(sentence);
  console.log(sentence2);


  // Render images
  const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
  ];

  const container = document.getElementById("container");

  function renderImages() {
    let imgsDOM = "";
    for (let i = 0; i < imgs.length; i++) {
      imgsDOM += `<img class="team-img" src="${imgs[i]}" alt="Employees in the Company">`
    }
    container.innerHTML = imgsDOM;
  }

  renderImages();