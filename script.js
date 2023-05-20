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

let currentIndex = 0;
const textContainer = document.querySelector('.text-container');

function updateText() {
  textContainer.textContent = words[currentIndex];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(words);
updateText();

setInterval(() => {
  currentIndex = (currentIndex + 1) % words.length;
  updateText();
}, 2100);
