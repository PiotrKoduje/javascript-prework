{
    const getMoveName = (argMoveId) => {
        if(argMoveId == 1){
            return 'kamień';
        }   else if(argMoveId == 2){
            return 'papier';
        }   else if(argMoveId == 3){
            return 'nożyce';
        }   
    }
    
    const displayResult = (argComputerMove, argPlayerMove) => {
        if(argPlayerMove == argComputerMove){
                printMessage('Remis');
        }   else if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
                printMessage('Ty wygrywasz!');
        }   else{
                printMessage('Wygrywa komputer');
        }
    }
    
    const playGame = (playerInput) => {
        clearMessages();
    
        //console.log('Gracz wpisał: ' + playerInput);
        const playerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + playerMove);
    
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        //console.log('Wylosowana liczba to: ' + randomNumber);
        const computerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + computerMove);
    
        displayResult(computerMove, playerMove);
    }
    
    //Listeners
    document.getElementById('playRock').addEventListener('click', () => {
        playGame(1);
    });
    
    document.getElementById('playPaper').addEventListener('click', () => {
        playGame(2);
    });
    
    document.getElementById('playScissors').addEventListener('click', () => {
        playGame(3);
    });
}