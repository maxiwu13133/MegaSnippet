/*
The tic tac toe game scripts
*/

// Main function for playing the game
function playGame(gameSetupData){
    document.getElementById("gameSetupMain").style.display = "none";
    document.getElementById("gamePlayMain").style.display = "block";

    // Read the game setup data
    const gameSides = ['X', 'O'];
    let playerSide = (gameSetupData[0] != -1) ? gameSides[gameSetupData[0]]:gameSides[0];
    let computerSide = (gameSides.indexOf(playerSide) == 0) ? gameSides[1]:gameSides[0]
    const gameDifficultyLevels = [50, 75, 90];
    let gameDifficulty = (gameSetupData[1] != -1) ? gameDifficultyLevels[gameSetupData[1]]:gameDifficultyLevels[0];

    // Setup the game tiles
    let availableTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let userTiles = [];
    let computerTiles = [];
    let gameEnd = false;
    updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles)

    // Check if player or computer is playing first
    if (playerSide == 'O'){
        document.getElementById("messagePrompt").textContent = "You're playing as O, so the computer has picked first!";
        computerPick(gameDifficulty, availableTiles, userTiles, computerTiles);
        updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles)
    }
    else {
        document.getElementById("messagePrompt").textContent = "You're playing as X, so you can pick first!";
    }

    // Create the event listener for each tile
    let ticTacToeBoard = document.getElementById("ticTacToeBoard");
    let boardTiles = ticTacToeBoard.querySelectorAll("div");
    for (let tile = 0; tile < boardTiles.length; tile++){
        boardTiles[tile].addEventListener('click', function(event){
            if (!gameEnd && pickTile(tile, availableTiles, userTiles)) {
                updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles)
                gameEnd = getGameState(gameDifficulty, availableTiles, playerSide, userTiles, computerSide, computerTiles);
            }
        });
    }

    document.getElementById("playAgainButton").addEventListener('click', function(event){
        document.getElementById("messageWarning").innerHTML = '';
        hideEndGameButtons()
        availableTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        userTiles = [];
        computerTiles = [];
        gameEnd = false;
        updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles)
        if (playerSide == 'O'){
            document.getElementById("messagePrompt").textContent = "You're playing as O, so the computer has picked first!";
            computerPick(gameDifficulty, availableTiles, userTiles, computerTiles);
            updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles)
        }
        else {
            document.getElementById("messagePrompt").textContent = "You're playing as X, so you can pick first!";
        }
    });
            
    document.getElementById("newGameButton").addEventListener('click', function(event){
        document.getElementById("messageWarning").innerHTML = '';
        hideEndGameButtons()
        document.getElementById("gameSetupMain").style.display = "block";
        document.getElementById("gamePlayMain").style.display = "none";
        console.log(firstCheck)
        firstCheck = false;
        setupGame(false)
    });
}


// Function to display content to the board
//*********************************************************************************************
// Function to update the game board
function updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles){
    for (let userTileIndex = 0; userTileIndex < userTiles.length; userTileIndex++){
        let tileID = "tile" + userTiles[userTileIndex];
        document.getElementById(tileID).textContent = playerSide;
    }
    for (let computerTileIndex = 0; computerTileIndex < computerTiles.length; computerTileIndex++){
        let tileID = "tile" + computerTiles[computerTileIndex];
        document.getElementById(tileID).textContent = computerSide;
    }
    for (let availableTileIndex = 0; availableTileIndex < availableTiles.length; availableTileIndex++){
        let tileID = "tile" + availableTiles[availableTileIndex];
        document.getElementById(tileID).textContent = "";
    }
}

// Function to display the end game buttons
function displayEndGameButtons(){
    document.getElementById("playAgainButton").style.visibility = "visible";
    document.getElementById("newGameButton").style.visibility = "visible";
}

// Function to hide the end game buttons
function hideEndGameButtons(){
    document.getElementById("playAgainButton").style.visibility = "hidden";
    document.getElementById("newGameButton").style.visibility = "hidden";
}


// Function to allow the player to pick a tile
//*********************************************************************************************
// Function to recieve and validate a user pick
function pickTile(tile, availableTiles, userTiles){
    if (availableTiles.includes(tile)) {
        document.getElementById("messageWarning").innerHTML = '';
        userTiles.push(tile);
        removeElementFromArray(tile, availableTiles);
        return true;
    }
    document.getElementById("messageWarning").innerHTML = 'Pease pick an empty tile!';
    return false;
}


