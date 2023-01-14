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
intro.textContent = intro.textContent +
 "Total questions: " + questionsBank.length +
". Quiz time: " + quizTime + " seconds.";

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

// function will load a question, add eventlisteners
function showQuestion(num) {
  questionTitle.textContent = questionsBank[num]["question"];
  var answersSection = document.createElement("ol");
  for (j = 0; j < questionsBank[num]["answers"].length; j++) {
    var answerTAG = document.createElement("li");
    answerTAG.textContent = questionsBank[num]["answers"][j];
    answerTAG.setAttribute("data-chosen-answer", j);
    answerTAG.addEventListener("click", function(event) {
      console.log('clicked');
      console.log(event.target.dataset)
    });
    answersSection.appendChild(answerTAG);

  }
  multipleAnswers.appendChild(answersSection)
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  quizTimer = setInterval(startQuiz, 1000);
  startScreen.setAttribute("class", "hide");
  questionSection.setAttribute("class", "");
  showQuestion(0);
  

});
