const clearScores = document.getElementById('clear');
const highscores = document.getElementById('highscores');
let newUserInitials = JSON.parse(localStorage.getItem("initials"));
let newUserScore = JSON.parse(localStorage.getItem("score"));
let newUserRanking = newUserInitials + newUserScore;

console.log(newUserRanking);

function createHighscore() {

    newUserRanking = document.createElement('li');
    newUserRanking.appendChild(document.createTextNode(newUserRanking));

    document.querySelector('ol').appendChild(newUserRanking);

// I think I should have stringified the values somehow to get rid of the [object HTMLLIElement]

}

createHighscore();

function clearScore() {
    clearScores.addEventListener('click', () => {
        newUserRanking.innerHTML = "";
    })
}