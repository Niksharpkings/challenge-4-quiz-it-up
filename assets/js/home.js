const introSection = document.querySelector(".introSection");
const welcomeBtnInfo = document.getElementById("welcomeBtnInfo");
const welcomeBtn = welcomeBtnInfo.querySelector("#welcomeBtn");
const continueBtn = document.querySelector(".continueBtn");
const exitQuizBtn = document.querySelector(".exitQuizBtn");

welcomeBtn.onclick = () => {
  introSection.style.display = "block"; //show introSection element
  welcomeBtn.style.display = "none"; //hide introPromptPanel element
};

exitQuizBtn.onclick = () => {
  introSection.style.display = "none"; //hide introSection element
  welcomeBtn.style.display = "block"; //show introPromptPanel element
}

continueBtn.onclick = () => {
  window.location.assign('./pages/game.html')
}