function selectAButtonFromListDeselectAllOtherButtonsByID(buttonRefIndex, listOfButtons){
    for (let i = 0; i < listOfButtons.length; i++){
        if (i == buttonRefIndex){
            document.getElementById(listOfButtons[buttonRefIndex]).style["box-shadow"] = "1vh 1vh #666";
        }
        else {
            document.getElementById(listOfButtons[i]).style["box-shadow"] = "none";
        }
    }
}

function selectAButtonFromListOfButtonsDeselectAllOthers(buttonElement){
    let listOfButtons = buttonElement.parentNode.parentNode.querySelectorAll("button");
    for (let buttonIndex = 0; buttonIndex < listOfButtons.length; buttonIndex++){
        if (listOfButtons[buttonIndex] == buttonElement){
            buttonElement.style["box-shadow"] = "1vh 1vh #666";
        }
        else {
            listOfButtons[buttonIndex].style["box-shadow"] = "none";
        }
    }
}

function removeElementFromArray(element, array) {
    for (i = 0; i < array.length; i++){
        if (array[i] == element){
            array.splice(i, 1);
        }
    }
}

// You can use the array.includes(element) method instead
function isElementInArray(element, array) {
    for (i = 0; i < array.length; i++){
        if (array[i] == element){
            return true;
        }
    }
    return false;
}