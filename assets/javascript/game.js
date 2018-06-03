//This function ensures that JavaScript doesn't start until document(window) has loaded
$(document).ready(function() { 

//VARIABLES
var words = ["space", "computer", "geek"];               //Array of words to be guessed
var answerArray = [];                                    //Array to hold letters
var randomword ;                                         //Selected random word
var guess ;                                              //Guess
var guessNum = 7;                                       //Remaining guesses
var wins ;                                               //Wins
var loses ;                                              //Loses
var guy ;                                                //Guy character in game
var space ;                                              //Number of spaces for letters

//GET ELEMENTS
var secretWordFields = document.getElementById("secret-word").innerHTML = answerArray;
var guesses = document.getElementById("guesses").innerHTML = guessNum;
var guessLetter = document.getElementById("guess")




//Start of the Game
function setUpWord() {
//Select a random index in the array to get a random word
  var randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  console.log("randomWord is " + randomWord);
//Populate the array with spaces for each of the letters in the secret word
  for (i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }
  secretWordFields.innerHTML = answerArray;
}

function makeGuess() {

  $("#makeGuess").on("click", function() {
  console.log("you guessed the letter " + guessedLetter.value);
  // add one to the number of guesses
  guessNum--;
  // display the new number of guesses
  guesses.innerHTML = guessNum;
  // clear the input for the next letter
  guessedLetter.value = "";
  // position the guy
  drawGuy();
  })}

//Calling the function to start the game
setUpWord();

function drawGuy() {
  console.log("guy position at " + guessNum);
  var guyId = document.getElementById("guy");
  var guy = " O ";
  // based on which position, show the guy in various degrees of peril
  if (guessNum === 6) {
    guyId.innerHTML = "&nbsp;O ";
  } 

  else if (guessNum === 5) {
    guyId.innerHTML = "&nbsp;O <br> &nbsp;|";
  } 

  else if (guessNum === 4) {
    guyId.innerHTML = "&nbsp;O <br> /|";
  } 

  else if (guessNum === 3) {
    guyId.innerHTML = "&nbsp;O <br> /|\\";
  } 

  else if (guessNum === 2) {
    guyId.innerHTML = "&nbsp;O <br> /|\\ <br> /";
  } 

  else if (guessNum === 1) {
    guyId.innerHTML = "&nbsp;O <br> /|\\ <br> /&nbsp;\\";
  } 

  else if (guessNum === 0) {
    guyId.innerHTML = "<br><br><br> O____|  (laying dead hahaha)";
  } 

};
drawGuy();
// run it using the number of guesses as the position of the guy

});
