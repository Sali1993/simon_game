//variables
var button = document.querySelectorAll(".game-button");
var startButton = document.querySelector(".start-button");
var playerInstructions = document.querySelector(".playerInstructions");
let compSequence =[];
let playerSequence =[];
let level = 0;


//Functions
function nextRound(){
    level +=1
    const newSequence =[...compSequence]//copies computer sequence and stores it in order to add to it
}

function nextStep() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const random = colors[Math.floor(Math.random() * tiles.length)];

    return random;
}


function startGame(){
    startButton.classList.add("hidden")//hides start button and begins game promts
    playerInstructions.classList.remove("hidden");
    playerInstructions.innerText="Wait for computer";
    
}


//Event Listeners
startButton.addEventListener("click", startGame)