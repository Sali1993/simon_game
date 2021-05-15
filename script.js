//variables
var optionButtons= document.querySelector(".optionButtons");
var gameButtons = document.querySelectorAll(".game-button");
var pickChainz= document.querySelector(".pickChainz");
var chainzButton= document.querySelector(".chainz")
var pickChance = document.querySelector(".pickChance");
var chanceButton= document.querySelector(".chance")
var pickDmx = document.querySelector(".pickDmx");
var dmxButton= document.querySelector(".dmx")
var pickGucci = document.querySelector(".pickGucci");
var gucciButton = document.querySelector(".gucci")
var pickDrake = document.querySelector(".pickDrake");
var drakeButton = document.querySelector(".drake")
var pickJon = document.querySelector(".pickJon");
var jonButton = document.querySelector(".jon")
var pickNicki = document.querySelector(".pickNicki");
var nickiButton = document.querySelector(".nicki")
var pickBiggie = document.querySelector(".pickBiggie");
var bigButton = document.querySelector(".biggie")
var pickRoss = document.querySelector(".pickRoss");
var rossButton = document.querySelector(".ross")
var pickSoulja = document.querySelector(".pickSoulja");
var souljaButton = document.querySelector(".soulja")
var startButton = document.querySelector(".start-button");
var playerInstructions = document.querySelector(".playerInstructions");
var levelTally = document.querySelector(".level-tally")
var gameBoard = document.querySelector(".button-container");
let colors = [];
let compSequence =[];
let playerSequence =[];
let pickedEmcees =[]
let level = 0;



// Event Listeners

pickChainz.addEventListener("click", function() {
    chainzButton.classList.remove("hidden")
    if(colors.includes(chainzButton.getAttribute("data-color"))===false)colors.push(chainzButton.getAttribute("data-color"))
    console.log(colors)
    if(colors.length===4){
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickChance.addEventListener("click", function () {
    chanceButton.classList.remove("hidden")
    if (colors.includes(chanceButton.getAttribute("data-color")) === false)colors.push(chanceButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickDmx.addEventListener("click", function () {
    dmxButton.classList.remove("hidden")
    if (colors.includes(dmxButton.getAttribute("data-color")) === false)colors.push(dmxButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickGucci.addEventListener("click", function () {
    gucciButton.classList.remove("hidden")
    if (colors.includes(gucciButton.getAttribute("data-color")) === false)colors.push(gucciButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickDrake.addEventListener("click", function () {
    drakeButton.classList.remove("hidden")
    if (colors.includes(drakeButton.getAttribute("data-color")) === false)colors.push(drakeButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickJon.addEventListener("click", function () {
    jonButton.classList.remove("hidden")
    if (colors.includes(jonButton.getAttribute("data-color")) === false)colors.push(jonButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickNicki.addEventListener("click", function () {
    nickiButton.classList.remove("hidden")
    if (colors.includes(nickiButton.getAttribute("data-color")) === false)colors.push(nickiButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickBiggie.addEventListener("click", function () {
    bigButton.classList.remove("hidden")
    if (colors.includes(bigButton.getAttribute("data-color")) === false)colors.push(bigButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickRoss.addEventListener("click", function () {
    rossButton.classList.remove("hidden")
    if (colors.includes(rossButton.getAttribute("data-color")) === false)colors.push(rossButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

pickSoulja.addEventListener("click", function () {
    souljaButton.classList.remove("hidden")
    if (colors.includes(souljaButton.getAttribute("data-color")) === false)colors.push(souljaButton.getAttribute("data-color"))
    console.log(colors)
    if (colors.length === 4) {
        startButton.classList.remove("hidden")
        optionButtons.classList.add("hidden")
        playerInstructions.innerText="Lets get it poppin!"
    }
})

startButton.addEventListener("click", startGame);

gameBoard.addEventListener("click", event => {
    const { color } = event.target.dataset;
    if (color) gamePlay(color)
});


//Functions


function startGame(){
    startButton.classList.add("hidden")//hides start button and begins game promts
    // playerInstructions.classList.remove("hidden");
    playerInstructions.innerText="Wait for computer";
    levelTally.classList.remove("hidden")
    nextRound();
    levelTally.innerText = `Level ${level} of 25`
}

function randomizer() {
    const random = colors[Math.floor(Math.random() * colors.length)];
    return random;
   
}

function gamePlay(color){
    const index = playerSequence.push(color)-1;//player clicks
    const sound = document.querySelector(`[data-sound="${color}"]`);
    sound.play();
    const clicks = compSequence.length - playerSequence.length;
    if(playerSequence[index] !== compSequence[index]){
        reset("Dang! Almost had it!");
        return
    }
   
    if(playerSequence.length===compSequence.length){
        if(playerSequence===25){
            reset("YOU GOT IT DONE! Thats whats up!" )
        }
        playerSequence = [];
        playerInstructions.innerText="Dope! Time to step it up!";
        setTimeout(()=>{
            nextRound();
        },1000);
        return
    }
    playerInstructions.innerText = `Your Go! ${clicks} click${clicks>1?"s":""}`
}

function nextRound() {
    level += 1;
    gameBoard.classList.add("disabled");
    playerInstructions.innerText = "Wait for computer";
    levelTally.innerText = `Level ${level} of 25`;
    const newSequence = [...compSequence];//copies computer sequence and stores it in order to add to it
    newSequence.push(randomizer()); //adds random value to existing comuter sequence
    console.log(newSequence)
    play(newSequence);
    compSequence = [...newSequence];
    console.log(newSequence)
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
        }, (index + 1) * 700)
    });//for each value in sequence array delay (7 seconds * the index) between values
}

function activeColor(color) {
    const currentColor = document.querySelector(`[data-color="${color}"]`)
    const sound = document.querySelector(`[data-sound="${color}"]`)
    currentColor.classList.add("active");
    sound.play();//.play plays sound
    setTimeout(() => {
        currentColor.classList.remove("active")
    }, 500);//activates and plays sound the button for 5 seconds
}


function reset(text){
    alert(text);
    compSequence =[];
    playerSequence =[];
    colors=[];
    console.log(colors)
    level=0;
    startButton.classList.add("hidden")
    optionButtons.classList.remove("hidden")
    playerInstructions.innerText=""
    levelTally.classList.add("hidden")
   for (let index = 0; index < gameButtons.length; index++) {
       gameButtons[index].classList.add("hidden");
       
   }
   
}




