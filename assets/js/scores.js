// Pseudo code to store user input and score

const rememberScores = document.querySelector('highscores');
const forgetScores = document.querySelector('clear');
const getName = document.querySelector('initials');
const submitBtn = document.querySelector('submit');

let timeLeft;


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


// Retrieving the score
var highscore = localStorage.getItem("highscores");
console.log(getName);