//////////////////////////////////////////////////////////////////////////////
/* User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
I want the JavaScript to tie in with Index.html only
Acceptance Criteria
GIVEN I am taking a code quiz
WHEN the site first loads
THEN I should see the top high scores button with a drop down of a list of users with there initials, time, and points/score in descending order and the Quiz Info prompt Intro that turns into a quiz prompt 
WHEN I click the "Quiz Start" button on the intro prompt 
THAN I should see a recreated DOM prompt of the  of the intro turned into a quiz prompt with a timer, score, questions, and choices, with the submit button 
THEN a timer countdown will starts counting down from 75 seconds and i will be asked the 5 questions in the array of objects in the QuestionVarArray) 
WHEN I answer a question Choice selection correctly?
THEN I will receive 20 points, 5 seconds added to the clock, and startQuizButton button is replaced with next question button <button onclick="nextQuestion()" id="nextQuestionButtonId" class="nextQuestionButton">Next Question</button>
WHEN I answer a question Choice selection incorrectly?
THEN I will receive 0 points and 5 additional seconds are subtracted to the timers countdown.
WHEN I do not answer a question within the time limit?
THEN I will receive 0 points and the timer will stop, and i will be sent to submit results section.
WHEN I click the next question "Next Question"?
THEN I will be asked the next question in the array of objects timer will continue counting down.
WHEN the first question is answered?
THEN I will be sent the the next question to answer.
WHEN I select Choices 1 of the 4 options choices?
THEN Only one of those choices will be selected at a time and only one will be correct.
WHEN the 5th question is prompted?
THEN The next question button will disappear and the submit answer button will appear. the countdown time will stop abd the score will be counted up into its total abd sent to the results section, which will appear after the user hits submit answer button.
WHEN I click the submit answer button?
THEN I will be sent to the results section and theQuizMain section will be disappear and the result section will appear..
When the Results section appears?
THEN I can save my initials time and score and submit them to the high scores section. If my time beats the top 5 high score times and scores, It will replace the top ranking scores in the top 5 high scores section.
When the clear all score is pressed?
THEN I will clear all the top 5 highscore.
WHEN i press the Restart Quiz button?
THEN I will be sent back to the intro section and the quiz will start over and time timer resets to 75 seconds and the score will be reset to 0.  
WHEN the Restart Quiz Button is pressed
THEN the timer will reset to 75 seconds and the questions will be asked again.
THEN the game is over
WHEN the game is over
User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
I want the JavaScript to only use the content from the index.html only
SO THAT i dont have change the HTML and CSS
No CSS changes
No HTML changes
No jQuery, No Bootstrap, No jQuery UI,
<!Doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="../../../../favicon.ico">
  <link rel="stylesheet" href="./assets/css/styles.css">
  <title>Challenge 4 - UCLAx-U2 - Quiz It Up </title>
  <!--- Title Of the Quiz  -->
</head>
<body>
  <!--- Body of the page -->
  <header>
    <!--- Header of the page -->
    <nav>
      <!--- Navigation of the page -->
      <div class="navWrapper">
        <!--- Wrapper for the navigation -->
        <a class="navTitle" href="index.html">Quiz It Up</a>
        <!--- Navigation title, link to index.html, Home  -->
        <ul class="navLinks" id="navLinksId">
          <li><a href="index.html">Home</a></li>
          <!--- Navigation link, link to  Home page, index.html. (hidden at home page)  -->
          <li><a href="https://www.GitHub.com/niksharpkings">GitHub</a></li>
          <!--- Navigation link, link to niksharpkings GitHub account  -->
          <li><a href="about.html">About</a></li>
          <!--- Navigation link,  to the about page, about.html,  -->
          <li><a href="privacy-policy-license.html">Legal Rights </a></li>
          <!--- Navigation link, link to the legal rights page, privacy-policy-license.html  -->
        </ul>
        <!--- End of the navigation links -->
      </div>
      <!--- End of the navigation wrapper -->
    </nav>
    <!--- End of the navigation -->
  </header>
  <!--- End of the header -->
  <!--- Start of the top 5 ranking High Score Board title -->
  <div class="top5">
    <h1>Top 5 High Score Board</h1>
  </div>
  <!--- End of the top 5 ranking High Score Board title -->
  <aside id="leftSide" aria-label="leftaside top five ranking high score board">
    <!--- <aside> left Aside of the page, left side -->
    <div class="rightSideBackGround">
      <h2 class="topHighScoreBoard">The Top 5 Ranking High Score Board</h2>
      <!--- <div> Top 5 ranking High Score Board title -->
      <div class="topHighScoreBackGround">
        <!--- <div>  Top 5 ranking Score Board background -->
        <div class="viewTopHighScoreRowClass">
          <!--- <div> tag Top 5 Tanking High Score -->
          <details id="topHighScoreDetailsId">
            <!--- <details> tag or Details tag and table for the top highest 5 rankers -->
            <summary>Top The 5 Highest Scores are:</summary>
            <!---<summery>  The most top highest ranking high score row -->
            <div id="viewTotalHighscoresId">
              <!--- Div tag for the top high score row -->
              <table id="viewTotalHighscoresTableId" aria-label="top five ranking high score table">
                <!--- <table> for the very  most top high score and time row name(initials), scores(points), and time(Minute:Seconds:Milliseconds). The top 5 users ranks go by score then by fastest time row -->
                <tr id="tableInfo">
                  <!--- Row tag for the top 5 high table info name, scores, and time row -->
                  <th>Name</th>
                  <!--- Column tag for the top 5 high score name text (No Changes) row -->
                  <th>Score</th>
                  <!--- Column tag for the top 5 high score points/score (No Changes) row -->
                  <th>Time</th>
                  <!--- Column tag for the top 5 high score time (No Changes) row -->
                </tr>
                <!--- End of the top 5 high score info name, scores, and time row -->
                <tr id="firstPlaceId">
                  <!--- Row tag #1 ranking user, Highest score achieve and highest/greatest timer countdown value -->
                  <td id="firstPlaceInialsId">JAD</td>
                  <!--- Column tag for the #1 ranking user and there name(initials) (example name: Tom John Ale) Doe (Initials = JAD) (changes based on top score and then top time) row -->
                  <td id="firstPlaceScoreId">0</td>
                  <!--- Column tag for the #1 ranking user and there score(points) (changes based on top score and then top time) row -->
                  <td id="firstPlaceTimeId">00:00:00</td>
                  <!--- Column tag for the #1 ranking user and there time(Minute:Seconds:Milliseconds) (changes based on top score and then top time) row -->
                </tr>
                <!--- End of the #1 ranking user, Highest score achieve and highest/greatest timer countdown value row -->
                <tr id="secondPlaceId">
                  <!--- Row tag #2 ranking user, Highest score achieve and highest/greatest timer countdown value -->
                  <td id="secondPlaceInialsId">TTT</td>
                  <!--- Column tag for the #2 ranking user and there name(initials)  (example name: Tom Tetty Toesky)(Initials = TTT) (changes based on top score and then top time) row -->
                  <td id="secondPlaceScoreId">0</td>
                  <!--- Column tag for the #2 ranking user and there score(points) (changes based on top score and then top time) row -->
                  <td id="secondPlaceTimeId">00:00:00</td>
                  <!--- Column tag for the #2 ranking user and there time(Minute:Seconds:Milliseconds) (changes based on top score and then top time) row -->
                </tr>
                <!--- End of the #2 ranking user, Highest score achieve and highest/greatest timer countdown value row -->
                <tr id="thirdPlaceId">
                  <!--- Row tag #3 ranking user, Highest score achieve and highest/greatest timer countdown value -->
                  <td id="thirdPlaceInialsId">COB</td>
                  <!--- Column tag for the #3 ranking user and there name(initials) (example name: CoCo OG Butters ) (Initials = COB) (changes based on top score and then top time) row -->
                  <td id="thirdPlaceScoreId">0</td>
                  <!--- Column tag for the #3 ranking user and there score(points) (changes based on top score and then top time) row -->
                  <td id="thirdPlaceTimeId">00:00:00</td>
                  <!--- Column tag for the #3 ranking user and there time(Minute:Seconds:Milliseconds) (changes based on top score and then top time) row -->
                </tr>
                <!--- End of the #3 ranking user, Highest score achieve and highest/greatest timer countdown value row -->
                <tr id="fourthPlaceId">
                  <!--- Row tag #4 ranking user, Highest score achieve and highest/greatest timer countdown value -->
                  <td id="fourthPlaceInialsId">NAS</td>
                  <!--- Column tag for the #4 ranking user and there name(initials) (example name: Nik A Sharpio and the Initials are  NAS) (changes based on top score and then top time) row -->
                  <td id="fourthPlaceScoreId">0</td>
                  <!--- Column tag for the #4 ranking user and there score(points) (changes based on top score and then top time) row -->
                  <td id="fourthPlaceTimeId">00:00:00</td>
                  <!--- Column tag for the #4 ranking user and there time(Minute:Seconds:Milliseconds) (changes based on top score and then top time) row -->
                </tr>
                <!--- End of the #4 ranking user, Highest score achieve and highest/greatest timer countdown value row -->
                <tr id="fifthPlaceId">
                  <!--- Row tag #5 ranking user, Highest score achieve and highest/greatest timer countdown value -->
                  <td id="fifthPlaceInialsId">NSA</td>
                  <!--- Column tag for the #5 ranking user and there name(initials) (example name: Nice Sexy Ass and the name(Initials)= NSA) (changes based on top score and then top time) row -->
                  <td id="fifthPlaceScoreId">0</td>
                  <!--- Column tag for the #5 ranking user and there score(points) (changes based on top score and then top time) row -->
                  <td id="fifthPlaceTimeId">00:00:00</td>
                  <!--- Column tag for the #5 ranking user and there time(Minute:Seconds:Milliseconds) (changes based on top score and then top time) row -->
                </tr>
                <!--- End of the #5 ranking user, Highest score achieve and highest/greatest timer countdown value row -->
              </table>
              <!--- End of the top 5 high score and time row name(initials), scores(points), and time(Minute:Seconds:Milliseconds) table -->
            </div>
            <!--- End of the top high score row -->
          </details>
          <!--- End of the top high score row -->
        </div>
        <!--- End of the top 5 ranking Score Board background -->
      </div>
      <!--- End of the top 5 ranking Score Board background -->
    </div>
    <!--- End of the top 5 ranking High Score Board title -->
  </aside>
  <button onclick="topHighScore()" type="button" class="btn" id="viewTotalHighscoresButtonId">👉View
    Scores👈</button>
  <!--- Button to view the top 5 high scores and drops down the details]-->
  <!--- End of the top 5 ranking High Score Board title -->
  <!--- User Last known time, hidden during first load of the index.html, will show last stats ( score and time) from the last quiz submission  -->
  <aside id="lastKnownStatsId" class="lastKnownStats" aria-label="User Last known time and score">
    <div id="lastKnownStatsTitleId" class="lastKnownStatsTitle">
      <!--- Last known time and score title -->
      <h2>Last Quiz Stats</h2>
      <!---Last Quiz Stats title -->
    </div>
    <div id="lastKnownStatsContentId" class="lastKnownStatsContent">
      <!--- Last known time and score content -->
      <div id="lastKnowTititialsId" class="lastKnowTititialsScore">
        <!--- Last known time and score content -->
        <p>Initials: <span id="lastKnowititialsId"></span></p>
        <!---User Initials -->
      </div>
      <div id="lastKnownStatsScoreContentId" class="lastKnownStatsScoreContent">
        <!--- Last known score content -->
        <p>Score: <span id="lastKnownStatsScoreId">0</span></p>
        <!---User Score -->
      </div>
      <div id="lastKnownTimeContentTimeId" class="lastKnownTimeContentTime">
        <!--- Last known time content -->
        <p>Time: <span id="lastKnownTimeTimeId">00:00:00</span></p>
        <!---User Time -->
      </div>
    </div>
    <!--- End of the Last known time and score content -->
  </aside>
  <!--- End of the Last known time and score title -->
  <!--- End of the Last known time and score title -->
  <!--- Main content of the index.html page -->
  <main>
    <div id="quizBackGroundId" class="quizBackGround">
      <div id="quizInfoPromptId" class="quizInfopromptIntro"> <!-- Quiz Info prompt <div> will Hide itself when the quiz start button is pressed -->
        <h1 id="introChallengePromptId" class="introChallengePrompt">Coding Quiz Challenge</h1> <!--- Quiz Challenge prompt title. -->
        <p id="introInfoId" class="introInfo">Quiz is on a timer.
          <br>
          Incorrect chooses will deduct the time and score.
          <br>
          On yah ready, set, ...!
        </p>
        <button onclick="quizStart()" type="button" class="btn" id="quizStartButtonId">Quiz Start</button> <!-- quiz start button-->
      </div>
      <!--- End of the Quiz Info prompt <div> will Hide itself when the quiz start button is pressed-->
      <!--- End of the Quiz prompt content. -->
      <!-- The Quiz Prompt Content begins-->
      <!-- Everything below until Quiz Start is pressed, except sectionQuizResults will remain hidden until the submitAnswerButton is pressed-->
      <!-- the Active current time and score: Appears only during the start of the quiz -->
      <div id="quizMainId" class="theQuizMain">
      <div id="quizTimeAndScoreId" class="quizTimeAndScore">
        <div id="quizTimeId" class="quizTime">
          <p>Time: <span id="quizTimeSpanId">00:00:00</span></p>
          <!--- Score counter starting value of  "0". will increase by 5 seconds for correct answer and -5 seconds for the incorrect answer, will continue counting until all five question are submitted with there answers. -->
        </div>
        <div id="quizScoreId" class="quizScore">
          <p>Score: <span id="quizScoreSpanId">0</span></p>
          <!--- Score counter starting value of  "0". will increase by 20 points for correct answer and -20 for the incorrect answer, will continue counting until all five question are submitted with there answers. -->
        </div>
      </div>
      <!--- Quiz question content -->
      <div id="quizQuestionsVarId" class="quizQuestionsVar">
        <!--- this Quiz prompt content this div will show when the start quiz button is selected -->
        <h2 id="questionTextId" class="questionText">Question:<span id="questionNumber">1</span></h2>
        <!--- Question prompt title. Span questionNumber will change its value based which question its on (1-5).  Will appear when user presses startQuizButton.  -->
        <p id="descriptionId" class="description"></p>
        <!---The Asked Question goes Here corresponds to the QuestionNumber: "value".  Question prompt description will change with the question its on. .Will appear when user presses startQuizButton. -->
        <div id="ChoicesId" class="Choices">
          <!--- Quiz Choices content Will appear when user presses startQuizButtonId and will be used for the Choices array. Select one of 4 buttons. correct answer is (true) from the Choices: array. answer = Answer: "(true)".-->
          <button onclick="quizAnswer(1)" id="ChoicesOptionOneId" class="ChoicesOptionOne"></button>
          <!--- Option One button. Will appear when user presses startQuizButtonId and will be used for the Choices array. -->
          <button onclick="quizAnswer(2)" id="ChoicesOptionTwoId" class="ChoicesOptionTwo"></button>
          <!--- Option Two button. Will appear when user presses startQuizButtonId.  -->
          <button onclick="quizAnswer(3)" id="ChoicesOptionThreeId" class="ChoicesOptionThree"></button>
          <!--- Option Three button. Will appear when user presses startQuizButtonId.  -->
          <button onclick="quizAnswer(4)" id="ChoicesOptionFourId" class="ChoicesOptionFour"></button>
          <!--- Option Four button. Will appear when user presses startQuizButtonId.  -->
        </div> <!--- End of the Quiz question content -->
        <div id="QuizButtonsId" class="QuizButtons">
          <!--- sectionQuizButtonsId user presses startQuizButtonId and will be used for the selection of choices as a submission buttony. -->
          <button onclick="nextQuestion()" id="nextQuestionButtonId" class="nextQuestionButton">Next Question</button>
          <!--- Next Question button. Will appear when user presses startQuizButtonId and disappear on the 4th question  -->
          <button onclick="submitAnswer()" id="submitAnswerButtonId" class="submitAnswerButton">Submit Answer</button>
          <!--- Submit Answer button. will appear only on the 5th question  -->
        </div>
        <!--- End of the Quiz Buttons content -->
      </div>
    </div> <!--- End of the Quiz Main content. End of the Quiz prompt content this div will show when the start quiz button is selected -->
      <!-- The Quiz Results-->
      <!-- Results of the quiz after the 5th question was answered and the submit answer button was clicked on -->
      <div id="sectionQuizResultsId" class="sectionQuizResults"> <!--- sectionQuizResultsId div id will appear only on the 5th question is answered by hitting the submit answer button  -->
        <h2 id="quizResultsTitleId" class="quizResultsTitle">Quiz Results</h2>
        <p id="quizResultsTextId" class="quizResultsText">
          <span id="quizResultsTimeId">
            <span id="quizResultsTextTimeId">Time:</span> <!--- Quiz Results Time:  -->
            <span id="quizResultsTextTimeCountdownId">0</span>  <!--- Quiz Results Time:  -->
          </span>
          <span id="quizResultsScoreId">
            <span id="quizResultsTextScoreId">Score:</span> <!--- Quiz Results total Score:  -->
            <span id="quizResultsTextScorecountdownId">0</span> <!--- Quiz Results total Score:  -->
          </span>
        </p>
        <label for="initials">Please Enter Your Initials:</label> <input type="text" id="initialsId" maxlength="3"> <!--- Quiz Results initial:  -->
        <!-- the input  -->
        <button type="button" class="btn" id="submitInitials">Submit</button> <!--- Quiz Results submit button  -->
      </div>
      <div class="quizPromptBackGround" id="highScoresId"> <!--- sectionQuizResultsId div id will appear when the Quiz Results submit button is triggered  -->
        <h1 class="quizPromptBackGround">Highscores</h1> 
        <div class="quizPromptBackGround" id="scoresId"></div>
        <button type="button" class="btn" id="clearScoresId">Clear All Scores</button> <!--- Quiz Results clear button. it will clear all of the 5 top high scores  -->
        <button type="button" class="btn" id="quizResultsButtonId">Restart Quiz</button> <!-- back to quizInfoPrompt-->
      </div>
    </div>
  </main>
  <footer>
    <div class="footer-container">
      <div class="footer-left">
        <a href="github.com/UCLAx-U2/CodingQuizChallenge" target="_blank">GitHub</a>
      </div>
      <div class="footer-right">
        <a href="privacy-policy-license.html" target="_blank">Legal Rights</a>
      </div>
    </div>
  </footer>
</body>
<script>src = "./assets/js/script.js"</script>
</html>
SO THAT i dont have change the HTML and CSS
No CSS changes
No HTML changes
No jQuery, No Bootstrap, No jQuery UI
Use Standard JavaScript
*/

