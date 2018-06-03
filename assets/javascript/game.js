//This function ensures that JavaScript doesn't start until document(window) has loaded
$(document).ready(function() { 

// make an array of words to choose from
var words = ["home", "street", "game"];
// the current chosen word from the array above
// declared as a variable out here so it's accessible by all functions
var randomWord;
// empty arry to hold spaces and eventually letters
var answerArray = [];
// this selects the item on the page so later on you don't need to type all this.
// Now to reference that spot where the secret word is
var secretWord = document.getElementById("secret-word");
// set number of guesses initially to zero
var guessNum = 7;
var guesses = document.getElementById("guesses");
guesses.innerHTML = guessNum;
// this is the input where they are typing in guesses
var guessedLetter = document.getElementById("guess");

// start the game or restart it
function setUpWord() {
  // select a random index in the array to get a random word
  var randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  console.log("randomWord is " + randomWord);
  // populate the array with spaces for each of the letters in the secret word
  for (i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
  }
  secretWord.innerHTML = answerArray;
}

function makeGuess() {
  console.log("you guessed the letter " + guessedLetter.value);
  if (randomWord.indexOf(guessedLetter.value) != -1) {
    // the letter is there!  have to put the letter into the answerArray
  } else {
    // it was NOT in there.
    // add one to the number of guesses
  guessNum--;
  // display the new number of guesses
  guesses.innerHTML = guessNum;
  // clear the input for the next letter
  guessedLetter.value = "";
  // position the guy
  drawGuy();
  }

}

// Run the function to start the game (this could be tied to a "start game" button)
setUpWord();

function drawGuy() {
  console.log("guy position at " + guessNum);
  var guyId = document.getElementById("guy");
  var guy = " O ";
  // based on which position, show the guy in various degrees of peril
  if (guessNum === 6) {
    guyId.innerHTML = "&nbsp;O ";
  } else if (guessNum === 5) {
    guyId.innerHTML = "&nbsp;O <br> &nbsp;|";
  } else if (guessNum === 4) {
    guyId.innerHTML = "&nbsp;O <br> /|";
  } else if (guessNum === 3) {
    guyId.innerHTML = "&nbsp;O <br> /|\\";
  } else if (guessNum === 2) {
    guyId.innerHTML = "&nbsp;O <br> /|\\ <br> /";
  } else if (guessNum === 1) {
    guyId.innerHTML = "&nbsp;O <br> /|\\ <br> /&nbsp;\\";
  } else if (guessNum === 0) {
    guyId.innerHTML = "<br><br><br> O____|  (laying dead hahaha)";
  }

}
// run it using the number of guesses as the position of the guy
drawGuy();
});
