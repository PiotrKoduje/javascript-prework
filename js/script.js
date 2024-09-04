function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }   else if(argMoveId == 2){
        return 'papier';
    }   else if(argMoveId == 3){
        return 'nożyce';
    }   else{
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove){
    if(argPlayerMove == 'nieznany ruch'){
        printMessage('Wykonałeś niedozwolony ruch. Wybierz wartość 1, 2 lub 3.');
    }   else if(argPlayerMove == argComputerMove){
            printMessage('Remis');
    }   else if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
            printMessage('Ty wygrywasz!');
            playerScore++;
            render();
                if(isGameEnded()){
                    endGame();
                }
    }   else{
            printMessage('Wygrywa komputer');
            computerScore++;
            render();
                if(isGameEnded()){
                    endGame();
                }
    }
}

function render(){
    score.innerHTML = playerScore + ' : ' + computerScore;
}

function clearIcons(){
    playerIcon.classList.remove('fa-hand');
    playerIcon.classList.remove('fa-hand-fist');
    playerIcon.classList.remove('fa-hand-peace');

    computerIcon.classList.remove('fa-hand');
    computerIcon.classList.remove('fa-hand-fist');
    computerIcon.classList.remove('fa-hand-peace');
}

function getIcon(i){
    if(i == 1){
        return 'fa-hand-fist';
    }   else if(i == 2){
        return 'fa-hand';
    }   else if(i == 3){
        return 'fa-hand-peace';
    }
}

function isGameEnded(){
    console.log('sprawdzam wynik');
    if(playerScore == maxScore){
        winner = 'Ty';
        return true;
    }   else if(computerScore == maxScore){
        winner = 'Komputer';
        return true;
    }   else {
        return false;
    }
}

function endGame(){
    shadow2.style.display = 'flex';
    document.getElementById('winner').innerHTML = 'Zwycięzca --> ' + winner;
    document.getElementById('startNewGame').style.zIndex = '6';
}

//Variables
let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
let simulationNumber = 100;
let mode = 1;
let winner = '';
const score = document.getElementById('result');
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
const arena = document.getElementById('arena');
const settingButton = document.getElementById('settingButton');
const settings = document.getElementsByClassName('settings')[0];
const settingsClose = document.getElementsByClassName('icon')[0];
const mainContainer = document.getElementById('mainContainer');
const shadow1 = document.getElementsByClassName('shadow-1')[0];
const shadow2 = document.getElementsByClassName('shadow-2')[0];
const quantity = document.getElementById('quantity');
const simulation = document.getElementById('simulation');


function playGame(playerInput){
    clearMessages();
    clearIcons();

    //console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    playerIcon.classList.add(getIcon(playerInput));

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    //console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    computerIcon.classList.add(getIcon(randomNumber));

    displayResult(computerMove, playerMove);
    arena.style.display = 'flex';
}

//Listeners
document.getElementById('playRock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('playPaper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('playScissors').addEventListener('click', function(){
    playGame(3);
});

document.getElementById('startNewGame').addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    render();
    clearMessages();
    arena.style.display = 'none';
    shadow2.style.display = 'none';
    document.getElementById('startNewGame').style.zIndex = '2';
});

settingsClose.addEventListener('click', function(){
    settings.style.display = 'none';
    shadow1.style.display = 'none';
    maxScore = Number(quantity.value);
    simulationNumber = Number(simulation.value);
    const radioButtons = document.querySelectorAll('input[name="gameMode"]');
    radioButtons.forEach(function(radio){
        if(radio.checked){
            mode = Number(radio.value);
        }
    })
});

settingButton.addEventListener('click', function(){
    settings.style.display = 'block';
    shadow1.style.display = 'block';
});