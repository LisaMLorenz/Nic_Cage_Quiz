var timeEl = document.getElementById('time');
var startButton = document.getElementById('start-button'); //calls the start button ID
var startScreen = document.getElementById('start-screen');
var choicesElement = document.getElementById('choices');
var questions = document.getElementById('questions');
let questionTitleElement = document.querySelector("#question-title");
var endScreenElement = document.getElementById('end-screen');

let finalScore = document.getElementById('final-score');

var nextButton;
var timeInterval;


let shuffledQuestions, currentQuestionIndex, timeLeft = 30

startButton.addEventListener('click', startGame) //by click on the start button a timer starts

function initGame() {
    timeEl.textContent = timeLeft; //show start time before start button is pressed
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

// Add countdown function

function time() { //start timer only when start button is clicked
    timeInterval = setInterval(function () {
        timeLeft--; // counts down
        timeEl.textContent = timeLeft;
        document.getElementById("final-score").innerHTML = timeLeft;
        localStorage.setItem("initials", timeLeft);
        if (timeLeft <= 0) {
            timeLeft = 0;
            timeEl.textContent = "Oh no! TIME OUT!";
            endGame();
        }
    }, 1000); // 1000 milliseconds = 1 second -> interval counts down per second
}

function setNextQuestion() { // if all divs have been shown 
    if (currentQuestionIndex == shuffledQuestions.length) {
        endGame(); // run endGame function
        return; // end function
    }

    // create a loop so that when a user presses a button the next div displays

    showQuestion(shuffledQuestions[currentQuestionIndex]); // mix up order of questions randomly
    currentQuestionIndex = currentQuestionIndex + 1; //increment by one
    
}

// and I am presented with a question

function showQuestion(question) {
    console.log("---> frage: " + currentQuestionIndex, question)
    // set the title
    questionTitleElement.textContent = question.question;
    // clear the choices!
    choices.innerHTML = ""; //start with clear HTML

    question.choices.forEach(choice => { // create button from choices array in quizQuestions
        const button = document.createElement('button');
        button.innerText = choice.text; // display just the text part of array element
        button.classList.add("choices");
        button.addEventListener('click', () => { //when button is clicked a function is run that check if it's value is true or false
            selectAnswer(choice.true);
        })
        choicesElement.appendChild(button); // buttons are added below one another
    })
}

function endGame() {

    clearInterval(timeInterval); // stops time when all questions are completed
    // show end screen div:
    document.getElementById("end-screen").classList.remove("hide"); // show score screen div
    // hide questions div:
    questions.classList.add("hide");
    // questionsTitleElement.classList.add("hide");
    
}

function selectAnswer(isCorrectAnswer) {
    // when wrong, zonk!
    if (!isCorrectAnswer) {
        timeLeft = timeLeft - 10; // 10 seconds deducted from time left count
    }
    setNextQuestion() //function called
}

// Pseudo code to store user input and score
// all questions are answered
// the game is over

//and user can save their initials and score

// if submit button is pressed
// textfield entry is stored locally


localStorage.setItem("initials", timeLeft);


// local info is displayed in end score

// end score is arranged in declining order from top down






