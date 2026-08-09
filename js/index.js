let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");

let result = document.querySelector(".result");

let myChoice = "";

let playerScoreNum = 0;
let computerScoreNum = 0;

rock.addEventListener("click", function () {
    myChoice = "rock";
    playerChoice.innerText = "✊";

    let theComputerChoice = computerRandomChoice();
    computerChoice.innerText = theComputerChoice.icon;
    if (myChoice === "rock" && theComputerChoice.choice === "scissors") {
        ++playerScoreNum;
        result.style.display = "flex";
        result.style.backgroundColor = "#0001803c";
        result.style.borderColor = "#12129e";
        result.style.color = "#0800ffff";

        result.innerText = "win";
        // console.log(playerScoreNum);
    } else if (myChoice === "rock" && theComputerChoice.choice === "paper") {
        ++computerScoreNum;
        result.style.display = "flex";
        result.style.backgroundColor = "#8000003c";
        result.style.borderColor = "#9e1212ff";
        result.style.color = "#ff0000ff";

        result.innerText = "lose";
        // console.log(playerScoreNum);
    } else {
        result.style.display = "flex";
        result.style.backgroundColor = "#2280003c";
        result.style.borderColor = "#1b9e12ff";
        result.style.color = "#51ff00ff";

        result.innerText = "draw";
    }


    playerScore.innerText = playerScoreNum;
    computerScore.innerText = computerScoreNum;
    // console.log(myChoice);
});

paper.addEventListener("click", function () {
    myChoice = "paper";
    playerChoice.innerText = "✋";

    let theComputerChoice = computerRandomChoice();
    computerChoice.innerText = theComputerChoice.icon;
    if (myChoice === "paper" && theComputerChoice.choice === "rock") {
        ++playerScoreNum;
        result.style.display = "flex";
        result.style.backgroundColor = "#0001803c";
        result.style.borderColor = "#12129e";
        result.style.color = "#0800ffff";

        result.innerText = "win";
        // console.log(playerScoreNum);
    } else if (myChoice === "paper" && theComputerChoice.choice === "scissors") {
        ++computerScoreNum;
        result.style.display = "flex";
        result.style.backgroundColor = "#8000003c";
        result.style.borderColor = "#9e1212ff";
        result.style.color = "#ff0000ff";

        result.innerText = "lose";
        // console.log(playerScoreNum);
    } else {
        result.style.display = "flex";
        result.style.backgroundColor = "#2280003c";
        result.style.borderColor = "#1b9e12ff";
        result.style.color = "#51ff00ff";

        result.innerText = "draw";
    }


    playerScore.innerText = playerScoreNum;
    computerScore.innerText = computerScoreNum;

    // console.log(myChoice);
});

scissors.addEventListener("click", function () {
    myChoice = "scissors";
    playerChoice.innerText = "✌️";

    let theComputerChoice = computerRandomChoice();
    computerChoice.innerText = theComputerChoice.icon;
    if (myChoice === "scissors" && theComputerChoice.choice === "paper") {
        ++playerScoreNum;
        result.style.display = "flex";
        result.style.backgroundColor = "#0001803c";
        result.style.borderColor = "#12129e";
        result.style.color = "#0800ffff";

        result.innerText = "win";
        // console.log(playerScoreNum);
    } else if (myChoice === "scissors" && theComputerChoice.choice === "rock") {
        ++computerScoreNum;
        result.style.display = "flex";
        result.style.backgroundColor = "#8000003c";
        result.style.borderColor = "#9e1212ff";
        result.style.color = "#ff0000ff";

        result.innerText = "lose";
        // console.log(playerScoreNum);
    } else {
        result.style.display = "flex";
        result.style.backgroundColor = "#2280003c";
        result.style.borderColor = "#1b9e12ff";
        result.style.color = "#51ff00ff";

        result.innerText = "draw";
    }


    playerScore.innerText = playerScoreNum;
    computerScore.innerText = computerScoreNum;

    // console.log(myChoice);
});

function computerRandomChoice() {
    let choices = [
        {
            choice: "rock",
            icon: "✊",
        },
        {
            choice: "paper",
            icon: "✋",
        },
        {
            choice: "scissors",
            icon: "✌️",
        },
    ];

    let randomNum = Math.floor(Math.random() * 3)

    let theChoice = choices[randomNum];
    // console.log(theChoice);

    return theChoice;
}

let btnReset = document.querySelector(".reset");

btnReset.addEventListener("click", function () {
    playerChoice.innerText = "❔";
    computerChoice.innerText = "❔";
    playerScoreNum=0;
    computerScoreNum=0;
    playerScore.innerText = 0;
    computerScore.innerText = 0;

    result.style.display = "none";
})
