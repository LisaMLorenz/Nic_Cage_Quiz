// Pseudo code to store user input and score

const rememberScores = document.querySelector('highscores');
const forgetScores = document.querySelector('clear');
const getName = document.querySelector('initials');
const submitBtn = document.querySelector('submit');

let timeLeft;

submitBtn.addEventListener("click", getInitials) // if submit button is pressed

function getInitials() {
    getName = inputAnswer.getName; //and user can save their initials and score
    localStorage.setItem("userName", getName); // textfield entry is stored locally
    localStoreage.getItem("userName");
}

function clearScores() {
    onclick.forgetScores = localStorage.clear();
}

function ClearField() {
    onclick.submitBtn
        getName = "";
}

// Saving the score
localStorage.setItem("highscore", timeLeft);

// Retrieving the score
var highscore = localStorage.getItem("highscores");
console.log(highscore);