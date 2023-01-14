// Add countdown function

var timeEl = document.getElementById('time');
var start = document.getElementById('start'); //calls the start button ID
var startScreen = document.getElementById('start-screen');
var questions = document.getElementById('questions');

start.onclick = function time() { //start timer only when start button is clicked
    start.disabled = true;

    var timeLeft = 31; // set time to 31 to actually start from 30
    var timeInterval = setInterval(function () {
        timeLeft--; // counts down
        timeEl.textContent = timeLeft;
        if (timeLeft === 0) { // IF timeLeft === 0 
            clearInterval(timeInterval);
            timeEl.textContent = "TIME OUT!";
            document.getElementById("startScreen").classList = "hide"; //change div id="start-screen" from start to hide
            document.getElementById("questions").classList = "start"; //and display the questions div

        }
    }, 1000);
}



