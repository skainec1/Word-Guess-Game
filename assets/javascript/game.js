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
var keycode;
var keyWord;
// var e = 


// var letterBlanks = 0;
console.log(chosenWord);

// display chosen word as underscores
// function startGame() {
//     wordsIndex = Math.floor(Math.random() * words)
//     wrongGuessCounter = 12;
//     chosenWord = "";
// }

function generateUnderscore(e) {
    console.log("asd" + e);
    for (let i = 0; i < e.length; i++) {
        underScore.push('_');
        
    }
    return underScore;
}
console.log(generateUnderscore(chosenWord));
// document.getElementsByClassName("hiddenWord").innerHTML = generateUnderscore();

// User guess
var Userguess = function(event) {
     keycode = event.keyCode;
     keyWord = String.fromCharCode(keycode);
    console.log("keyWord: " + keyWord);
    if(chosenWord.indexOf(keyWord) > -1) {
        console.log(true);
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
        // roundComplete();
        
        console.log("wins: " + winCounter);
        
    };
    if (wrongWord.length > 11) {
        lossCounter++;
        alert("You Lose!");
        // roundComplete();
       
        console.log("Losses: " + lossCounter);
    };
   
};
document.addEventListener('keypress', function (event) {
    Userguess(event);
});
console.log(chosenWord);


$("#newWord").click(function restartGame(){
    wordsIndex = Math.floor(Math.random() * words.length);
    chosenWord = words[wordsIndex];
    
    wrongGuessCounter = 12;
    $(".remainingGuesses").text("Wrong Guesses Remaining: " + wrongGuessCounter);
    rightWord = [];
    wrongWord = [];
    $(".wrongGuesses").text(wrongWord);
    underScore = [];
    $(".hiddenWord").text(underScore.join(""));
    console.log(chosenWord);
    generateUnderscore(chosenWord);
    Userguess();
    // $(".hiddenWord").text(underScore[chosenWord.indexOf(keyWord)]);
    console.log("clicks");
    console.log(chosenWord);
    console.log(wordsIndex);
    });



// var button = document.getElementsByClassName("newWord");

// button.onclick = function generateUnderscore()