
let hasBlackJack = false
let isAlive = true
//let newCard = ""
let message = ""
let firstCard = Math.floor((Math.random() * 11) + 2);
let secondCard = Math.floor((Math.random() * 11) + 2);
let sum = firstCard + secondCard
let cardsel2 = firstCard + ", " + secondCard
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");

function startGame() {
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Chceš kartu mrtko? 🙂"
    } else if (sum === 21) {
        message = "GG EZ! 🥳"
        hasBlackJack = true
    } else {
        message = "U lost nikker! 😭"
        isAlive = false
    }

    cardsEl.textContent = "Cards: " + cardsel2
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message

    //document.getElementById("cards-el").innerText = "Cards: " + cardsel2;
    //document.getElementById("sum-el").innerText = "Sum: " + sum;
    //document.getElementById("message-el").innerText = message;
}

function newCard() {
    let nextCard = Math.floor((Math.random() * 11) + 2);
    sum = sum + nextCard
    document.getElementById("sum-el").innerText = "Sum: " + sum;
    renderGame();
    
}




