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
let messageEl = document.getElementById("message-el");
let firstCard = Math.floor((Math.random() * 11) + 2);
let secondCard = Math.floor((Math.random() * 11) + 2);
let sum = firstCard + secondCard
let message = ""
let cardsel = document.getElementById("cards-el");
let notifel = document.getElementById("notif-el");

if (sum <= 20) {
    message = "Chceš kartu mrtko? 🙂"
    } else if (sum === 21) {
        message = "GG EZ! 🥳"
        hasBlackJack = true
    } else {
        message = "U lost nikker! 😭"
        isAlive = false
    }

    notifel = message
    cardsel2 = firstCard + ", " + secondCard
    //document.getElementById("cards-el").innerText = "Cards: " + cardsel;
    document.getElementById("sum-el").innerText = "Sum: " + sum;
    //document.getElementById("message-el").innerText = notifel;

//sumel.innerText = "Sum: " + sum
messageEl.innerText = notifel
cardsel.innerText = "Cards: " + cardsel2
}




