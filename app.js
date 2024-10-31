// Selecting all boxes, turn message, and reset button
const boxes = document.querySelectorAll(".box");
const turnDisplay = document.querySelector(".button-section h5");
const resetButton = document.querySelector(".btn");

// Initializing variables
let turn = "X";
let gameActive = true;

// Function to switch turns
function switchTurn() {
    turn = turn === "X" ? "O" : "X";
    turnDisplay.innerText = `Turn for ${turn}`;
}

// Function to check for win
function checkWin() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (
            boxes[a].querySelector(".boxtext").innerText === turn &&
            boxes[a].querySelector(".boxtext").innerText === boxes[b].querySelector(".boxtext").innerText &&
            boxes[a].querySelector(".boxtext").innerText === boxes[c].querySelector(".boxtext").innerText
        ) {
            gameActive = false;
            turnDisplay.innerText = `${turn} Wins!`;
            boxes[a].style.backgroundColor = "lightgreen";
            boxes[b].style.backgroundColor = "lightgreen";
            boxes[c].style.backgroundColor = "lightgreen";
        }
    });
}

// Function to reset the game
function resetGame() {
    boxes.forEach(box => {
        box.querySelector(".boxtext").innerText = "";
        box.style.backgroundColor = ""; // Reset background color only
    });
    turn = "X";
    gameActive = true;
    turnDisplay.innerText = "Turn for X";
}

// Adding event listeners to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        const boxtext = box.querySelector(".boxtext");
        if (!boxtext.innerText && gameActive) {
            boxtext.innerText = turn;
            checkWin();
            if (gameActive) switchTurn();
        }
    });
});

// Adding event listener to the reset button
resetButton.addEventListener("click", resetGame);
