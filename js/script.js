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
            printMessage('Wygrywam, a Twoja dusza idzie do piekła ;)');
    }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

displayResult(computerMove, playerMove);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}   else if(randomNumber == 2){
        computerMove = 'papier';
}   else if(randomNumber == 3){
        computerMove = 'nożyce';
}*/

/*if(playerInput == '1'){
  playerMove = 'kamień';
}   else if(playerInput == '2'){
        playerMove = 'papier';
}   else if(playerInput == 3){
        playerMove = 'nożyce';
}*/

/*if(playerMove == 'nieznany ruch'){
    printMessage('Wykonałeś niedozwolony ruch. Wybierz wartość 1, 2 lub 3.');
}   else if(playerMove == computerMove){
        printMessage('Remis');
}   else if((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')){
        printMessage('Ty wygrywasz!');
}   else{
        printMessage('Wygrywam, a Twoja dusza idzie do piekła ;)');
}*/