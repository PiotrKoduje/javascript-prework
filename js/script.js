//VARIABLES
let targetScore = 5;
let playerScores = 0;
let computerScores = 0;

const bodyOverlay = document.querySelector(".bodyOverlay");
const startGame = document.querySelector(".startGame");
const containerToHide = document.querySelector(".containerToHide");
const playAgain = document.querySelector(".playAgain");
const playRock = document.querySelector(".playRock");
const playPaper = document.querySelector(".playPaper");
const playScissors = document.querySelector(".playScissors");
const messages = document.querySelector(".messages");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
//settings
const settingsButton = document.querySelector(".settings-button");
const xButton = document.querySelector(".x-button");
const settingsWindow = document.querySelector(".settingsWindow");
//stepper
const plusButton = document.querySelector(".plusButton");
const minusButton = document.querySelector(".minusButton");
const stepperValue = document.querySelector(".stepperValue");
//slider
const sliderInput = document.querySelector(".sliderInput");
const playerSliderValue = document.querySelector(".playerSliderValue");
const computerSliderValue = document.querySelector(".computerSliderValue");

//FUNCTIONS
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
  const computerInput = chooseComputerInput(playerInput);
  const computerMove = getMoveName(computerInput);
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

const getChance = () => {
  return Number(playerSliderValue.textContent);
};

const getTickets = (chance) => {
  return 66 * chance;
};

const chooseComputerInput = (playerInput) => {
  const randomTicket = Math.floor(Math.random() * 9901);
  const chance = getChance();
  let computerInput;

  const drawingTickets = 3300;
  const winningTickets = getTickets(chance);
  const lostingTickets = 6600 - winningTickets;

  if (playerInput === 1) {
    // remis
    if (randomTicket <= drawingTickets) {
      computerInput = 1;
      //wygrana gracza
    } else if (randomTicket <= drawingTickets + winningTickets) {
      computerInput = 3;
      //wygrana komputera
    } else {
      computerInput = 2;
    }
  } else if (playerInput === 2) {
    //remis
    if (randomTicket <= drawingTickets) {
      computerInput = 2;
      //wygrana gracza
    } else if (randomTicket <= drawingTickets + winningTickets) {
      computerInput = 1;
      //wygrana komputera
    } else {
      computerInput = 3;
    }
  } else if (playerInput === 3) {
    //remis
    if (randomTicket <= drawingTickets) {
      computerInput = 3;
      //wygrana gracza
    } else if (randomTicket <= drawingTickets + winningTickets) {
      computerInput = 2;
      //wygrana komputera
    } else {
      computerInput = 1;
    }
  }

  // console.log(
  //   "Gracz: " +
  //     playerInput +
  //     " .Komputera: " +
  //     computerInput +
  //     " .RandomTicket: " +
  //     randomTicket +
  //     " .Chance = " +
  //     chance,
  // );
  // console.log(
  //   "Remis: 0 - 3300" +
  //     " .Gracz wygrywa dla randomTicket: 3301 - " +
  //     (drawingTickets + winningTickets),
  // );
  return computerInput;
};

//LISTENERS
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

//stepper
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

sliderInput.addEventListener("input", () => {
  target = Number(sliderInput.value);
  playerSliderValue.textContent = target;
  computerSliderValue.textContent = 100 - target;
});
