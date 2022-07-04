const startCountdownTimer = (_timeCount, duration) => {
  var exp = Date.now() + duration; //expires in now + duration milliseconds

  //callback using window.requestAnimationFrame if available else setTimeout at 60fps:
  var rAF =
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  //left-pad with leading zeros
  let pad = (n, s = 2) => {
    return `00000${n}`.substr(-s);
  };

  (function update() {
    const n = Date.now();
    const e = exp - n;
    const ms = e % 1000;
    const s = (e / 1000) % 60 >> 0;
    const m = (e / (1000 * 60)) % 60 >> 0;

    if (e > 0) {
      // @ts-ignore
      timeCount.innerHTML = `${pad(m)}:${pad(s)}:${pad(ms, 3)}`;
      rAF(update);
    } else {
      // @ts-ignore
      window.cancelAnimationFrame(rAF);

      // } else {
      //     timeount.innerHTML = "00:00:00:000";

      // }
    }
  })();
};

var now = (function () {
  var perf = window.performance || {};
  // @ts-ignore
  var fn = perf.now || perf.mozNow || perf.webkitNow || perf.msNow || perf.oNow;
  // fn.bind will be available in all the browsers that support the advanced window.performance... ;-)
  return fn
    ? fn.bind(perf)
    : function () {
        return new Date().getTime();
      };
})();

//   counter = setInterval(myTimer, 1000);
//   function myTimer() {

//     startValue--;
//     timeCount.innerHTML = `${startValue}`;
//     if (startValue === 0) {
//       clearInterval(counter);
//       timeCount.innerHTML = `${startValue}`;
//       timeCount.style.color = 'red';
//     }
//     let minutes = Math.floor(startValue / 60);
//     let seconds = startValue % 60;
//     let milliseconds = Math.floor(seconds % 100);
//     console.log(startValue);
//     console.log(minutes);
//     console.log(seconds);
//     console.log(milliseconds);
//     timeCount.appendChild(stopWatchIcon).innerHTML = `${minutes}:${seconds}:${milliseconds}`;
//     timeCount.style.padding = "10px";
//     timeCount.style.fontSize = "20px";
//     if (startValue < 0) {
//       clearInterval(counter);
//       clearInterval(startValue);
//       submitAnswerBtn.style.display = "none";
//       timeCount.innerHTML = "Time's up!";
//       timeBar.style.display = "none";
//     }
//   }

// }

// //// Start Timer Bar
function startTimerBar() {
  counterBarLine = setInterval(() => {
    let widthValue = 0;
    widthValue = (100 * 100) / 100;
    // @ts-ignore
    timeBar.appendChild(timerIcon).textContent = `   ${Math.floor(
      (widthValue * 100) / 100
    )}%`;
    timerIcon.style.lineHeight = "0px";
    timerIcon.style.fontSize = "20px";
    // @ts-ignore
    timeBar.style.width = `${widthValue}%`;
    // @ts-ignore
    timeBar.appendChild(timerIcon);
    if (widthValue === 0) {
      clearInterval(counterBarLine);
      // @ts-ignore
      submitAnswerBtn.style.display = "none";
      // @ts-ignore
      timeCount.innerHTML = "Time's up!";
      // @ts-ignore
      timeCount.appendChild(stopWatchIcon);
      timeInterval = setInterval(() => {
        startTimerBar();
      });
    }
  }, 1000);
}
const timerIcon = document.createElement("span");
timerIcon.classList.add("fas", "fa-fire");

const stopWatchIcon = document.createElement("span");
stopWatchIcon.classList.add("fa", "fa-stopwatch");

var start = true;