var quizQuestionsVar = [
  {
    QuestionText: "Question 1:",
    QuestionNumber: 1,
    Description: "Commonly used data types DO NOT include:",
    Answer: "alerts"(true),
    Choices: [
      "strings"(false),
      "booleans"(false),
      "alerts"(true),
      "numbers"(false)
    ]
  },
  {
    QuestionText: "Question 2:",
    QuestionNumber: 2,
    Description: "The condition in an if / else statement is enclosed within ____.",
    Answer: "curly brackets"(true),
    Choices: [
      "quotes"(false),
      "curly brackets"(true),
      "parentheses"(false),
      "square brackets"(false)
    ]
  },
  {
    QuestionText: "Question 3:",
    QuestionNumber: 3,
    Description: "Arrays in JavaScript can be used to store ____.",
    Answer: "all of the above"(true),
    Choices: [
      "numbers and strings"(false),
      "other arrays"(false),
      "booleans"(false),
      "all of the above"(true)
    ]
  },
  {
    QuestionText: "Question 4:",
    QuestionNumber: 4,
    Description: "String values must be enclosed within ____ when being assigned to variables.",
    Answer: "quotes"(true),
    Choices: [
      "commas"(false),
      "curly brackets"(false),
      "quotes"(true),
      "parentheses"(false)
    ]
  },
  {
    QuestionText: "Question 5:",
    QuestionNumber: 5,
    Description: "A very useful tool used during development and debugging for printing content to the debugger is:",
    Answer: "console.log()"(true),
    Choices: [
      "terminal"(false),
      "for loops"(false),
      "console.log()"(true),
      "JavaScript"(true)
    ]
  }
];

//Hide the top5 class in the index.html dom



//Show <div id="quizInfoPromptId" class="quizInfopromptIntro"> <div> and hidden everything below it;
function showQuizInfoPrompt() {
  document.getElementById("quizInfoPromptId").style.display = "show";
  document.getElementById("quizMainId").style.display = "block";
  document.getElementById("sectionQuizResultsId").style.display = "block";
  document.getElementById("quizPromptBackGround").style.display = "block";
}
