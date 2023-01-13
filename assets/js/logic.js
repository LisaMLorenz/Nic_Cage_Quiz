// Add countdown function

var timeEl = document.getElementById('time');

function time() {
    var timeLeft = 30; // set time to start from
    var timeInterval = setInterval(function () {
        timeLeft--; // 
        timeEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timeEl.textContent = "TIME OUT!";
            //displayMessage();
            setTimeout(displayMessage);
        }
    }, 1000);
}

time();