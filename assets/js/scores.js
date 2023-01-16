// let's get score from the local storage
var score = localStorage.getItem("totalPoints");
var invitationSection = document.getElementById("invitation");

// let's display current score
var scoreSection = document.getElementById("score");
scoreSection.textContent = score + " Points";

score = Number(score);
if (score === 0) {
  invitationSection.textContent = "Unfortunately with 0 score you are NOT eligible to be logged in the highscores table";
  invitationSection.setAttribute("class", "incorrect1")
}