// //////////////////////////////////////////////////////////////////////////////
// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// I want the JavaScript to tie in with Index.html only
// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the <button id="startQuizButtonId" class="startQuizButton">Start Quiz, GO !</button>
// THEN a timer countdown will starts counting down from 75 seconds and i will be asked the 5 questions in the array of objects in the QuestionVarArray) 
// WHEN I answer a question choose selection correctly?
// THEN I will receive 20 points, 5 seconds added to the clock, and startQuizButton button is replaced with next question button <button id="submitAnswerButtonId" class="submitAnswerButton">Submit Answer</button>
// WHEN I answer a question choose selection incorrectly?
// THEN I will receive 0 points and 5 additional seconds are subtracted to the timers countdown
// WHEN I do not answer a question within the time limit?
// THEN I will receive 0 points and the timer will stop
// WHEN I click the next question "continue" button?
// THEN I will be asked the next question in the array of objects in the QuestionVarArray and the timer will continue counting down
// WHEN the first question is answered?
// THEN Question will be removed and new question will appear and the "Continue" button will be replaced with "Start Quiz, Go !" button
// WHEN the last question is answered?
// THEN the timer will reset to 75 seconds and the questions will be asked again
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// I want the JavaScript to only use the content from the index.html only
// SO THAT i dont have change the HTML and CSS
// No CSS changes
// No HTML changes
// No jQuery, No Bootstrap, No jQuery UI,
// <!Doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <meta name="description" content="">
//   <meta name="author" content="">
//   <link rel="icon" href="../../../../favicon.ico">
//   <link rel="stylesheet" href="./assets/css/styles.css">
//   <title>Challenge 4 - UCLAx-U2 Coding Quiz Challenge </title>
// </head>
//<body>
// <header>
//   <nav>
//     <div class="nav-wrapper">
//       <a class="nav-title" href="index.html">UCLAx-U2 Coding Quiz</a>
//       <ul class="nav-links" id="nav-links-id">
//         <li><a href="index.html">Home</a></li>
//         <li><a href="GitHub.html">GitHub</a></li>
//         <li><a href="about.html">About</a></li>
//         <li><a href="privacy-policy-license.html">Legal Rights </a></li>
//       </ul>
//     </div>
//   </nav>
// </header>
//<aside>
//  <h2 class="HighScoreBoard">High Score Board</h2>
//   <div class="highScoreBackGround">
//     <div class="viewHighScoreRowClass">
//       <details id="highScoreDetailsId">
//         <summary>Top Highest Scores</summary>
//         <div id="viewTotalHighscoresId">
//         </div>
//         <table aria-describedby="theScoreBoard">
//           <colgroup id="theTopScoreboardId" span="1" style="background:red">List of names and there time and scores
//           </colgroup>
//           <tr>
//             <th id="tableNameList">Names</th>
//             <th id="tablePointsAndTime"><span>Points and Time</span></th>
//           </tr>
//           <div>
//                 <table aria-describedby="theScoreBoard">
//             <colgroup id="theTopScoreboardId" span="1" style="background:red">List of names and there time and scores
//             </colgroup>
//             <tr>
//               <th id="tableNameList">Names</th>
//               <th id="tablePointsAndTime"><span>Points and Time</span></th>
//             </tr>
//             <div>
//               <table aria-describedby="theScoreBoardListedId">
//                 <colgroup id="theScoreboardUsersId" span="1" style="background:red">List of names and there time and
//                   scores
//                 </colgroup>
//                 <tr>
//                   <th id="userNameInitialsId">Username Initials</th>
//                   <td id="usersNameInitalsId">Users name here </td>
//                 </tr>
//                 <tr>
//                   <th id="timeKeeperId">Time:</th>
//                   <td id="savedCountdownId"><span id="quizCountdownId">0</span></td>
//                 </tr>
//                 <tr>
//                   <th id="savedScoreKeeperId">Total Score:</th>
//                   <td id="savedQuizPointsId"><span id="savedQuizPointsId">0</span></td>
//                 </tr>
//               </table>
// //           </div>
//         </table>
//       </details>
//       <button onclick="topHighScore()" type="button" class="btn" id="viewTotalHighscoresButtonId">👉View
//         Scores👈</button>
//     </div>
//   </div>
// </aside>
// <main>
//   <div id="quizPromptBackGroundId" class="quizPromptBackGround">
//     <section id="sectionQuizPromptId" class="sectionQuizPrompt">
//       <div id="quizPromptIntroId" class="quizpromptIntro">
//         <h2 class="quizPromptBackGroundH2">Coding Quiz Challenge</h2>
//         <p class="introDialog">Quiz is on a timer.<br>
//           Incorrect choses  will deduct the time and score. <br>
//           On yah ready, set, ...!
//         </p>
//         <button id="startQuizButtonId" class="startQuizButton">Start Quiz, GO !</button>
//       </div>
//     </section>
//     <section id="sectionQuizPromptMainId" class="sectionQuizpromptMainId">
// <div id="quizQuestionsId" class="quizQuestions">
//   <div class="quizTimerScoreBox" id="quizTimerScoreBoxId">
//     <div class="quizTimer">Quiz Timer: <span id="quizTimerId">0</span></div>
//     <div class="accumulatingScore">Score: <span id="accumulatingScoreId">0</span></div>
//   </div>
//   <h2 id="QuestionId" class="Question">Question:<input type="number" id="questionNumberId" maxlength="1"></h2>
//   <p id="choses Id" class="choses ">
//     <label for="selection">
//       <input type="radio" name="selection" id="selection1Id" value="1">
//       <span id="answer1Id">selection</span>
//     </label>
//     <label for="selection">
//       <input type="radio" name="selection" id="selection2Id" value="2">
//       <span id="answer2Id">selection</span>
//     </label>
//     <label for="selection">
//       <input type="radio" name="selection" id="selection3Id" value="3">
//       <span id="answer3Id">selection</span>
//     </label>
//     <label for="selection">
//       <input type="radio" name="selection" id="selection4Id" value="4">
//       <span id="answer4Id">selection</span>
//     </label>
//   </p>
//   <button type="button" class="btn" id="submitAnswerButtonId">Submit Answer</button>
//       </div>
// /      <section id="sectionQuizResultsId" class="sectionQuizResults">
//         <h2 id="quizResultsTitleId" class="quizResultsTitle">Quiz Results</h2>
//         <p id="quizResultsTextId" class="quizResultsText">
//           <span id="quizResultsTimeId">
//             <span id="quizResultsTextTimeId">Time:</span>
//             <span id="quizResultsTextTimeCountdownId">0</span>
//           </span>
//           <span id="quizResultsScoreId">
//             <span id="quizResultsTextScoreId">Score:</span>
//             <span id="quizResultsTextScorecountdownId">0</span>
//           </span>
//         </p>
//         <label for="initials">Please Enter Your Initials:</label> <input type="text" id="initialsId" maxlength="3">
//         <!-- the input  -->
//         <button type="button" class="btn" id="submitInitials">Submit</button>
//       </section>
//           <section class="quizPromptBackGround" id="highScoresId">
//             <h1 class="quizPromptBackGround">Highscores</h1>
//             <div class="quizPromptBackGround" id="scoresId"></div>
//             <button type="button" class="btn" id="clearScoresId">Clear All Scores</button>
//             <button type="button" class="btn" id="quizResultsButtonId">Restart Quiz</button>
//           </section>
//
// </section>
//     </div>
//   </main>
//   <footer>
//     <div class="footer-container">
//       <div class="footer-left">
//         <a href="github.com/UCLAx-U2/CodingQuizChallenge" target="_blank">GitHub</a>
//       </div>
//       <div class="footer-right">
//         <a href="privacy-policy-license.html" target="_blank">Legal Rights</a>
//       </div>
//     </div>
//   </footer>
// </body>
//</main><script>
//  src = "./assets/js/script.js"
//</script>
//
//</html>
// SO THAT i dont have change the HTML and CSS
// No CSS changes
// No HTML changes
// No jQuery, No Bootstrap, No jQuery UI,
// <th id="tableNameList">Names</th> and <th id="tablePointsAndTime"><span>Points and Time</span></th> is the list of names and there time and points for the top highscores, no changes
// <th id="userNameInitials">Username Initials</th> and <th id="usersNameInitials">Users name here </th> is the user initials and name info for the top highscores List Bellow, no changes
// <th id="timeKeeper"> and <td id="savedScoreKeeper">Total Score:</td> Time:</th> is the Text for the score and time for the top highscores List, unique List, no changes just add Plus 1 more tables for more users
// <th id="savedCountdown"><span id="quizCountdown">100</span></th> is the top fastest time for the highscores value is the score,  changes
// <th id="savedQuizPoints"><span id="savedQuizPointsId">0</span></th>is the top score for the highscores value is the score,  changes  //unique
// <div id="quizPromptIntroID" class="quizpromptIntro"> will replace  with <div id="quizPromptMainID" class="quizpromptMainID">
// var quizQuestion is <div id="quizQuestions" class="quizQuestions">
// Question: is <h2 id="QuestionId" class="Question">Question:<input type="number" id="questionNumber" maxlength="1"></h2>
// choses : is <p id="choses ID" class="choses ">
// selection: is     <label for="selection"> <input type="radio" name="selection" id="selection1" value="1"><span id="answer1Id">selection</span></label><label for="selection"><input type="radio" name="selection" id="selection2" value="2"><span id="answer2Id">selection</span></label><label for="selection"><input type="radio" name="selection" id="selection3" value="3"><span id="answer3Id">selection</span></label><label for="selection"><input type="radio" name="selection" id="selection4" value="4"><span id="answer4Id">selection</span></label>
// submitAnswerButton: is <button type="button" class="btn" id="submitAnswerButtonId">Submit Answer</button>
// <section id="quizPromptbedId" class="quizPromptbed">... <section> is replaced with <section id="quizPromptMainID" class="quizpromptMainID">... <section> as the questionArray is the question and selection Array is the answered  
// then it is replaced by <section id="quizResults" class="quizResults"> ... <section>
// radio button is a true or false, true for selected and false for not selected.
// 1 of the 4 radio buttons is the correct answer from, quizQuestionsVar, example for question: "Commonly used data types DO NOT include:", the correct answer is { selection: "alerts", correct: true }, or selection: "alerts" is the correct answer and correct: true or just true is the correct answer.
// <button id="startQuizButtonId" class="startQuizButton">Start Quiz, GO !</button> is replaced by <button type="button" class="btn" id="submitAnswerButtonId">Submit Answer</button>
//<section id="sectionQuizResultsId" class="sectionQuizResults"> is the result section after all questions have been submitted, it will replace <section id="sectionQuizPromptMainId" class="sectionQuizpromptMainId">
// <span id="quizResultsTextTimeCountdownId">0</span> will contain the time that was remaining when the counter started to count down form 75 to 0
//<span id="quizResultsTextScorecountdownId">0</span> is the final score after accumulating 20 points for each correct answer and subtracting 5 points for each incorrect answer
//<span id="quizResultsTextTimeId">Time:</span> is the heading for the time countdown results
//<span id="quizResultsTextScoreId">Score:</span> is the heading for the score results
//<label for="initials">Please Enter Your Initials:</label> <input type="text" id="initialsId" maxlength="3"></input> user inputs the name initials for the HighScore  which goes to here <td id="usersNameInitalsId">Users name here </td> 
//<button type="button" class="btn" id="submitInitials">Submit</button> submits your name initials 
//<section class="quizPromptBackGround" id="highScoresId"> is the high score section after user submits initials, it will replace <section id="sectionQuizResultsId" class="sectionQuizResults"> and use <div class="quizPromptBackGround" id="scoresId"></div> to list the current user who submit the initials names results and <button type="button" class="btn" id="clearScoresId">Clear All Scores</button> to clear all the high scores and <button type="button" class="btn" id="quizResultsButtonId">Restart Quiz</button> to go back to first section <section id="sectionQuizPromptId" class="sectionQuizPrompt">
//<td id="usersNameInitalsId">Users name here </td> Top Highest Scores the submitted initials and name from the results
//quizCountdownId = Top Highest Scores time ended with
//savedQuizPointsId = Top Highest Scores points or score ended with
//quizPromptBackGroundId = Background to hold the quiz prompt 
//introduction
//sectionQuizPromptId = selection element to hold the quiz prompt introduction
//quizPromptIntroId = quiz prompt introduction prompt, 
// startQuizButtonId = the button to start the quiz
//sectionQuizPromptMainId = selection element that hold the quiz quizQuestions quiz prompt
//quizQuestions = the quiz prompt main
// quizPromptId = the quiz prompt main
// quizTimerScoreBoxId = Timer and score prompt body
//quizTimer = active Timer quiz timer (starting from 75 and counting down) 
// accumulatingScoreActive = Score for the quiz
// QuestionId = Question text for the quiz  (1 - 5) add a number
//chosesId = chose radio button list for the quiz (1 - 4) correct answer is the modal answer correct: true or selection: "alerts" is the correct answer as an example. Also, no selecting a radio seen as false or not selecting
//selection1 = chose radio for the quiz (1 of 4) posable answers, if selection is chosen then user selects it as correct:true or selected as the answer 
//selection2 = chose radio for the quiz (2 of 4) posable answers, if selection is chosen then user selects it as correct:true or selected as the answer
//selection3 = chose radio for the quiz (3 of 4) posable answers, if selection is chosen then user selects it as correct:true or selected as the answer
//selection4 = chose radio for the quiz (4 of 4) posable answers, if selection is chosen then user selects it as correct:true or selected as the answer
//submitAnswerButtonId = submit button is submitting the true answer or correct:true from the quizQuestionsVar variable
//quizResultsTextTimeCountdownId = the time remaining when the counter started to count down form 75 to 0 as a result for completing the questionnaire
//quizResultsTextScorecountdownId = the final score after accumulating 20 points for each correct answer and subtracting 5 points for each incorrect answer as a result for completing the questionnaire
//quizResultsTextTimeId = the heading text Time: = quizResultsTextTimeCountdownId for the time countdown results as a result for completing the questionnaire
//quizResultsTextScoreId = the heading text Score: = quizResultsTextScorecountdownId for the score results as a result for completing the questionnaire
//initialsId = the text box for the user to type in there initials or users' name to be entered as a result for completing the questionnaire
//scoresId = Users name initials and other users high scores as a result for completing the questionnaire
//highScoresId = the high score section after user submits initials, it will replace <section id="sectionQuizResultsId" class="sectionQuizResults"> and use <div class="quizPromptBackGround" id="scoresId"></div> to list the current user who submit the initials names results and <button type="button" class="btn" id="clearScoresId">Clear All Scores</button> to clear every users or all the high scores and <button type="button" class="btn" id="quizResultsButtonId">Restart Quiz</button> to go back to first section <section id="sectionQuizPromptId" class="sectionQuizPrompt">
//Use quizQuestionsVar array tp create the quiz prompt
//QuestionId's "Question:" will be replaced with "Question 1: Commonly used data types DO NOT include:", then that will be replaced by "Question 2: The condition in an if / else statement is enclosed within ____.", then "Question 3: Arrays in JavaScript can be used to store ____." and then replace it wil "Question 4: String values must be enclosed within ____ when being assigned to variables." and lastly that replaced with the final question "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:" all without the double quotes 
// <label for="selection"><input type="radio" name="selection" id="selection1Id" value="1"><span id="answer1Id">selection</span></label> will correspond to { selection: "strings", correct: false } for example. selection will be prompted for the radio button and false will mean unselected radio button
// radio button will be selected if the correct:true is true  but in last comment the answer is false. if selected then the answer is incorrect and the score will be deducted by 5 points after the users picks one of 4 radio buttons that and the example is an example as if the user selected 1 of 4 radio button which was written as answer1Id's span text which is replaced with "strings" answer is false, so the score will be deducted by 5 points and 5 seconds off the countdown timer and is true that is is false but marked as correct: false  if user picked radio button 3 or answers3Id's  "alerts" from { selection: "alerts", correct: true }, then the answer to that questionnaire is correct and user will get 5 seconds bonos to the countdown timer and 20 points to there total score value. the user will see the point add to the <div class="quizTimerScoreBox" id="quizTimerScoreBoxId"> ... <div> element and be fill in as quizTimerId">0 is the run down clock that starts from 75 down to 0 and is -
//- timer to use when the user is answering the quiz. user will see the points added on to the 0 in id="quizCountResultsScore" and time will be added to id="quizTimerId" where 0 is the countdown time, so if the time is 40 seconds for example the user selects the correct answer after hitting the  id="submitAnswerButtonId" Submit Answer button then 45 seconds will show on the next question asked, if incorrect then 35s seconds will show, and 20 points to the counted up score. the user will see the results of the total score and time as the time will stop exactly when the user hit the submit answer on the last questionnaire. 
// 
// <label for="selection"><input type="radio" name="selection" id="selection2Id" value="2"><span id="answer2Id">selection</span></label> will correspond to { selection: "booleans", correct: false } for example. selection will be prompted for the radio button and false will mean unselected radio button. the user will be deducted 5 points if user selects this radio buttion as the submit answer as this answer is marked as false, because it's  correct: false  as selection: "booleans" or just booleans without the quote as shown next to the radio button. booleans is not the answer to this questionnaire or set of these 5 questions that will be prompted to the user and the user will see the 5 points deducted from there total score and 5 seconds off the countdown timer. 
// to continue the example scenario the user will be given 5 point to time and 5 added seconds if the user selects "alerts" as the example or sample example because for question number 1 titled as "Question 1: Commonly used data types DO NOT include:" without the quotes, and selection number 3 as the or the third radio button answer, but the answer will and radio buttion will be different from all other questions as the next question will bring new choses as the selected radio buttons will need to correspond to the order of chose array with in the quizQuestionsVar 
// radio button will be selected if the correct:true is as the true answer
// radio button will be selected if the correct:false is as the incorrect answer

