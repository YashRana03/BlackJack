let player = {
    name: "Yash",
    chips: 200
}
// Variables initialisation
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

// Return a random  number between 1 and 11;
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13) +1
    if (randomNumber > 10) {
        return 10
    } 
    // If a the number 1 is drawn this decides to return 11 or 1 by assessing if the player will go bust or not
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

// Starts a new game 
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

//Renders the game to the screen by displaying the cards sum, and helpful message
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

//Draws a new card and add it to the cards drawn by the player
function newCard() {
    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard()
        renderCards(card);
        sum += card
        cards.push(card)
        
        renderGame()        
    }

}

// Display the physical cards onto the screen
function renderCards(number) {
    let img = document.createElement("img");
    img.src = `./images/spades_${number}.png`;
    img.id = "abc";
    
    img.classList.add("imageFeatures");
    document.body.appendChild(img);
    
}