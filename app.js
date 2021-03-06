const word = document.querySelector('.word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.querySelector('.end-game');
const headingTwo = document.querySelector('h2');
const colorSwitch = document.getElementById('switch-color-btn');
const rulesBtn = document.getElementById('rules-btn');
const levelsBtn = document.getElementById('levels-btn');
const rulesDiv = document.getElementById('rules');
const closeBtn = document.getElementById('close');
const closeStng = document.getElementById('close-settings');
const settings = document.getElementById('settings');


/* words array */
const words = [
  'tacky', 'hungry', 'drive', 'recruit', 'scene',
  'organize', 'meeting', 'skate', 'receipt', 'brick',
  'paint', 'light', 'waves', 'silver', 'photo',
  'ignore', 'announce', 'modern', 'purpose', 'immerse',
  'observe', 'novel', 'sharp', 'shatter', 'fragile',
  'strike', 'island', 'rainy', 'permit', 'convert',
  'brash', 'thought', 'separate', 'game', 'smiling',
];

let score = 0;
let time = 10;


/* generate random word */
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
};

/* add word back to main div */
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
text.addEventListener('keydown', function () { // first type in input starts timer
  if (runTime === false) { //
    runTime = setInterval(updateTime, 1000);
  }
});

/* update time */
function updateTime() {
  time--; // time goes down by 1 sec
  timeEl.textContent = `Time: ${time}s`;

  if (time === 0) {
    clearInterval(runTime); // time stays at 0
    gameOver();
  }
};

/* game over */
function gameOver() {  // dispaly gameover empty div with score and restart button
  endgameEl.innerHTML = `
  <h1>Time is up!</h1> 
  <p>Your final score is ${score}</p>
  <button onclick=location.reload() >Restart</button>`;
  endgameEl.style.display = 'flex';
};

/* event listeners to the text input */
text.addEventListener('input', function () {
  const textInsert = event.target.value;

  if (textInsert === randomWord) { // when word matches: 
    updateScore(); // score goes up by 1
    event.target.value = null; // clear input
    time += 2; // add more secs to time
    updateTime();

    // highlight correct/incorrect word typed
    word.classList.add('correct'); // add css class green
    setTimeout(addWordBack, 200); // return to regular word color
    word.classList.remove('incorrect'); // add css class red
  } else if (textInsert.length === randomWord.length) {
    word.classList.remove('correct');
    word.classList.add('incorrect');
    setTimeout(addWordBack, 200);
    event.target.value = null;
  }
});

/* Switch background colors button */
let color = ['#74b9ff', '#6c5ce7', '#ff7675', '#ffeaa7',
  '#00b894', '#fd79a8', '#636e72', '#ff0b55',];
let colorI = 0;
colorSwitch.addEventListener('click', function () {
  if (colorI < color.length - 1) {
    colorI++;
  } else {
    colorI = 0;
  }
  document.body.style.background = color[colorI];
  headingTwo.style.color = color[colorI];
});

/* open rules */
rulesBtn.addEventListener('click', function () {
  rulesDiv.style.display = 'flex'; // rules pop up on click of scroll icon
});

/* close rules */
closeBtn.addEventListener('click', function () {
  rulesDiv.style.display = 'none';
});

/* open settings */
levelsBtn.addEventListener('click', function () {
  settings.style.display = 'flex'; // settings pop up on click of cog icon
});

/* close settings */
closeStng.addEventListener('click', function () {
  settings.style.display = 'none';
});

/* Select settings */
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

easy.addEventListener('click', function () {
  time += 5; // add 5 secs to start timer
});

medium.addEventListener('click', function () {
  time += 2; //add 2 secs to start timer
});

hard.addEventListener('click', function () {
  time += 1; // add 1 sec to start timer 
});

/* focus on input text when reload page */
text.focus();