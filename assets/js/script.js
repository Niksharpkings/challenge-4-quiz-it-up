


function startCountdownTimer(_timeCount,duration){
  const exp = Date.now() + duration;//expires in now + duration milliseconds
  
  //callback using window.requestAnimationFrame if available else setTimeout at 60fps:
  const rAF = window.requestAnimationFrame || ((callback) => { window.setTimeout(callback, 1000 / 60); });
  
  //left-pad with leading zeros
  function pad(n, s = 2) {
    return ('0'.repeat(s) + n).slice(-s);
  }
  
  //The loopy bit:
  (function tick() {
    const remaining = Math.max((exp - Date.now()) / 1000, 0);
    const remainingMinutes = Math.floor(remaining / 60);
    const remainingSeconds = Math.floor(remaining % 60);
    const remainingMilliseconds = Math.floor((remaining % 1) * 1000);
    timeCount.textContent = `${pad(remainingMinutes)}:${pad(remainingSeconds)}:${pad(remainingMilliseconds, 3)}`;
    if (remaining <= 0) {
      //stop the timer:
      window.cancelAnimationFrame(tick);
      timeCount.textContent = "Time's up!";
      timeCount.appendChild(stopWatchIcon);
      submitAnswerBtn.style.display = "block";
      return;
    }
    if (remaining > 0) {
      rAF(tick);
    }   
  })();
}

  // (function update() {
  //   var n = Date.now(), 
  //     e = (exp - n),
  //     ms = (e % 1000),
  //     s = ((e / 1000) % 60) >> 0,
  //     m = ((e / (1000 * 60)) % 60) >> 0
  //   if (e > 0) {
  //     timeCount.innerHTML = pad(m) + ":" + pad(s) + ":" + pad(ms, 3);
  //     rAF(update);
  //     // } else {
  //     //     timeount.innerHTML = "00:00:00:000";
      
  //     // }
  //   }
  // })();






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
    widthValue = ((startValue * 100) / 100); 
    timeBar.appendChild(timerIcon).textContent = `   ${Math.floor(((widthValue * 100) / 100) )}%`;
    timerIcon.style.lineHeight = "0px";
    timerIcon.style.fontSize = "20px";
    timeBar.style.width = `${widthValue}%`;
    timeBar.appendChild(timerIcon);
    if (widthValue === 0) {
      clearInterval(counterBarLine);
      submitAnswerBtn.style.display = "none";
      timeCount.innerHTML = "Time's up!";
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
  submitAnswerBtn.style.display = "none";


  var result = document.getElementsByClassName("result");
  result[0].innerText = ""
  
  const question = document.getElementById("questionId");

  // Setting the question text
  question.innerText = questionsArray[id].q;

  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');

  op1.innerHTML = questionsArray[id].answers[0].option;
  op2.innerHTML = questionsArray[id].answers[1].option;
  op3.innerHTML = questionsArray[id].answers[2].option;
  op4.innerHTML = questionsArray[id].answers[3].option;

  op1.value = questionsArray[id].answers[0].correct;
  op2.value = questionsArray[id].answers[1].correct;
  op3.value = questionsArray[id].answers[2].correct;
  op4.value = questionsArray[id].answers[3].correct;

 

  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  })

    // Show selection for op2
    op2.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightgoldenrodyellow";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightskyblue";
      selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightgoldenrodyellow";
      op4.style.backgroundColor = "lightskyblue";
      selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightgoldenrodyellow";
      selected = op4.value;
    })
  
    const evaluate = document.getElementsByClassName("evaluate");

  evaluate[0].addEventListener("click", () => {
    if (selected === "true") {
      result[0].innerText = "Correct!";
      result[0].style.color = "green";
      result[0].style.fontSize = "20px";
      result[0].style.fontWeight = "bold";
      result[0].style.textAlign = "center";
      result[0].style.margin = "0px";
      result[0].style.padding = "10px";
      result[0].style.borderRadius = "10px";
      result[0].style.backgroundColor = "lightgoldenrodyellow";
    } else {
      result[0].innerText = "Wrong!";
      result[0].style.color = "red";
      result[0].style.fontSize = "20px";
      result[0].style.fontWeight = "bold";
      result[0].style.textAlign = "center";
      result[0].style.margin = "0px";
      result[0].style.padding = "10px";
      result[0].style.borderRadius = "10px";
      result[0].style.backgroundColor = "lightgoldenrodyellow";
    }
  })
  }


const introSection = document.querySelector(".introSection");
const quizSection = document.querySelector(".quizSection");
const resultSection = document.querySelector(".resultSection");
const welcomeBtnInfo = document.getElementById('welcomeBtnInfo');
const welcomeBtn = welcomeBtnInfo.querySelector("#welcomeBtn");
const introPromptPanel = document.querySelector(".introPromptPanel");
const quizPromptPanel = document.querySelector(".quizPromptPanel");
const resultPromptPanel = document.querySelector(".resultPromptPanel");
const timerCountdown = document.querySelector(".timerContainer .timerCountdown");
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
const restartBtn = resultPromptPanel.querySelector(".buttons .restartBtn"); //selecting restart button
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
      { option: "numbers", correct: false }
    ]
  },
  {
    id: 1,
    q: "Question 2: The condition of an if/else statement is enclosed with",
    answers: [
      { option: "quotes", correct: false },
      { option: "curly brackets", correct: true },
      { option: "parentheses", correct: false },
      { option: "square brackets", correct: false }
    ]
  },
  {
    id: 2,
    q: "Question 3: Arrays in JavaScript can be used to store ____.",
    answers: [
      { option: "numbers and strings", correct: false },
      { option: "other arrays", correct: false },
      { option: "booleans", correct: false },
      { option: "all of the above", correct: true }
    ]
  },
  {
    id: 3,
    q: "Question 4: String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { option: "commas", correct: false },
      { option: "curly brackets", correct: false },
      { option: "quotes", correct: true },
      { option: "parentheses", correct: false }
    ]
  },
  {
    id: 4,
    q: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { option: "terminal", correct: false },
      { option: "for loops", correct: false },
      { option: "console.log()", correct: true },
      { option: "JavaScript", correct: false }
    ]
  }
];
let startValue = 75.00;
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

welcomeBtn.onclick = () => {
  introSection.style.display = "block"; //show introSection element
  welcomeBtn.style.display = "none"; //hide introPromptPanel element
};

mainMenuBtn.onclick = () => {
  introSection.style.display = "none"; //hide introSection element
  welcomeBtn.style.display = "block"; //show introPromptPanel element
};

continueBtn.onclick = () => {
  resultPromptPanel.style.display = "none"; //hide resultPromptPanel element
  introSection.style.display = "none"; //hide introSection element
  quizSection.style.display = "block"; //show quizSection element
  quizPromptPanel.style.display = "block"; //show quizPromptPanel element
};

nextQuestionBtn.onclick = () => {
  if (id < 4) {
    id++;
    startingQuiz(id);
    console.log(id);
  }
  if (id == 4) {
    submitAnswerBtn.style.display = "block";
  }
};

submitAnswerBtn.onclick = () => { 
  clearInterval(counter);
  resultPromptPanel.style.display = "block"; //show resultPromptPanel element
};





startCountdownTimer(document.getElementById('timer'),75000);


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