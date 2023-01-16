console.log('scores.js loaded');

// let's get score from the local storage NAME = scoresTable
var score = localStorage.getItem("totalPoints");
var saveScoreForm = document.getElementById("saveScore");
var invitationSection = document.getElementById("invitation");
var saveButton = document.getElementById("save");
var highscoresSection = document.getElementById("highscores");
var clearHighscoresButton = document.getElementById("clear")

// let's display current score
var scoreSection = document.getElementById("score");
scoreSection.textContent = score + " Points";

score = Number(score);
clearHighscoresButton.addEventListener("click", function(){
  table = [];
  saveAndRedraw(table);
})
if (score === 0) {
  invitationSection.textContent =
    "Unfortunately with 0 score you are NOT eligible to be logged in the highscores table";
  invitationSection.setAttribute("class", "incorrect1");
  // end of any scripts on this page
} else {
  invitationSection.textContent =
  "Please enter your name to be logged in the highscores table!";
invitationSection.setAttribute("class", "correct1");
saveScoreForm.setAttribute("class", "saltChiliRibs")
  // we have a >0 score, need to load the local storage if exisits
  if (localStorage.getItem("scoresTable") === null) {
    //scores table is empty
    // initialise new array
    console.log("create empty table");
    var table = [];
  } else {
    //load existing scores table
    console.log('loadng exisitng array')
    var table = JSON.parse(localStorage.getItem("scoresTable"));
    redrawHighscores(table);
  }
  saveButton.addEventListener("click",function(event) {
      // get players name

    console.log("clicked submit button");
    event.preventDefault();
    console.log(event);
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    console.log(fname, lname);
    var newEntry = {
      'fname': fname,
      'lname': lname,
      score: score
    }
    // add to highscores table
    table.push(newEntry);
    //hide save score
    saveScoreForm.setAttribute("class", "hide");
    invitationSection.setAttribute("class", "hide");
  // sort table
  // save table to localstorage
    saveAndRedraw(table);
    //clear highscores functionality

  });
  


}

function saveAndRedraw(table) {
  // not sure how it sorts, need to investigate
  table = table.sort((firstItem, secondItem) => firstItem[1] - secondItem[1]);

  localStorage.setItem("scoresTable", JSON.stringify(table));
  redrawHighscores(table);
}

function redrawHighscores(table) {
  // re-draw table contents
  console.log(table.length);
  highscoresSection.innerHTML = "";
  for (var i = 0; i < table.length; i++) {
    
    var liChild = document.createElement("li");
    var spacer = "_".repeat(40 - (table[i]["fname"]+table[i]["lname"]).length);
    liChild.textContent = table[i]["fname"] + " " + 
                          table[i]["lname"] + spacer + 
                          table[i]["score"];
    highscoresSection.appendChild(liChild);
  }
}
