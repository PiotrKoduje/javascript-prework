//Variables
let targetScore = 5;
let playerScores = 0;
let computerScores = 0;
const bodyOverlay = document.getElementsByClassName("bodyOverlay")[0];
const startGame = document.getElementsByClassName("startGame")[0];
const containerToHide = document.getElementsByClassName("containerToHide")[0];
const playAgain = document.getElementsByClassName("playAgain")[0];
const playRock = document.getElementsByClassName("playRock")[0];
const playPaper = document.getElementsByClassName("playPaper")[0];
const playScissors = document.getElementsByClassName("playScissors")[0];
const messages = document.getElementsByClassName("messages")[0];
const playerScore = document.getElementsByClassName("playerScore")[0];
const computerScore = document.getElementsByClassName("computerScore")[0];
const settingsButton = document.getElementsByClassName("settings-button")[0];
const xButton = document.getElementsByClassName("x-button")[0];
const settingsWindow = document.getElementsByClassName("settingsWindow")[0];
const plusButton = document.getElementsByClassName("plusButton")[0];
const minusButton = document.getElementsByClassName("minusButton")[0];
const stepperValue = document.getElementsByClassName("stepperValue")[0];

//Functions
const getMoveName = (argMoveId) => {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  }
};

const setScores = (result) => {
  if (result === "player") {
    playerScores++;
  } else if (result === "computer") {
    computerScores++;
  }

  playerScore.innerHTML = playerScores;
  computerScore.innerHTML = computerScores;

  if (playerScores === targetScore) {
    endGame("Gracz");
  } else if (computerScores === targetScore) {
    endGame("Komputer");
  }
};

const displayResult = (argComputerMove, argPlayerMove) => {
  if (argPlayerMove == argComputerMove) {
    printMessage("Remis", "result");
    return "draw";
  } else if (
    (argComputerMove == "kamień" && argPlayerMove == "papier") ||
    (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
    (argComputerMove == "nożyce" && argPlayerMove == "kamień")
  ) {
    printMessage("Ty wygrywasz!", "result");
    return "player";
  } else {
    printMessage("Wygrywa komputer", "result");
    return "computer";
  }
};

const playGame = (playerInput) => {
  clearMessages();
  const playerMove = getMoveName(playerInput);
  printMessage("Twój ruch to: " + playerMove, "move");
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  printMessage("Komputera ruch to:  " + computerMove, "move");
  const result = displayResult(computerMove, playerMove);
  setScores(result);
};

const printMessage = (msg, className) => {
  let div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
};

const clearMessages = () => {
  messages.innerHTML = "";
};

const endGame = (winner) => {
  printMessage("Koniec gry!", "result");
  bodyOverlay.classList.add("visible");
  playAgain.classList.add("visible");
};

const resetGame = () => {
  playerScores = 0;
  computerScores = 0;
  setScores("reset");
  bodyOverlay.classList.remove("visible");
  clearMessages();
};

//Listeners
playRock.addEventListener("click", () => {
  playGame(1);
});

playPaper.addEventListener("click", () => {
  playGame(2);
});

playScissors.addEventListener("click", () => {
  playGame(3);
});

playAgain.addEventListener("click", () => {
  resetGame();
  playAgain.classList.remove("visible");
});

startGame.addEventListener("click", () => {
  containerToHide.classList.add("visible");
  startGame.classList.add("hidden");
});

settingsButton.addEventListener("click", () => {
  settingsWindow.classList.add("visible");
  bodyOverlay.classList.add("visible");
});

xButton.addEventListener("click", () => {
  settingsWindow.classList.remove("visible");
  bodyOverlay.classList.remove("visible");
});

plusButton.addEventListener("click", () => {
  if (targetScore > 19) return;
  stepperValue.textContent = Number(stepperValue.textContent) + 1;
  targetScore++;
});

minusButton.addEventListener("click", () => {
  if (targetScore < 2) return;
  stepperValue.textContent = Number(stepperValue.textContent) - 1;
  targetScore--;
});
