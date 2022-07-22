const QUESTION = document.getElementById('questionId');
//console.log(QUESTION);


// function arrayFromArgs() {
//   const results = [];
//   for (let i = 0; i < arguments.length; i++) {
//       results.push(arguments[i]);
//   }
//   return results;
// }
// const SELECTIONS  = arrayFromArgs(document.getElementsByClassName('selection-text'));

//refactored to use ES6 destructuring
const SELECTIONS = Array.from(document.getElementsByClassName('selection-text'));

const PROGRESS_TEXT = document.getElementById('progressText');
const POINTS_TEXT = document.getElementById('points');
const PROGRESS_BAR_FULL = document.getElementById('progressBarFull');
const game = document.getElementById('game');


let currentQuestion = {}; //object to hold current question
//console.log(currentQuestion);
let acceptingAnswers = true; //boolean to prevent user from answering multiple times before next question
//console.log(acceptingAnswers);
// @ts-ignore
let points = 0; //points variable to keep track of user's points and display on page. starts at 0.
//console.log(points);
// @ts-ignore
let questionCounter = 0; //variable to keep track of current question number. starts at 0. what question your on.
//console.log(questionCounter);
let availableQuestions = []; //empty array to hold all questions. copy of full questions array set and to randomize the questions.
//console.log(availableQuestions);

const questions = [
  {
    question: "Question: Commonly used data types DO NOT include:",
    selection1: "strings",
    selection2: "booleans",
    selection3: "alerts",
    selection4: "numbers",
    answer: 3
  },
  {
    question: "Question: The condition of an if/else statement is enclosed with",
    selection1: "quotes",
    selection2: "curly brackets",
    selection3: "parentheses",
    selection4: "square brackets",
    answer: 2
  },
  {
    question: "Question: Arrays in JavaScript can be used to store ____.",
    selection1: "numbers and strings",
    selection2: "other arrays",
    selection3: "booleans",
    selection4: "all of the above",
    answer: 4
  },
  {
    question: "Question: String values must be enclosed within ____ when being assigned to variables.",
    selection1: "commas",
    selection2: "curly brackets",
    selection3: "quotes",
    selection4: "parentheses",
    answer: 3
  },
  {
    question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    selection1: "JavaScript",
    selection2: "terminal/bash",
    selection3: "for loops",
    selection4: "console.log",
    answer: 4
  },
];
//console.log('questions', questions);

/*-----------------------------------------------------*/

const CORRECT_BONUS = 25; //variable to hold the amount of points added to the points for correct answers.
const MAX_QUESTIONS = 5; //variable to hold the maximum number of questions before they finish the quiz.

/*
spread operator (...) is used to copy an array.
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
//console.log(combined);
Code language: JavaScript (javascript)
Output:

[ 2, 4, 6, 1, 3, 5 ]
*/

