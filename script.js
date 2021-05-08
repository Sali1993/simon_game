//variables
var button = document.querySelectorAll(".game-button");
var startButton = document.querySelector(".start-button");
var playerInstructions = document.querySelector(".playerInstructions");
var levelTally = document.querySelector(".level-tally")
var gameBoard = document.querySelector(".button-container");
let compSequence =[];
let playerSequence =[];
let level = 0;

//Event Listeners
startButton.addEventListener("click", startGame);

gameBoard.addEventListener("click", event => {
    const { color } = event.target.dataset;
    if (color) gamePlay(color)
});


//Functions
function startGame(){
    startButton.classList.add("hidden")//hides start button and begins game promts
    playerInstructions.classList.remove("hidden");
    playerInstructions.innerText="Wait for computer";
    levelTally.classList.remove("hidden")
    nextRound();
    levelTally.innerText = `Level ${level} of 25`
}

function randomizer() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    return random;
}

function gamePlay(color){
    const index = playerSequence.push(color)-1;
    const sound = document.querySelector(`[data-sound="${color}"]`);
    sound.play();
    const clicks = compSequence.length - playerSequence.length;
    if(playerSequence[index] !== compSequence[index]){
        reset("Dang! Almost had it!");
        return
    }
    if(playerSequence.length===compSequence.length){
        playerSequence = [];
        playerInstructions.innerText="Dope! Time to step it up!";
        setTimeout(()=>{
            nextRound();
        },1000);
        return
    }
    playerInstructions = `Your Go! ${clicks} click${clicks>1?"s":""}`
}

function nextRound() {
    level += 1;
    gameBoard.classList.add("disabled");
    playerInstructions.innerText = "Wait for computer";
    levelTally.innerText = `Level ${level} of 25`;
    const newSequence = [...compSequence];//copies computer sequence and stores it in order to add to it
    newSequence.push(randomizer()); //adds random value to existing comuter sequence
    play(newSequence);
    compSequence = [...newSequence];
    setTimeout(() => {
        yourTurn(level);
    }, level * 500 + 1000);//delay to start your turn after the computer squence ends
}

function yourTurn(level) {
    gameBoard.classList.remove("disabled")//activates buttons
    playerInstructions.innerText = `Your go! ${level} click${level > 1 ? 's' : ''}`//changes player prompt, adds "s" after level 1
}

function play(newSequence) {
    newSequence.forEach((color, index) => {
        setTimeout(() => {
            activeColor(color);
        }, (index + 1) * 500)
    });//for each value in sequence array delay (5 seconds * the index) between values
}

function activeColor(color) {
    const currentColor = document.querySelector(`[data-color="${color}"]`)
    const sound = document.querySelector(`[data-sound="${color}"]`)
    currentColor.classList.add("activated");
    sound.play();//.play plays sound
    setTimeout(() => {
        currentColor.classList.remove("activated")
    }, 300);//activates and plays sound the button for 3 seconds
}

function reset(text){
    alert(text);
    compSequence =[];
    playerSequence =[];
    level=0;
    startButton.classList.remove("hidden")
    playerInstructions.classList.add("hidden")
    levelTally.classList.add("hidden")
    gameBoard.classList.add("disabled")
}