function topHighScore() {
  var topHighScoreVar = document.getElementById("highScoreDetails");
  topHighScoreVar.open = true;
};
function topHighScoreClose() {
  var topHighScoreVar = document.getElementById("highScoreDetails");
  topHighScoreVar.open = false;
};

var quizQuestionsVar = [
  {
    question: "Question 1: Commonly used data types DO NOT include:",
    choses: [
      { selection: "strings", correct: false },
      { selection: "booleans", correct: false },
      { selection: "alerts", correct: true },
      { selection: "numbers", correct: false }
    ]
  },
  {
    question: "Question 2: The condition in an if / else statement is enclosed within ____.",
    choses: [
      { selection: "quotes", correct: false },
      { selection: "curly brackets", correct: true },
      { selection: "parentheses", correct: false },
      { selection: "square brackets", correct: false }
    ]
  },
  {
    question: "Question 3: Arrays in JavaScript can be used to store ____.",
    choses: [
      { selection: "numbers and strings", correct: true },
      { selection: "other arrays", correct: false },
      { selection: "booleans", correct: false },
      { selection: "all of the above", correct: false }
    ]
  },
  {
    question: "Question 4: String values must be enclosed within ____ when being assigned to variables.",
    choses: [
      { selection: "commas", correct: false },
      { selection: "curly brackets", correct: false },
      { selection: "quotes", correct: true },
      { selection: "parentheses", correct: false }
    ]
  },
  {
    question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    choses: [
      { selection: "JavaScript", correct: false },
      { selection: "terminal/bash", correct: false },
      { selection: "for loops", correct: false },
      { selection: "console.log", correct: true }
    ]
  }
];
//first section quiz prompt (intro)