const startGame = () => {
  questionCounter = 0; //reset question counter to 0.
  points = 0; //reset points to 0.
  availableQuestions = [...questions]; //copy questions array to available questions array.
  //console.log(availableQuestions);
  getNewQuestion(); //call getNewQuestion function.
  game.classList.remove('hidden'); //remove hidden class from game div.
};
const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {//if there are no more questions or if the question counter is greater than or equal to the maximum number of questions, call endGame function.
    localStorage.setItem("mostRecentPoints", points);
    return window.location.assign('./results.html');// redirect to results.html page. results.html page displays the points and congratulated the user on their success.
  }
  questionCounter++; //increment question counter by 1.
  PROGRESS_TEXT.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`; //display question counter on page.
//update progress bar
  //console.log(questionCounter / MAX_QUESTIONS);
  PROGRESS_BAR_FULL.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  //console.log(questionCounter);
  const QUESTION_INDEX = Math.floor(Math.random() * availableQuestions.length); //randomize the questions . it will return a random number between 0 and the length of the available questions array.so random number from 0 - 4.99~ (5 questions). 0 - 3.99~ (4 questions). random number from 0 - 2.99~ (3 questions)...so on till it reaches 0 - 0 
  //console.log(questionIndex);
  currentQuestion = availableQuestions[QUESTION_INDEX]; //get reference to current question by getting it out of the available questions array.
  //console.log(currentQuestion);
  //console.log(availableQuestions[questionIndex]);
//Avoid ever using (dot)innerHTML is used to get the inner HTML of the element. it will return the inner HTML of the element. DO NOT USE because cybercriminals can embed malicious code into it. called Cross-Site Scripting (XSS).

  //Avoid using .innerText is used to set the text of an element. it will replace the text of the element.
  /*drawback to using innerText is that its value triggers a reflow due to its awareness of CSS styling, which leads to decreased performance.
  Reflow is when the browser recalculates page elements for re-rendering the document.
  Instances that trigger reflow include resizing the browser window or changing elements in the DOM.
  Reflow is computationally expensive and should be minimized in order to improve speed, efficiency, and user experience. */

  //for performance and safety use .textContent is used to get the text content of the element with is tags(hidden). it will return the text content of the element.
  /**
   * The textContent property returns the raw content with styling inside of all elements, but excludes the HTML element tags.
   * This includes <script> and <style> elements, whitespace, line breaks, and carriage returns. Unlike innerHTML, textContent has better performance because its value is not parsed as HTML.
   * For that reason, using textContent can also prevent Cross-Site Scripting (XSS) attacks. Unlike innerText, textContent isn't aware of CSS styling and will not trigger a reflow.
   * All Node objects have textContent, whereas only HTMLElement objects have innerText.
   */

  QUESTION.textContent = currentQuestion.question; //set the question text to the current question. load the questions from the questionIndex of availableQuestions copied array.
  //console.log(QUESTION);
  SELECTIONS.forEach(selection => { //grab each selection from the selections array and iterate through each selection and reference each selection.
    //get the reference from the number from the data set property of the selection from the html not the question array.
    const NUMBER = selection.dataset['number']; //get the number from the data set property of the selection from the html not the question array.
    //console.log(NUMBER);
    selection.textContent = currentQuestion[`selection${NUMBER}`];
    //console.log(selection.textContent);
  });
  availableQuestions.splice(QUESTION_INDEX, 1); //remove the current indexed question from the available questions array and splice it out to prevent the question from being asked again.
  acceptingAnswers = true; //set acceptingAnswers to true. so user can answer. this is a boolean. if true, user can answer. if false, user can't answer.
};

SELECTIONS.forEach(selection => { //grab each selection from the selections array and iterate through each selection and reference each selection.
  selection.addEventListener('click', e => { //add event listener to each selection.
    //console.log(e.target);
    if (!acceptingAnswers) return; //if we are not ready  for the user to answer, return an ignore.
    acceptingAnswers = false; //set acceptingAnswers to false. to create a delay before the next question is loaded so they don't click it immediately. this is a boolean. if true, user can answer. if false, user can't answer.
    const selectedSelection = e.target; //get the reference to the selected selection.
    //console.log(e.target);
    const SELECTED_ANSWER = selectedSelection.dataset['number']; //get the number from the data set property of the selection from the html not the question array.
    let classToApply = 'incorrect'; //set the class to apply to the selected selection if the answer is incorrect.
    if (SELECTED_ANSWER == currentQuestion.answer) { //if the selected answer is equal to the correct answer,
      classToApply = 'correct'; //set the class to apply to the selected selection if the answer is correct.
    }
    //const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; //turnary operator. if the selected answer is equal to the correct answer, set the class to apply to the selected selection if the answer is correct. if not, set the class to apply to the selected selection if the answer is incorrect.
    //console.log(classToApply);
    //console.log(SELECTED_ANSWER == currentQuestion.answer); //since selectedAnswer is a string and dataset is a number, we can't use triple equals, its a strict compare, we need to use double equals.
    if (classToApply === 'correct') { //if the class to apply is correct,
      incrementPoints(CORRECT_BONUS);
    //  console.log(points); //console log the points.
    }
    selectedSelection.parentElement.classList.add(classToApply); // apply to the parentElement of the selected selection's div container.
    setTimeout(() => {//set timeout function.
      selectedSelection.parentElement.classList.remove(classToApply);
      getNewQuestion(); //call getNewQuestion function.after we answer we want to load the next question.
    } , 1000); //remove the class after 1 second.
  });
});

const incrementPoints = num => {
  points += num;
  POINTS_TEXT.textContent = points;
};

startGame(); //call startGame function.