console.log('Loaded logic.js');

// set length of the quiz in seconds
quizTime = 3;
// set length of penalty in seconds
quizPenaltyTime = 5;

// We get all the required elements in this section
var startButton = document.getElementById("start")
var timeLeft = document.getElementById("time");

// Let set default Time display
timeLeft.textContent = quizTime;

function startQuiz(event) {
  //console.log(quizTime);
  quizTime--;
  timeLeft.textContent = quizTime;
  if (quizTime === 0) {
    clearInterval(quizTimer);
  }

}



startButton.addEventListener("click", function(event) {
  event.preventDefault();
  quizTimer = setInterval(startQuiz, 1000);
  window.location.href("highscores.html")


})