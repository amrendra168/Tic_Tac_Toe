let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newGameBtn2 = document.querySelector("#new-btn2");
let turn = document.querySelector("#turn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let gameOver = false;
let count = 0;

const winptrn = [[0,1,2],
                 [0,3,6],
                 [0,4,8],
                 [1,4,7],
                 [2,5,8],
                 [2,4,6],
                 [3,4,5],
                 [6,7,8]];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const showDraw = () => {
    msg.innerText = "🤝 It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    gameOver = true;
}
const checkWinner = () => {
    for (let ptrn of winptrn) {
        let pos1 = boxes[ptrn[0]].innerText;
        let pos2 = boxes[ptrn[1]].innerText;
        let pos3 = boxes[ptrn[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner :", pos1);
                showWinner(pos1);
                disableBoxes();
                gameOver = true;
                return true;      // Winner found
            }
        }
    }
    return false;      // No winner
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        if (turnO) {
            box.innerText = "O";
            turn.innerText = "Current Turn : X";
        } else {
            box.innerText = "X";
            turn.innerText = "Current Turn : O";
        }
        turnO = !turnO;
        box.disabled = true;
        count++;
        let winnerFound = checkWinner();
        if (!winnerFound && count === 9) {
            showDraw();
        }
    });
});
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("win");
    });
}

const resetGame = () => {
    turnO = true;
    gameOver = false;
    count = 0;

    turn.innerText = "Current Turn : O";

    msgContainer.classList.add("hide");

    enableBoxes();
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
newGameBtn2.addEventListener("click", resetGame);