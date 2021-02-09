let gameLeaderboard = "overall";
let isGlobal = true;

function selectAButton(buttonElement){
    let listOfButtons = buttonElement.parentNode.parentNode.querySelectorAll("button");
    for (let buttonIndex = 0; buttonIndex < listOfButtons.length; buttonIndex++){
        if (listOfButtons[buttonIndex] == buttonElement){
            buttonElement.style.backgroundColor = "lavender";
        }
        else {
            listOfButtons[buttonIndex].style.backgroundColor = "whiteSmoke";
        }
    }
}

document.getElementById("globalButton").addEventListener('click', function (event){
    let button = document.getElementById("globalButton");
    selectAButton(button);
    isGlobal = true;

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("classButton").addEventListener('click', function (event){
    let button = document.getElementById("classButton");
    selectAButton(button);
    isGlobal = false;

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("overallButton").addEventListener('click', function (event){
    let button = document.getElementById("overallButton");
    selectAButton(button);
    gameLeaderboard = "overall";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("ticTacToeButton").addEventListener('click', function (event){
    let button = document.getElementById("ticTacToeButton");
    selectAButton(button);
    gameLeaderboard = "ticTacToe";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("hangmanButton").addEventListener('click', function (event){
    let button = document.getElementById("hangmanButton");
    selectAButton(button);
    gameLeaderboard = "hangman";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("sudokuButton").addEventListener('click', function (event){
    let button = document.getElementById("sudokuButton");
    selectAButton(button);
    gameLeaderboard = "sudoku";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("connect4Button").addEventListener('click', function (event){
    let button = document.getElementById("connect4Button");
    selectAButton(button);
    gameLeaderboard = "connect4";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("rpsButton").addEventListener('click', function (event){
    let button = document.getElementById("rpsButton");
    selectAButton(button);
    gameLeaderboard = "rps";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

document.getElementById("wordSearchButton").addEventListener('click', function (event){
    let button = document.getElementById("wordSearchButton");
    selectAButton(button);
    gameLeaderboard = "wordSearch";

    let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal, targetClassName);
    displayLeaderboard(userList, gameLeaderboard);
    displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
});

function displayLeaderboard(userList, game){
    let rowList = document.querySelectorAll('tr');
    for (let i = 0; i < 10; i++){
        let row = rowList[i + 1];
        let user = userList[i];
        let userProfileImageField = row.querySelector("img");
        if (user.profileImageSrc == "#"){
            userProfileImageField.setAttribute("src", "./Images/profile_image_default.png"); 
        }
        else {
            userProfileImageField.setAttribute("src", user.profileImageSrc);
        }
        let usernameField = row.querySelector("p");
        let usernameTextContent = user.username;
        if (user.setTitle != ""){
            usernameTextContent += ' - <span>' + user.setTitle + '</span>';
        }
        usernameField.innerHTML = usernameTextContent;
        let scoreField = row.querySelector("td:last-child");
        if (game == "overall"){
            scoreField.textContent = user.getTotalScore().toString()
        }
        else {
            scoreField.textContent = user.gameScores[game].toString()
        }
    }
}

function getTop10UsersBy(listOfUsers, game, isGlobalLeaderboard, targetClass){
    let outputList = [];
    for (let userIndex = 0; userIndex < listOfUsers.length; userIndex++){
        let user = listOfUsers[userIndex];
        if (!isGlobalLeaderboard && user.className == targetClass){
            if (game == "overall"){
                let targetIndex = 0;
                for (let i = 0; i < outputList.length; i++){
                    if (user.getTotalScore() < outputList[i].getTotalScore()){
                        targetIndex = i + 1;
                    }
                }
                outputList.splice(targetIndex, 0, user);
            }
            else {
                let targetIndex = 0;
                for (let i = 0; i < outputList.length; i++){
                    if (user.gameScores[game] < outputList[i].gameScores[game]){
                        targetIndex = i + 1;
                    }
                }
                outputList.splice(targetIndex, 0, user);
            }
        }
        else if (isGlobalLeaderboard){
            if (game == "overall"){
                let targetIndex = 0;
                for (let i = 0; i < outputList.length; i++){
                    if (user.getTotalScore() < outputList[i].getTotalScore()){
                        targetIndex = i + 1;
                    }
                }
                outputList.splice(targetIndex, 0, user);
            }
            else {
                let targetIndex = 0;
                for (let i = 0; i < outputList.length; i++){
                    if (user.gameScores[game] < outputList[i].gameScores[game]){
                        targetIndex = i + 1;
                    }
                }
                outputList.splice(targetIndex, 0, user);
            }
        }
    }
    return outputList;
}

function displayPageTitle(game, isGlobalLeaderboard, userClass){
    let pageTitle = document.querySelector("h1");
    let globalStr = (isGlobalLeaderboard) ? "Global":"Class " + userClass;
    let gameStr = "";
    if (game == 'overall'){ gameStr = "Overall"; }
    else if (game == 'ticTacToe'){ gameStr = "Tic Tac Toe"; }
    else if (game == 'hangman'){ gameStr = "Hangman"; }
    else if (game == 'sudoku'){ gameStr = "Sudoku"; }
    else if (game == 'connect4'){ gameStr = "Connect 4"; }
    else if (game == 'rps'){ gameStr = "Rock-Paper-Scissors"; }
    else if (game == 'wordSearch'){ gameStr = "Word Search"; }
    let titleStr = globalStr + " " + gameStr + " Leaderboard";
    pageTitle.textContent = titleStr;
}

// Initial Page Setup upon load
let globalButton = document.getElementById("globalButton");
selectAButton(globalButton);
let overallButton = document.getElementById("overallButton");
selectAButton(overallButton);

let userList = getTop10UsersBy(users, gameLeaderboard, isGlobal);
displayLeaderboard(userList, gameLeaderboard);
displayPageTitle(gameLeaderboard, isGlobal, targetClassName);
