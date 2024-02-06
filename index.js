//let firstCard = ""
//let secondCard = ""
//let sum = ""
let hasBlackJack = false
let isAlive = true
//let message = ""
//let gameStart = document.getElementById("button");
//let cardsel = document.getElementById("cards-el");
//let sumel = document.getElementById("sum-el");
//let sumel = document.querySelector("#sum-el");
//let notifel = document.getElementById("notif-el");
//let messageEl = document.getElementById("message-el");
let newCard = ""

function gameStarter() {
//let gameStart = document.getElementById("button");
//const messageEl = document.getElementById("message-el");
const firstCard = Math.floor((Math.random() * 11) + 2);
const secondCard = Math.floor((Math.random() * 11) + 2);
const sum = firstCard + secondCard
//let message = ""
const cardsel = document.getElementById("cards-el");
let message = ""

if (sum <= 20) {
    message = "Chceš kartu mrtko? 🙂"
    } else if (sum === 21) {
        message = "GG EZ! 🥳"
        hasBlackJack = true
    } else {
        message = "U lost nikker! 😭"
        isAlive = false
    }

    //notifel = message
    let cardsel2 = firstCard + ", " + secondCard
    document.getElementById("cards-el").innerText = "Cards: " + cardsel2;
    document.getElementById("sum-el").innerText = "Sum: " + sum;
    document.getElementById("message-el").innerText = message;

//sumel.innerText = "Sum: " + sum
//messageEl.innerText = message
//cardsel.innerText = "Cards: " + cardsel2
}




