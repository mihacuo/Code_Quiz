console.log("Loaded logic.js");

// set length of the quiz in seconds
quizTime = 205;
// set length of penalty in seconds
quizPenaltyTime = 5;

// We get all the required elements in this section
var startButton = document.getElementById("start");
var timeLeft = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var questionSection = document.getElementById("questions");
var multipleAnswers = document.getElementById("choices");

// Let set default Time display
timeLeft.textContent = quizTime;

function startQuiz(event) {
  //console.log(quizTime);
  quizTime--;
  timeLeft.textContent = quizTime;
  if (quizTime === 0) {
    clearInterval(quizTimer);
    window.location.href = "highscores.html";
  }
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  quizTimer = setInterval(startQuiz, 1000);
  startScreen.setAttribute("class", "hide");
  questionSection.setAttribute("class", "");
  i= 0 ;
  console.log(questionsBank[i]["question"]);
  questionTitle.textContent = questionsBank[i]["question"];
  var answersSection = document.createElement("ol");
  for (j = 0; j < questionsBank[i]["answers"].length; j++) {
    console.log(j);
    var answerTAG = document.createElement("li");
    console.log(questionsBank[i]["answers"][j]);
    answerTAG.textContent = questionsBank[i]["answers"][j];
    answerTAG.setAttribute("data-chosen-answer", j);
    answersSection.appendChild(answerTAG);
  }
  multipleAnswers.appendChild(answersSection)
});
