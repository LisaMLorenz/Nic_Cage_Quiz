// Add countdown function
//by click on the start button a timer starts

var timeEl = document.getElementById('time');
var startButton = document.getElementById('start-button'); //calls the start button ID
var startScreen = document.getElementById('start-screen');
var choicesElement = document.getElementById('choices');
var questions = document.getElementById('questions');
let questionTitleElement = document.querySelector("#question-title");
var endScreenElement = document.getElementById('end-screen');
var nextButton;
var timeInterval;

let shuffledQuestions, currentQuestionIndex, timeLeft = 30

startButton.addEventListener('click', startGame)

function initGame() {
    timeEl.textContent = timeLeft;
}

initGame()

function startGame() {
    document.getElementById("start-screen").style.display = "none"; // when start button is pressed the start screen disappears
    questions.classList.remove('hide') // and the first round of quiz questions appears
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    time()
}

function time() { //start timer only when start button is clicked
    timeInterval = setInterval(function () {
        timeLeft--; // counts down
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeLeft = 0;
            timeEl.textContent = "Oh no! TIME OUT!";
            endGame();
        }
    }, 1000); // 1000 milliseconds = 1 second -> interval counts down per second
}

function setNextQuestion() {
    if (currentQuestionIndex == shuffledQuestions.length) { // mix up order of questions randomly
        endGame();
        return;
    }
    
// create a loop so that when a user presses a button the next div displays

    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex = currentQuestionIndex + 1;
}

// and I am presented with a question

function showQuestion(question) {
    console.log("---> frage: " + currentQuestionIndex, question)
    // set the title
    questionTitleElement.textContent = question.question;
    // clear the choices!
    choices.innerHTML = "";
    
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add("choices");
        button.addEventListener('click', () => {
            selectAnswer(choice.true);
        })
        choicesElement.appendChild(button);
    })
}

function endGame () {

    clearInterval(timeInterval); // stops time when all questions are completed
    // show end screen div:
    document.getElementById("end-screen").classList.remove("hide");
    // hide questions div:
    questions.classList.add("hide");
    // questionsTitleElement.classList.add("hide");
}


function selectAnswer(isCorrectAnswer) {
    // when wrong, zonk!
    if (!isCorrectAnswer) {
        timeLeft = timeLeft - 10;
    }
    setNextQuestion()
}







// Generate Quiz Structure



// if all divs have been shown 
// show score screen div

// Pseudo code to store user input and score
// all questions are answered
//or the timer reaches 0
//the game is over
//and user can save their initials and score

// if submit button is pressed
// textfield entry is stored locally
var value = "timeleft"
localStorage.setItem("initials", value);
var test = localStorage.getItem("initials");

// local info is displayed in end score

// end score is arranged in declining order from top down






