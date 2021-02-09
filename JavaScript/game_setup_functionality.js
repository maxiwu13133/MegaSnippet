/*
Function to setup a game (allows the game parameters to be set on the setup game page)

The setup game page must include a div element with the id "gameSettingsColumn"
This div element must include unordered lists (ul), containing li elements, conatining the button elements
Each ul is used to set a different parameter, i.e. if there are two ul elements, you can set two game parameters
You must have a button in the div with the id "playButton", to start the game

If this file is included in your program, the setupGame function will be called when the page loads.
You must have a script linked in the same html file with a function, playGame, that takes an array of numbers 
to set the game settings.
*/

function setupGame(){
    let setupData = [];
    let buttonLists = document.getElementById("gameSettingsColumn").querySelectorAll("ul");
    for (let buttonListIndex = 0; buttonListIndex < buttonLists.length; buttonListIndex++){
        setupData.push(-1);
        let buttonsInButtonList = buttonLists[buttonListIndex].querySelectorAll("button");
        for (let buttonIndex = 0; buttonIndex < buttonsInButtonList.length; buttonIndex++){
            function setParameter(event){
                selectAButtonFromListOfButtonsDeselectAllOthers(buttonsInButtonList[buttonIndex]);
                setupData[buttonListIndex] = buttonIndex;
            }
            buttonsInButtonList[buttonIndex].addEventListener("click", setParameter);
        }
    }
    // function playGameEvent(event){
    //     for (let buttonListIndex = 0; buttonListIndex < buttonLists.length; buttonListIndex++){
    //         let buttonsInButtonList = buttonLists[buttonListIndex].querySelectorAll("button");
    //         for (let buttonIndex = 0; buttonIndex < buttonsInButtonList.length; buttonIndex++){
    //             buttonsInButtonList[buttonIndex].removeEventListener("click", setParameter);
    //         }
    //     }
    //     document.getElementById("playButton").removeEventListener("click", playGameEvent);
    //     playGame(setupData)
    // }
    document.getElementById("playButton").addEventListener("click", function(event){
        playGame(setupData);
    });
}

// The setupGame function is called when the page laods
document.addEventListener('onload', setupGame());