// Function to check the game status
//*********************************************************************************************
// Function to check the game data and determine the game results
function getGameState(gameDifficulty, availableTiles, playerSide, userTiles, computerSide, computerTiles){
    if (didWin(userTiles)){
        document.getElementById("messageWarning").innerHTML = 'Congradulations, you won! If you want to play again, please press the button below!';
        displayEndGameButtons()
        return true;
    }
    else if (didTie(availableTiles)){
        document.getElementById("messageWarning").innerHTML = 'Good game, it was a tie! If you want to play again, please press the button below!';
        displayEndGameButtons()
        return true;
    }
    else {
        // Add a 4000 milisecond wait before executing
        computerPick(gameDifficulty, availableTiles, userTiles, computerTiles);
        updateBoard(playerSide, userTiles, computerSide, computerTiles, availableTiles)
    }
    if (didWin(computerTiles)){
        document.getElementById("messageWarning").innerHTML = 'Unfortunately, you lost! If you want to play again, please press the button below!';
        displayEndGameButtons()
        return true;
    }
    else if (didTie(availableTiles)){
        document.getElementById("messageWarning").innerHTML = 'Good game, it was a tie! If you want to play again, please press the button below!';
        displayEndGameButtons()
        return true;
    }
    else {
        return false;
    }
}

// Function that checks if the player or computer won
function didWin(targetTiles){
    if (targetTiles.includes(0) && targetTiles.includes(1) && targetTiles.includes(2)){
        return true;
    }
    else if (targetTiles.includes(3) && targetTiles.includes(4) && targetTiles.includes(5)){
        return true;
    }
    else if (targetTiles.includes(6) && targetTiles.includes(7) && targetTiles.includes(8)){
        return true;
    }
    else if (targetTiles.includes(0) && targetTiles.includes(3) && targetTiles.includes(6)){
        return true;
    }
    else if (targetTiles.includes(1) && targetTiles.includes(4) && targetTiles.includes(7)){
        return true;
    }
    else if (targetTiles.includes(2) && targetTiles.includes(5) && targetTiles.includes(8)){
        return true;
    }
    else if (targetTiles.includes(0) && targetTiles.includes(4) && targetTiles.includes(8)){
        return true;
    }
    else if (targetTiles.includes(2) && targetTiles.includes(4) && targetTiles.includes(6)){
        return true;
    }
    else{
        return false;
    }
}

// Function that checks if the player and computer tied
function didTie(availableTiles){
    if (availableTiles.length == 0)
    {
        return true;
    }
    return false;
}


// Function to define the bot's logic
//*********************************************************************************************
// Function for the computer to pick a tile
function computerPick(gameDifficulty, availableTiles, userTiles, computerTiles){
    let pick;
    if (Math.random() * 100 < gameDifficulty){
        pick = bestTicTacToePick(availableTiles, userTiles, computerTiles);
    }
    else {
        pick = availableTiles[Math.floor(Math.random() * availableTiles.length)];
    }
    computerTiles.push(pick);
    removeElementFromArray(pick, availableTiles)
}

// Function to determine the best tic tac toe move
function bestTicTacToePick(available, userSelected, computerSelected){
    let winningMove = canWin(available, computerSelected);
    let blockingMove = canWin(available, userSelected);
    if (winningMove != -1){
        return winningMove;
    }
    else if (blockingMove != -1){
        return blockingMove;
    }
    return bestMove(available, userSelected, computerSelected);
}

// Function to determine if the next move could be a winning move
function canWin(available, alreadySelected){
    let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let winningOptionIndex = 0; winningOptionIndex < winningCombos.length; winningOptionIndex++){
        let countInList = 0;
        let missingTile = -1;
        for (let tileInQuestionIndex = 0; tileInQuestionIndex < winningCombos[winningOptionIndex].length; tileInQuestionIndex++){
            let tileInQuestion = winningCombos[winningOptionIndex][tileInQuestionIndex];
            if (alreadySelected.includes(tileInQuestion)){
                countInList++;
            }
            else if (available.includes(tileInQuestion)){
                missingTile = tileInQuestion;
            }
        }
        if (countInList == 2 && missingTile != -1){
            return missingTile;
        }
    }
    return -1;
}

// Function to determine the computer's best move 
function bestMove(available, userSelected, computerSelected){
    let middleTile = 4
    if (available.includes(middleTile)){
        return middleTile;
    }
    else if (available.includes(0)){
        return 0;
    }
    else if (available.includes(2)){
        return 2;
    }
    else if (available.includes(6)){
        return 6;
    }
    else if (available.includes(8)){
        return 8;
    }
    return available[Math.floor(Math.random() * available.length)];
}

// // Function to determine which the best corner tile to pick
// function pickCornerTile(available, userSelected, computerSelected){
//     let availableCorners = []
//     if (available.includes(0)){
//         availableCorners.push(0)
//     }
//     else if (available.includes(2)){
//         availableCorners.push(2)
//     }
//     else if (available.includes(6)){
//         availableCorners.push(6)
//     }
//     else if (available.includes(8)){
//         availableCorners.push(8)
//     }
//     if (availableCorners.length == 4 && userSelected.length == 2)
//         return availableCorners[Math.floor(Math.random() * availableCorners.length)]
//     else {
//         return availableCorners[Math.floor(Math.random() * availableCorners.length)]
//     }
// }