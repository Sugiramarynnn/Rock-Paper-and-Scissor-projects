const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]; // corrected spelling
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || // corrected comparison
               (playerChoice === "scissors" && computerChoice === "paper") ||
               (playerChoice === "paper" && computerChoice === "rock")) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You Win!" + playerChoice + " beats " + computerChoice; // added spaces for readability
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
       return "You Lose!" + computerChoice + " beats " + playerChoice; // added spaces for readability
    }
}
