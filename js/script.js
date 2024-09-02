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
    }   else{
            printMessage('Wygrywa komputer');
    }
}

function playGame(playerInput){
    clearMessages();

    //console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    //console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    displayResult(computerMove, playerMove);
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