var sectionQuizPromptId = document.getElementById("sectionQuizPromptId"); //section background into
var quizPromptIntroId= document.getElementById("quizPromptIntroId");//quiz prompt intro

//second section quiz prompt (question 1)
var sectionQuizPromptMainId = document.getElementById("sectionQuizPromptMainId"); //second section background for quiz
var QuestionId = document.getElementById("QuestionId"); //quiz prompt questions and answers as its the  (question:)
var choseId = document.getElementById("chose1Id"); //quiz answer choices (choses: )
var selection = document.getElementById("selection1Id"); // its the selection: or your answer to select from
var answer1Id = document.getElementById("answer1Id"); // first radio button from 1 of 4 selection: or the first from the chose array
var answer2Id = document.getElementById("answer2Id"); // second radio button from 1 of 4 selection: or the second from the chose array
var answer3Id = document.getElementById("answer3Id"); // third radio button from 1 of 4 selection: or the third from the chose array
var answer4Id = document.getElementById("answer4Id"); // fourth radio button from 1 of 4 selection: or the fourth from the chose array

//third section quiz prompt (the results)
// Let create the quiz timer and score to be used in the quiz and set as the use the html or index.html as reference to extract elements
var quizTimerId = document.getElementById("quizTimerId"); //live timer
var quizTimerScoreBoxId = document.getElementById("quizTimerScoreBoxId");
var quizCountResultsScore = document.getElementById("quizCountResultsScore"); // this be the score, it starts at 0 and will increase by 20 when a user enters the correct corresponding Answer
var quizCountResultsTime = document.getElementById("quizTimerId"); // this be the time, it starts at 75 and will increase by 5 when a user enters the correct radio button answer. it will decrease by 5 when a user enters the incorrect radio button answer.

var initialsId = document.getElementById("initialsId");
var submitInitials = document.getElementById("submitInitials");

var highScoresId = document.getElementById("highScoresId");
var scoresId = document.getElementById("scoresId");
var clearScoresId = document.getElementById("clearScoresId");
var quizResultsButtonId = document.getElementById("quizResultsButtonId");