function startingQuiz(id) {
  startCountdownTimer();
  startTimerBar();
  // @ts-ignore
  submitAnswerBtn.style.display = "none";

  var result = document.getElementsByClassName("result");
  // @ts-ignore
  result[0].innerText = "";

  const question = document.getElementById("questionId");

  // Setting the question text
  // @ts-ignore
  question.innerText = questionsArray[id].q;

  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // @ts-ignore
  op1.innerHTML = questionsArray[id].answers[0].option;
  // @ts-ignore
  op2.innerHTML = questionsArray[id].answers[1].option;
  // @ts-ignore
  op3.innerHTML = questionsArray[id].answers[2].option;
  // @ts-ignore
  op4.innerHTML = questionsArray[id].answers[3].option;

  // @ts-ignore
  op1.value = questionsArray[id].answers[0].correct;
  // @ts-ignore
  op2.value = questionsArray[id].answers[1].correct;
  // @ts-ignore
  op3.value = questionsArray[id].answers[2].correct;
  // @ts-ignore
  op4.value = questionsArray[id].answers[3].correct;

  // @ts-ignore
  op1.addEventListener("click", () => {
    // @ts-ignore
    op1.style.backgroundColor = "lightgoldenrodyellow";
    // @ts-ignore
    op2.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op3.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op4.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    selected = op1.value;
  });

  // Show selection for op2
  // @ts-ignore
  op2.addEventListener("click", () => {
    // @ts-ignore
    op1.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op2.style.backgroundColor = "lightgoldenrodyellow";
    // @ts-ignore
    op3.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op4.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    selected = op2.value;
  });

  // Show selection for op3
  // @ts-ignore
  op3.addEventListener("click", () => {
    // @ts-ignore
    op1.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op2.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op3.style.backgroundColor = "lightgoldenrodyellow";
    // @ts-ignore
    op4.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    selected = op3.value;
  });

  // Show selection for op4
  // @ts-ignore
  op4.addEventListener("click", () => {
    // @ts-ignore
    op1.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op2.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op3.style.backgroundColor = "lightskyblue";
    // @ts-ignore
    op4.style.backgroundColor = "lightgoldenrodyellow";
    // @ts-ignore
    selected = op4.value;
  });

  const evaluate = document.getElementsByClassName("evaluate");

  evaluate[0].addEventListener("click", () => {
    if (selected === "true") {
      // @ts-ignore
      result[0].innerText = "Correct!";
      // @ts-ignore
      result[0].style.color = "green";
      // @ts-ignore
      result[0].style.fontSize = "20px";
      // @ts-ignore
      result[0].style.fontWeight = "bold";
      // @ts-ignore
      result[0].style.textAlign = "center";
      // @ts-ignore
      result[0].style.margin = "0px";
      // @ts-ignore
      result[0].style.padding = "10px";
      // @ts-ignore
      result[0].style.borderRadius = "10px";
      // @ts-ignore
      result[0].style.backgroundColor = "lightgoldenrodyellow";
    } else {
      // @ts-ignore
      result[0].innerText = "Wrong!";
      // @ts-ignore
      result[0].style.color = "red";
      // @ts-ignore
      result[0].style.fontSize = "20px";
      // @ts-ignore
      result[0].style.fontWeight = "bold";
      // @ts-ignore
      result[0].style.textAlign = "center";
      // @ts-ignore
      result[0].style.margin = "0px";
      // @ts-ignore
      result[0].style.padding = "10px";
      // @ts-ignore
      result[0].style.borderRadius = "10px";
      // @ts-ignore
      result[0].style.backgroundColor = "lightgoldenrodyellow";
    }
  });
}

const introSection = document.querySelector(".introSection");
const quizSection = document.querySelector(".quizSection");
const resultSection = document.querySelector(".resultSection");
const welcomeBtnInfo = document.getElementById("welcomeBtnInfo");
// @ts-ignore
const welcomeBtn = welcomeBtnInfo.querySelector("#welcomeBtn");
const introPromptPanel = document.querySelector(".introPromptPanel");
const quizPromptPanel = document.querySelector(".quizPromptPanel");
const resultPromptPanel = document.querySelector(".resultPromptPanel");
const timerCountdown = document.querySelector(
  ".timerContainer .timerCountdown"
);
const timeBar = document.querySelector("aside .timeBar");
const timeText = document.querySelector(".timerContainer .timeRemaining");
const timeCount = document.querySelector(".timerContainer .timerCountdown");
const optionAsked = document.querySelector(".optionAsked");
const rankValue = document.querySelector(".rankValue");
const rankTime = document.querySelector(".rankTime");
const rankPoints = document.querySelector(".rankPoints");
const rankName = document.querySelector(".rankName");
const continueBtn = document.querySelector(".continueBtn");
const mainMenuBtn = document.querySelector(".mainMenuBtn");

const nextQuestionBtn = document.querySelector("footer .nextQuestionBtn");

const submitAnswerBtn = document.querySelector("footer .submitAnswerBtn");
const questionTotalCount = document.querySelector("footer .questionTotalCount");
const quitMainBtn = document.querySelector("footer .quitMainBtn");
// @ts-ignore
const restartBtn = resultPromptPanel.querySelector(".buttons .restartBtn"); //selecting restart button
// @ts-ignore
const quit_quiz = resultPromptPanel.querySelector(".buttons .mainMenuBtn"); // if quitQuiz button clicked

