//variables
var button = document.querySelectorAll(".game-button");
var startButton = document.querySelector(".start-button");
var playerInstructions = document.querySelector(".playerInstructions");
let compSequence =[];
let playerSequence =[];
let level = 0;


//Functions

function activeColor(color){
    const currentColor = document.querySelector(`[data-color="${color}"]`)
    const sound = document.querySelector(`[data-sound="${color}"]`)
    currentColor.classList.add("activated");
    sound.play();//.play plays sound
    setTimeout(()=>{
        currentColor.classList.remove("activated")
    },300);//activates and plays sound the button for 3 seconds


}

function play(newSequence){
newSequence.forEach((color,index)=>{
    setTimeout(()=>{
        activeColor(color);
    },(index+1)*500)
});//for each value in sequence array delay (5 seconds * the index) between values
}

function nextRound(){
    level +=1
    const newSequence =[...compSequence]//copies computer sequence and stores it in order to add to it
    newSequence.push(nextStep()) //adds random value to existing comuter sequence
    play(newSequence);
}

function nextStep() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    return random;
}


function startGame(){
    startButton.classList.add("hidden")//hides start button and begins game promts
    playerInstructions.classList.remove("hidden");
    playerInstructions.innerText="Wait for computer";
    nextRound();
    
}


//Event Listeners
startButton.addEventListener("click", startGame)