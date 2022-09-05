const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalPoints = document.getElementById('finalPoints');
const mostRecentPoints = localStorage.getItem('mostRecentPoints');

const topFive = JSON.parse(localStorage.getItem('topFive')) || [];

const MAX_HIGH_SCORES = 5;

finalPoints.innerText = mostRecentPoints;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

function saveHighScore(e) {
    e.preventDefault();

    const score = {
        score: mostRecentPoints,
        name: username.value,
    };
    topFive.push(score);
    topFive.sort((a, b) => b.score - a.score);
    topFive.splice(5);

    localStorage.setItem('topFive', JSON.stringify(topFive));
    window.location.assign('./topFive.html');
}
