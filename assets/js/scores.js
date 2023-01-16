// Pseudo code to store user input and score

const rememberScores = document.querySelector('highscores');
const forgetScores = document.querySelector('clear');
const getName = document.querySelector('#initials');
const submitBtn = document.querySelector('submit');

let timeLeft;

//and user can save their initials and score

localStorage.setItem("userScore", timeLeft);
localStorage.setItem("userName", getName);

// if submit button is pressed

function submitName () {

}
// textfield entry is stored locally


localStorage.setItem("userScore", timeLeft);
localStorage.setItem("userName", getName);

// end score is arranged in declining order from top down