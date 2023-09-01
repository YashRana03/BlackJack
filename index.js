let player = {
    name: "Yash",
    chips: 200
}
let link1 = "./images/spades_1.png";
let link2 = "./images/spades_2.png";
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13) +1
    if (randomNumber > 10) {
        return 10
    } 
    else if (randomNumber == 1) {
        if((sum + 11) < 21) {
            
            return 11;
        }
        else {
            return 1;
        }
            
    } 
    else {
        return randomNumber
    }
}

function startGame() {
     let ele = document.querySelectorAll("#abc");
     if(ele != null) {
         for(let el of ele) {

            if(el != null) {
                el.remove();
            }
            
         }
     }
    sum = 0;
    isAlive = true
    hasBlackJack = false;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    renderCards(firstCard);
    renderCards(secondCard);
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {

        


        let card = getRandomCard()
        renderCards(card);
        sum += card
        cards.push(card)
        renderGame()        
    }

}

function renderCards(number) {
    let img = document.createElement("img");
    img.src = `./images/spades_${number}.png`;
    img.id = "abc";
    
    img.classList.add("imageFeatures");
    document.body.appendChild(img);
}