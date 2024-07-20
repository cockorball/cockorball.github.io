// generic prompts are prompts that should be in effect 100% of the time no alternative
// e.g. "Steve you are the question master"
const genericPrompts = [
    "Left Hands Only! For 10 Minutes\n\n\nBreak the rule take 2 Swigs. If your left handed use your right",
    "Left Hands Only! For 10 Minutes\n\n\nBreak the rule take 2 Swigs. If your left handed use your right",
    "EVERYBODY!!! Left Hands Only! For 10 Minutes\n\n\nBreak the rule take 2 Swigs. If your left handed use your right",
    "Start a Waterfall.\n\n\nBottoms Up!",
    "Start a Waterfall.\n\n\nBottoms Up!",
    "You are the Thumb Master",
    "You are the Thumb Master",
    "Make a rule",
    "Give out 1 Swig",
    "Give out 2 Swigs",
    "Give out 3 Swigs",
    "Make a rule",
    "Name a type of Cheese, the group must decide wether its real or fake if you fool them you can make them drink however much you want",
    "Make a rule",
    "Kings Cup! Pour a bit of your drink into a communal cup. The Sixth Time you see this card DRINK!",
    "Kings Cup! Pour a bit of your drink into a communal cup. The Sixth Time you see this card DRINK!",
    "Kings Cup! Pour a bit of your drink into a communal cup. The Sixth Time you see this card DRINK!",
    "Kings Cup! Pour a bit of your drink into a communal cup. The Sixth Time you see this card DRINK!",
    "Kings Cup! Pour a bit of your drink into a communal cup. The Sixth Time you see this card DRINK!",
    "Kings Cup! Pour a bit of your drink into a communal cup. The Sixth Time you see this card DRINK!",
    "Bearded Players Drink",
    "Down your Drink, Pick someone to join you",
    "Category !!! Pick a category other people must say a word within that category",
    "Pick someone to do a shot",
    "Pick someone to drink whenever you drink\n\nand\n\ntake 2 Swigs",
    "Pick someone to drink whenever you drink\n\nand\n\ntake 3 Swigs",
    "Pick someone to drink whenever you drink\n\nand\n\ntake 3 Swigs",
    "Arms to the sky HEAVEN!",
    "You are the Question Master",
    "The Floor is lava, last person touching it drinks the amount",
    "The Floor is lava, last person touching it drinks the amount",
    "Boys Drink!",
    "Player opposite takes two swigs of your drink!",
    "Beer Drinkers Drink!",
    "Wine Drinkers Drink!",
    "Shots!!! Pick 2 Friends to join you for a shot.",
    "Girls Drink!",
    "Everyone Drink!",
    "SILENCE! You cant talk 5 minutes",
];
// altPrompts are promts that have the alternative option of the random amount of drinks
// e.g "Steve: Do 10 push-ups OR Take 3 Swigs"
const altPrompts = [
    "Do a Handstand",
    "Do a Cartwheel",
    "Do a Headstand",
    "Do a Flip",
    "Do something impressive",
    "Do something impressive",
    "Takedown Scriv",
    "Do a lap of the mansion",
    "Run to the top floor and back in 15 seconds. RUN!",
    "Make a beer pong trickshot you have 3 tries",
    "Make a beer pong trickshot you have 3 tries",
    "Throw a snack in the air and catch it in your mouth",
    "Make a pool trickshot designed by Eggy",
    "Make a pool trickshot designed by Eggy",
    "Share your most embarrasing moment",
    "Do your best animal impression",
    "Say a Joke, if its not funny drink anyway",
    "Say a Joke, if its not funny drink anyway",
    "Go climb a tree...",
    "BOOM! Shotgun a beer",
    "Swap an item of clothing with the person three to your left :)",
    "Swap outfits with the person three to your right :)",
    "Do 10 push-ups",
    "Do 20 push-ups",
    "Say something secret only a few people know",
    "Do an impression of someone playing the game",
    "Do an impression of someone playing the game",
    "Name 3 Countries starting with A",
    "Name 3 Countries starting with F",
    "Name one Animal which name starts with Q",
    "Do a shot",
    "Do a shot",
    "Show everyone a secret talent",
];
// vsPrompts are prompts that make two people compete the loser drinks a random amount
// e.g. "Steve VS Mike: Staring contest loser takes x Swigs"
const vsPrompts = [
    "21 against eachother",
    "Place your bets on roulette, Closest number wins. If you get it bang on double up the swigs",
    "Place your bets on roulette, Closest number wins. If you get it bang on double up the swigs",
    "Start a game of Beer Pong. You each have 3 Cups",
    "Both of you make a beer pong trickshot you have 3 tries, if you both make it both drink",
    "Start a game of Beer Pong. You each have 3 Cups",
    "Go get shampoo from your room, Quickest Wins!",
    "Tag!!! the first player must tag the second player! You have 20 Seconds GO",
    "Arm Wrestle",
    "Best Seal impression",
    "Keepyups!",
    "Spin the Wheel! Lowest number loses",
    "Spin the Wheel! Lowest number loses",
    "Spin the Wheel! Lowest number loses",
    "Staring contest",
    "Quickest Outside Wins!",
    "Race!",
    "Quickest to down your drink",
    "Rock-paper-scissors",
    "Rock-paper-scissors",
    "Make your best bird call",
    "Play a game of Flip Cup!!!",
    "Play a game of Flip Cup!!!",
    "Impressions!!! \n Do an impression of someone here most accurate wins."
];

