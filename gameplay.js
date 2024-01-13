let currentCardIndex = 0;
const playerNames = JSON.parse(sessionStorage.getItem('playerNames')) || [];
const combinedPrompts = JSON.parse(sessionStorage.getItem('combinedPrompts')) || [];
const Drinks = JSON.parse(sessionStorage.getItem('Drinks')) || [1];

// Function to get a random drink amount
function getRandomDrinkAmount() {
    return Drinks[Math.floor(Math.random() * Drinks.length)];
}

// Function to get a random player name
function getRandomPlayerName() {
    return playerNames[Math.floor(Math.random() * playerNames.length)];
}

// Combine player names with combined prompts to create a deck
let deck = combinedPrompts.map(prompt => {
    return playerNames.map(name => `${getRandomPlayerName()}: ${prompt} OR Drink ${getRandomDrinkAmount()}`);
}).flat();

// Shuffle the deck
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(deck);

// Function to draw the next card or redirect to home page
function drawNextCard() {
    if (currentCardIndex < deck.length) {
        document.getElementById('cardContent').textContent = deck[currentCardIndex];
        currentCardIndex++;
    } else {
        // Check if the button is already clicked once after deck is finished
        if (document.getElementById('cardContent').textContent === "No more cards! Press draw next card to return to the Home page") {
            // Redirect to home page
            window.location.href = 'index.html';
        } else {
            // Display the message and let user click again to redirect
            document.getElementById('cardContent').textContent = "No more cards! Press draw next card to return to the Home page";
        }
    }
}

document.getElementById('nextCardButton').addEventListener('click', drawNextCard);
