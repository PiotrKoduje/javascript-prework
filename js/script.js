//Variables
let playerScore = 0;
let computerScore = 0;

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
    playerScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  document.getElementsByClassName("playerScore")[0].innerHTML = playerScore;
  document.getElementsByClassName("computerScore")[0].innerHTML = computerScore;

  if (playerScore === 3) {
    endGame("Gracz");
  } else if (computerScore === 3) {
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

  //console.log('Gracz wpisał: ' + playerInput);
  const playerMove = getMoveName(playerInput);
  printMessage("Twój ruch to: " + playerMove, "move");

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  //console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  printMessage("Komputera ruch to:  " + computerMove, "move");

  const result = displayResult(computerMove, playerMove);
  setScores(result);
};

//Listeners
document.getElementsByClassName("playRock")[0].addEventListener("click", () => {
  playGame(1);
});

document
  .getElementsByClassName("playPaper")[0]
  .addEventListener("click", () => {
    playGame(2);
  });

document
  .getElementsByClassName("playScissors")[0]
  .addEventListener("click", () => {
    playGame(3);
  });

document
  .getElementsByClassName("playAgain")[0]
  .addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    setScores("reset");
    document
      .getElementsByClassName("bodyOverlay")[0]
      .classList.remove("visible");
    clearMessages();
  });

document
  .getElementsByClassName("startGame")[0]
  .addEventListener("click", () => {
    document
      .getElementsByClassName("containerToHide")[0]
      .classList.add("visible");
    document.getElementsByClassName("startGame")[0].classList.add("hidden");
  });
