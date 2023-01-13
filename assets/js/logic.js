console.log('Loaded logic.js');

// set length of the quiz in seconds
quizTime = 20;
// set length of penalty in seconds
quizPenaltyTime = 5;

// We get all the required elements in this section
var startButton = document.getElementById("start")
var timeLeft = document.getElementById("time");
var startScreen = document.getElementById("start-screen")
var questionTitle = document.getElementById("question-title");
var quesionSection = document.getElementById("questions");
var multipleAnswers = document.getElementById("choices")

console.log(questionTitle)

// Let set default Time display
timeLeft.textContent = quizTime;

function startQuiz(event) {
  //console.log(quizTime);
  quizTime--;
  timeLeft.textContent = quizTime;
  if (quizTime === 0) {
    clearInterval(quizTimer);
    window.location.href = "highscores.html"
  }

}

startButton.addEventListener("click", function(event) {
  event.preventDefault();
  quizTimer = setInterval(startQuiz, 1000);
  startScreen.setAttribute("class", "hide");
  quesionSection.setAttribute("class", "block");
  for (var i = 0; i < questionsBank.length; i++) {
    console.log(questionsBank[i]["question"])
    questionTitle.textContent = questionsBank[i]["question"]
  }
});