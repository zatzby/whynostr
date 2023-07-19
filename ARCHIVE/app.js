const words = [
    'decentralized',
    'free',
    'weird',
    'different',
    'connective',
    'equalizing',
    'community',
    'global',
    'borderless',
    'infinite',
    'peer-to-peer',
    'encrypted',
    'secure',
    'fun',
    'engaging',
    'algorithm-free',
    'us',
    'pura vida',
    'ours',
    'growing',
    'evolving',
    'liberating'
];

const badge = document.querySelector('.badge');
const menu = document.querySelector('.menu');

// Toggle menu on badge click
badge.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Hide menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (event.target.closest('.badge') === null && event.target.closest('.menu') === null) {
        menu.classList.remove('show');
    }
});

const randomizedWords = shuffleArray(words);
let currentIndex = 0;
document.querySelector('.text-container').textContent = randomizedWords[currentIndex];

setInterval(() => {
    currentIndex = (currentIndex + 1) % randomizedWords.length;
    document.querySelector('.text-container').textContent = randomizedWords[currentIndex];
}, 1111);

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
