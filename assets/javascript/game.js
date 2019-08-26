// Word options
const words = ["squid", "coral", "shark", "whale", "dolphin"];
const newWord = document.querySelector("#newWord");
// choose random word
var wordsIndex = Math.floor(Math.random() * words.length);
var chosenWord = words[wordsIndex];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var winCounter = 0;
var lossCounter = 0;
var wrongGuessCounter = 12;

// var letterBlanks = 0;
console.log(chosenWord);

// display chosen word as underscores
function startGame() {
    wrongGuessCounter = 12;
    chosenWord = "";
}

function generateUnderscore() {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        
    }
    return underScore;
}
console.log(generateUnderscore());
// document.getElementsByClassName("hiddenWord").innerHTML = generateUnderscore();

// User guess
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyWord = String.fromCharCode(keycode);
    console.log(keyWord);
    if(chosenWord.indexOf(keyWord) > -1) {
        // console.log(true);
        rightWord.push(keyWord);
    underScore[chosenWord.indexOf(keyWord)] = keyWord;
        console.log(underScore.join(""));
        console.log(rightWord);
        $(".hiddenWord").text(underScore[chosenWord.indexOf(keyWord)]);
        $(".hiddenWord").text(underScore.join(""));
    }
    else {
    wrongWord.push(keyWord);
    wrongGuessCounter--;
    $(".remainingGuesses").text("Wrong Guesses Remaining: " + wrongGuessCounter);
    $(".wrongGuesses").text(wrongWord);
    console.log(wrongWord);
    }
    if (underScore.join("") == chosenWord) {
        winCounter++;
        alert("You Won!");
        $(".wins").text("Wins: " + winCounter);
        roundComplete();
        startGame();
        console.log("wins: " + winCounter);
        
    };
    if (wrongWord.length > 11) {
        lossCounter++;
        alert("You Lose!");
        roundComplete();
        startGame();
        console.log("Losses: " + lossCounter);
    };
    newWord.addEventListener("click" ,restartGame);

    function restartGame() {
    generateUnderscore();
    wrongGuessCounter = 12;
    
    }
    
   function roundComplete() {
       document.getElementsByClassName("remainingGuesses").innerHTML = wrongGuessCounter;
       document.getElementsByClassName("hiddenWord").innerHTML = underScore;
       document.getElementsByClassName("wins").innerHTML = winCounter;
   }
    
  

});



// var button = document.getElementsByClassName("newWord");

// button.onclick = function generateUnderscore()