let currentCardIndex = 0;
let playerNames = [];
let combinedPrompts = [];
let Drinks = [1];

function initGame() {
    playerNames = JSON.parse(sessionStorage.getItem('playerNames')) || [];
    combinedPrompts = JSON.parse(sessionStorage.getItem('combinedPrompts')) || altPrompts;
    Drinks = JSON.parse(sessionStorage.getItem('Drinks')) || [1];
    
    createDeck();
    shuffle(deck);
}

function getRandomDrinkAmount() {
    return Drinks[Math.floor(Math.random() * Drinks.length)];
}

function getRandomPlayerName() {
    return playerNames[Math.floor(Math.random() * playerNames.length)];
}

function getRandomGenericPrompt() {
    return genericPrompts[Math.floor(Math.random() * genericPrompts.length)];
}

function getRandomVsPrompt() {
    return vsPrompts[Math.floor(Math.random() * vsPrompts.length)];
}

function createStandardCard() {
    const name = getRandomPlayerName();
    const prompt = combinedPrompts[Math.floor(Math.random() * combinedPrompts.length)];
    return `${name}: ${prompt}\n\nOr\n\nTake ${getRandomDrinkAmount()} Swigs`;
}

function createGenericCard() {
    const name = getRandomPlayerName();
    const prompt = getRandomGenericPrompt();
    return `${name}: ${prompt}`;
}

function createVsCard() {
    const name1 = getRandomPlayerName();
    let name2;
    do {
        name2 = getRandomPlayerName();
    } while (name2 === name1);
    const prompt = getRandomVsPrompt();
    return `${name1}\n\nVS\n\n${name2}: ${prompt}\n\nLoser\n\nTakes ${getRandomDrinkAmount()} Swigs!`;
}

function createCard() {
    const cardType = Math.floor(Math.random() * 3); // 0, 1, or 2
    switch (cardType) {
        case 0:
            return createStandardCard();
        case 1:
            return createGenericCard();
        case 2:
            return createVsCard();
    }
}

let deck = [];

function createDeck() {
    deck = Array(combinedPrompts.length * 2).fill().map(createCard);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawNextCard() {
    if (Math.floor(Math.random() * 140) === 0) {
        document.getElementById('cardContent').innerHTML = "<span style='font-size:xx-large ;'>Cock Or Ball !!!!!! <br><br><br><br><br><br></span><span style='font-size: small;'>if your a girl just pick someone</span>";
    } else {
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
    flipCard();
}

function flipCard() {
    var card = document.querySelector('.card');
    card.classList.add('is-flipped');

    setTimeout(function() {
        card.classList.remove('is-flipped');
    }, 800);
}

function updateSliderValue(value) {
    document.getElementById('sliderValue').textContent = value;
}

function startGame() {
    let playerNames = document.getElementById('playerNames').value.split(',').map(name => name.trim()).filter(Boolean);
    let extraPrompts = document.getElementById('extraPrompts').value.split(',').map(prompt => prompt.trim()).filter(Boolean);
    let maxDrinks = parseInt(document.getElementById('maxDrinks').value);

    // Validation
    if (playerNames.length === 0) {
        alert('Please enter at least one player name.');
        return;
    }
    if (isNaN(maxDrinks) || maxDrinks < 1 || maxDrinks > 6) {
        alert('Please choose a valid max number of drinks.');
        return;
    }

    // Combine extra prompts with example prompts
    let combinedPrompts = extraPrompts.concat(altPrompts);

    // Create Drinks array
    let Drinks = Array.from({ length: maxDrinks }, (_, i) => i + 1);

    // Store the values and navigate to the gameplay page
    sessionStorage.setItem('playerNames', JSON.stringify(playerNames));
    sessionStorage.setItem('Drinks', JSON.stringify(Drinks));
    sessionStorage.setItem('combinedPrompts', JSON.stringify(combinedPrompts));
    window.location.href = 'gameplay.html';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('startButton')) {
        document.getElementById('startButton').addEventListener('click', startGame);
    }
    if (document.getElementById('nextCardButton')) {
        document.getElementById('nextCardButton').addEventListener('click', drawNextCard);
        initGame();
    }
});