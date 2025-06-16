let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computerMove;

    if (number === 0) {
        computerMove = "rock";
    } else if (number === 1) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    return computerMove;
}

function getHumanChoice() {
    let humanMove = prompt("Choose your favorite move: rock, paper or scissors", "Rock");
    if(humanMove==null){
        return "rock"
    } else {
        return humanMove.toLowerCase();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        div.innerHTML = `<p>Tie</p>`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        div.innerHTML = `<p>Human won</p>`;
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        div.innerHTML = `<p>Computer won</p>`;
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        div.innerHTML = `<p>Computer won</p>`;
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        div.innerHTML = `<p>Human won</p>`;
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        div.innerHTML = `<p>Human won</p>`;
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        div.innerHTML = `<p>Computer won</p>`;
        computerScore += 1;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("#result")

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})