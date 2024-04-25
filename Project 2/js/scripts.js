const animalFacts = {
    lion: 'Lions are the only cats that live in groups, which are called prides.',
    elephant: 'Elephants are the largest land animals on Earth.',
    penguin: 'Penguins are birds, but they cannot fly. They are excellent swimmers.',
    tiger: 'Tigers are the largest cats in the world.',
    giraffe: 'Giraffes have long necks, which can reach up to 6 feet (1.8 meters) in length.'
};

function displayFact(animal) {
    const factSection = document.getElementById('fact');
    factSection.textContent = animalFacts[animal];
}

function addCustomFact() {
    const animalInput = document.getElementById('animal-input').value.trim();
    const factInput = document.getElementById('fact-input').value.trim();

    if (animalInput !== '' && factInput !== '') {
        animalFacts[animalInput.toLowerCase()] = factInput;

        document.getElementById('animal-input').value = '';
        document.getElementById('fact-input').value = '';

        displayFact(animalInput.toLowerCase());
    } else {
        alert('Please enter both an animal and a fact.');
    }
}

function initialize() {
    const animalButtons = document.querySelectorAll('#buttons button');
    animalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const animal = this.id.slice(0, -4);
            displayFact(animal);
        });
    });

    document.getElementById('add-fact-btn').addEventListener('click', addCustomFact);
}

document.addEventListener('DOMContentLoaded', initialize);