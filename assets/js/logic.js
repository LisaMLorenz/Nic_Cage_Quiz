// Add countdown function

var timeEl = document.getElementById('time');
var start = document.getElementById('start'); //calls the start button ID
var startScreen = document.getElementById('start-screen');
var questions = document.getElementById('questions');

start.onclick = function time() { //start timer only when start button is clicked
    start.disabled = true;

    document.getElementById("start-screen").style.display = "none"; // when start button is pressed the start screen disappears
    document.getElementById("questions").style.display = "block"; // and the first round of quiz questions appears

    var timeLeft = 31; // set time to 31 to actually start from 30
    var timeInterval = setInterval(function () {
        timeLeft--; // counts down
        timeEl.textContent = timeLeft;
        if (timeLeft === 0) { // IF timeLeft === 0 
            clearInterval(timeInterval);
            timeEl.textContent = "TIME OUT!";
            document.getElementById("end-screen").style.display = "block";
            
        }
    }, 1000); // 1000 milliseconds = 1 second -> interval counts down per second
}









