//variables
var button = document.querySelectorAll(".game-button");
var startButton = document.querySelector(".start-button");
var playerInstructions = document.querySelector(".playerInstructions")
let compSequence =[];
let playerSequence =[];


//Functions
function startGame(){
    startButton.classList.add("hidden")
    playerInstructions.classList.remove("hidden");
    playerInstructions.innerText="Wait for computer";
    
}


//Event Listeners
startButton.addEventListener("click", startGame)