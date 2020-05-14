const word = document.querySelector('.word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.querySelector('.end-game');
const headingTwo = document.querySelector('h2');
const colorSwitch = document.querySelector('.switch-color-btn');
const rulesBtn = document.querySelector('.rules-btn');
const rulesDiv = document.getElementById('rules');
const closeBtn = document.getElementById('close');


/* words array */
const words = [
  'tacky',
  'hungry',
  'drive',
  'recruit',
  'scene',
  'organize',
  'massive',
  'skate',
  'receipt',
  'brick',
  'paint',
  'light',
  'waves',
  'silver',
  'photo',
  'ignore',
  'announce',
  'modern',
  'purpose',
  'immerse',
  'observe',
  'novel',
  'sharp',
  'shatter',
  'fragile',
  'strike',
  'island',
  'rainy',
  'permit',
  'convert',
  'brash',
  'thought',
  'separate',
  'game',
  'smiling',
  'meeting'
];

let score = 0;
let time = 10;


/* generate random word */
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
};

/* add word back to main */
let randomWord;

function addWordBack() {
  randomWord = getRandomWord();
  word.textContent = randomWord;
  word.classList.remove('correct', 'incorrect');
};
addWordBack();

/* update score */
function updateScore() {
  score++;
  scoreEl.textContent = `Score: ${score}`;
};

/* start the timer countdown */
let runTime = false;
text.addEventListener('keydown', function () { // keydown in input starts timer
  if (runTime === false) { //
    runTime = setInterval(updateTime, 1000);
  }
});
