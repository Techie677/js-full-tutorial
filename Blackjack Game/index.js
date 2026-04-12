let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let cards = [];
let sum = 0;
let message = "";

let hasBlackJack = false;
let isAlive = false;

let player = {
  name: "Phil",
  chips: 157
}

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  }

  return randomNumber;
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (const card of cards) {
    cardsEl.textContent += card + "  ";
  }

  sumEl.textContent = "Sum: " + sum;

  if(sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }

  messageEl.textContent = message;
}

function newCard() {
  if( isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;

    renderGame();
  }
}

