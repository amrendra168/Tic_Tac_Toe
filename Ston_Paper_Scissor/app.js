const choices = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("reset-btn");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

const status = document.querySelector(".status");

let userPoints = 0;
let computerPoints = 0;

const moves = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomIdx = Math.floor(Math.random() * moves.length);
    return moves[randomIdx];
};

const disableChoices = () => {
    choices.forEach((choice) => {
        choice.disabled = true;
    });
};

const enableChoices = () => {
    choices.forEach((choice) => {
        choice.disabled = false;
    });
};

const resetGame = () => {
    userPoints = 0;
    computerPoints = 0;

    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
    status.textContent = "First to 5 Wins!";

    enableChoices();
};
resetBtn.addEventListener("click", resetGame);
const checkWinner = () => {
    if (userPoints === 5) {
        status.innerText = "🎉 Congratulations! You Won the Game!";
        disableChoices();
    } 
    else if (computerPoints === 5) {
        status.innerText = "😔 Computer Won the Game!";
        disableChoices();
    }
};

const playGame=(userChoice , computerChoice) =>{
    if(userChoice === computerChoice){
        status.innerText = "It's a Draw!";
        return;
    }
    let userWon = false;
    if(userChoice === "rock")
        userWon = computerChoice === "scissors";
    else if(userChoice === "scissors")
        userWon = computerChoice === "paper";
    else
        userWon = computerChoice === "rock";

    console.log(userWon);
    if (userWon) {
        userPoints++;
        userScore.innerText = userPoints;
        status.innerText = `${userChoice} beats ${computerChoice}. You Win! 🎉`;
    } else {
        computerPoints++;
        computerScore.innerText = computerPoints;
        status.innerText = `${computerChoice} beats ${userChoice}. Computer Wins! 😔`;
    }
    checkWinner();
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.classList[1];
        const computerChoice = getComputerChoice();

        console.log(userChoice);
        console.log(computerChoice);
        playGame(userChoice, computerChoice);
    });
});