/// Question Arrays and Variables for quiz questions and answers (starts when user press continue button in intro section) ///
const questionsArray = [
  {
    id: 0,
    q: "Question 1: Commonly used data types DO NOT include:",
    answers: [
      { option: "strings", correct: false },
      { option: "booleans", correct: false },
      { option: "alerts", correct: true },
      { option: "numbers", correct: false },
    ],
  },
  {
    id: 1,
    q: "Question 2: The condition of an if/else statement is enclosed with",
    answers: [
      { option: "quotes", correct: false },
      { option: "curly brackets", correct: true },
      { option: "parentheses", correct: false },
      { option: "square brackets", correct: false },
    ],
  },
  {
    id: 2,
    q: "Question 3: Arrays in JavaScript can be used to store ____.",
    answers: [
      { option: "numbers and strings", correct: false },
      { option: "other arrays", correct: false },
      { option: "booleans", correct: false },
      { option: "all of the above", correct: true },
    ],
  },
  {
    id: 3,
    q: "Question 4: String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { option: "commas", correct: false },
      { option: "curly brackets", correct: false },
      { option: "quotes", correct: true },
      { option: "parentheses", correct: false },
    ],
  },
  {
    id: 4,
    q: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { option: "terminal", correct: false },
      { option: "for loops", correct: false },
      { option: "console.log()", correct: true },
      { option: "JavaScript", correct: false },
    ],
  },
];
let startValue = 75.0;
//// let variables for quiz
let counterBar; //counterBar variable
let counter;
let timeInterval;
let timeBarLine;
let counterBarLine; //counterBarLine variable
let userPoints = 0;
let userScore = 0;

var selected = "";
let questionNumber = 0;

if (start) {
  startingQuiz("0");
}
let id = 0;

// @ts-ignore
welcomeBtn.onclick = () => {
  // @ts-ignore
  introSection.style.display = "block"; //show introSection element
  // @ts-ignore
  welcomeBtn.style.display = "none"; //hide introPromptPanel element
};

// @ts-ignore
mainMenuBtn.onclick = () => {
  // @ts-ignore
  introSection.style.display = "none"; //hide introSection element
  // @ts-ignore
  welcomeBtn.style.display = "block"; //show introPromptPanel element
};

// @ts-ignore
continueBtn.onclick = () => {
  // @ts-ignore
  resultPromptPanel.style.display = "none"; //hide resultPromptPanel element
  // @ts-ignore
  introSection.style.display = "none"; //hide introSection element
  // @ts-ignore
  quizSection.style.display = "block"; //show quizSection element
  // @ts-ignore
  quizPromptPanel.style.display = "block"; //show quizPromptPanel element
};

// @ts-ignore
nextQuestionBtn.onclick = () => {
  if (id < 4) {
    id++;
    startingQuiz(id);
    console.log(id);
  }
  if (id == 4) {
    // @ts-ignore
    submitAnswerBtn.style.display = "block";
  }
};

// @ts-ignore
submitAnswerBtn.onclick = () => {
  clearInterval(counter);
  // @ts-ignore
  resultPromptPanel.style.display = "block"; //show resultPromptPanel element
};

startCountdownTimer(document.getElementById("timer"), 15000);
console.log(questionsArray[0]);

// nextQuestionBtn.onclick = () => {
//     if (questionCount < id.length - 1) { //if question count is less than total question length
//         questionCount++; //increment question count
//         questionNumber++; //increment question number
//         questionTotalCount.innerHTML = `${questionNumber}/${questionsArray.length}`; //display question number and total question length
//         optionSelected.forEach(option => {
//             option.checked = false; //uncheck all options
//         });
//         showQuestionsFunction(questionCount); //calling showQuestionsFunction function
//     } else if (questionCount === questionsArray.length - 1) { //if question count is equal to total question length
//         nextQuestionBtn.style.display = "none";
//         //show submit button for results
//         submitAnswerBtn.style.display = "block";
//     }
// };

// quit_quiz.onclick = () => {
//   window.location.reload(); //reload the current window
// };

// restartBtn.onclick = () => {
//   quizPromptPanel.classList.add("infoQuiz");
//   resultPromptPanel.classList.remove("infoResult");
//   questionCount = 0;
//   questionNumber = 1;
//   userScore = 0;
//   counterBarWidthValue = 0;
//   clearInterval(counterBar); //clear counterBar
//   clearInterval(counterBarLine); //clear counterBarLine
// };

// submitAnswerBtn.onclick = () => {
//   resultSection.style.display = "block"; //show resultSection element
//   // showResult(); //calling showResult function
// };

