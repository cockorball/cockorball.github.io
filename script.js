// Define an array of hardcoded truth or dare prompts
const examplePrompts = [
    "Truth: What is your biggest fear?",
    "Dare: Sing a song loudly in public.",
    "Truth: Describe your first crush.",
    "Dare: Do 10 push-ups right now.",
    "Truth: What's the most embarrassing thing you've done?"
];

function updateSliderValue(value) {
    document.getElementById('sliderValue').textContent = value;
}


document.getElementById('startButton').addEventListener('click', function() {
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
    let combinedPrompts = extraPrompts.concat(examplePrompts);

    // Create Drinks array
    let Drinks = Array.from({ length: maxDrinks }, (_, i) => i + 1);

    // Store the values and navigate to the gameplay page
    sessionStorage.setItem('playerNames', JSON.stringify(playerNames));
    sessionStorage.setItem('Drinks', JSON.stringify(Drinks));
    sessionStorage.setItem('combinedPrompts', JSON.stringify(combinedPrompts)); // Storing combined prompts
    window.location.href = 'gameplay.html';
});
