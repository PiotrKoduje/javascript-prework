const printMessage = (msg, className) => {
  let div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = msg;
  const messages = document.getElementsByClassName("messages")[0];
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
};

const clearMessages = () => {
  document.getElementsByClassName("messages")[0].innerHTML = "";
};

const endGame = (winner) => {
  printMessage("Koniec gry!", "result");
  document.getElementsByClassName("bodyOverlay")[0].classList.add("visible");
};
