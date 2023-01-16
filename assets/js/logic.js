console.log("Loaded logic.js");

// how many seconds per question
secsPerQuestion = 20;

// set length of the quiz in seconds
quizTime = questionsBank.length * secsPerQuestion;
//console.log(quizTime)

// set length of penalty in seconds
quizPenaltyTime = 10;

// We get all the required elements in this section
var startButton = document.getElementById("start");
var timeLeft = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var questionSection = document.getElementById("questions");
var multipleAnswers = document.getElementById("choices");
var intro = document.getElementById("intro");
var rules1 = document.getElementById("rules-1");
var statsSection = document.getElementById("stats");
var feedbackSection = document.getElementById("feedback");
var totalPoints = 0;
var pointsPerQuestion = 3;
// this is the current question index
var questionIndex = 0;

// intro of the information on the questions
intro.textContent =
  intro.textContent +
  "Total questions: " +
  questionsBank.length +
  ". Quiz time: " +
  quizTime +
  " seconds.";
  rules1.textContent = pointsPerQuestion + " points per questions";

// Let set default Time display
timeLeft.textContent = quizTime;

function startQuiz(event) {
  //console.log(quizTime);
  quizTime--;
  console.log(quizTime);
  timeLeft.textContent = quizTime;
  if (quizTime < 1) {
    stopQuiz();
  }
}

function stopQuiz() {
  clearInterval(quizTimer);
  localStorage.setItem("totalPoints", totalPoints)
  window.location.href = "highscores.html";
}

// function will load a question, add eventlisteners
function showQuestion(num) {
  console.log("num", num);
  if (num === questionsBank.length) {
    stopQuiz();
    return;
  }
  statsSection.textContent =
    "Question " +
    String(num + 1) +
    " out of " +
    String(questionsBank.length) +
    ". " + "Score: " + String(totalPoints);
  questionTitle.textContent = questionsBank[num]["question"] + "(3 points)";
  var answersSection = document.createElement("ol");
  for (j = 0; j < questionsBank[num]["answers"].length; j++) {
    var answerTAG = document.createElement("li");
    answerTAG.textContent = questionsBank[num]["answers"][j];
    answerTAG.setAttribute("data-chosen-answer", j);
    answerTAG.addEventListener("click", function (event) {
      console.log("clicked");
      console.log(event.target.dataset.chosenAnswer);
      if (
        event.target.dataset.chosenAnswer == questionsBank[num]["answerIndex"]
      ) {
        console.log("correct");
        totalPoints += pointsPerQuestion;
        feedbackSection.textContent = "Correct, you earned " 
        + pointsPerQuestion +" points!";
        feedbackSection.setAttribute("class", "correct1");
      } else {
        console.log("incorrect");
        feedbackSection.textContent = "Incorrect, timer decreased by 10 seconds"
        feedbackSection.setAttribute("class", "incorrect1");
        quizTime -= 10;
      }
      console.log(totalPoints);
      // check if this is the last question

      answersSection.remove();
      questionIndex++;
      showQuestion(questionIndex);
    });
    answersSection.appendChild(answerTAG);
  }
  multipleAnswers.appendChild(answersSection);
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  quizTimer = setInterval(startQuiz, 1000);
  startScreen.setAttribute("class", "hide");
  questionSection.setAttribute("class", "");
  showQuestion(0);
});

