const RANK_LIST = document.getElementById("rankList");
const topFive = JSON.parse(localStorage.getItem("topFive")) || [];

RANK_LIST.innerHTML = topFive
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
