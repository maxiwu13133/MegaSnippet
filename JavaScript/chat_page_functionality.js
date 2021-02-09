function postToPage(name, image, message, date){
    if (message){
        let messageLineElement = document.createElement("div");
        messageLineElement.setAttribute('class', 'messageLine');
        let messageLineProfileImageElement = document.createElement("img");
        messageLineProfileImageElement.setAttribute('src', image);
        messageLineProfileImageElement.setAttribute('alt', name + ' Profile Image');
        let messageLineNameElement = document.createElement("h4");
        messageLineNameElement.innerHTML = name + " - " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        let messageLineMessageElement = document.createElement("p");
        messageLineMessageElement.innerHTML = message;
        messageLineElement.appendChild(messageLineProfileImageElement);
        messageLineElement.appendChild(messageLineNameElement);
        messageLineElement.appendChild(messageLineMessageElement);
        document.getElementById("textChat").appendChild(messageLineElement);
        document.getElementById("message").value = "";
    }
} 

function clearPage(){
    let textChat = document.getElementById('textChat').querySelectorAll('div');
    for (let i = textChat.length - 1; i > 0; i--){
        textChat[i].remove();
    }
}

document.getElementById('messagePostButton').addEventListener('click', function(event){
    let userName = currentUser.username;
    let userProfileImage = currentUser.profileImageSrc;
    let messageContent = document.getElementById("message").value;
    let date = new Date()
    postToPage(userName, userProfileImage, messageContent, date)

    // Pseudo Fake Response - Remove after presentation
    setTimeout(function(){
        let userPrajvirdeep = user3
        let nameP = userPrajvirdeep.username
        let imageP = userPrajvirdeep.profileImageSrc
        let messageP = "All good man"
        let date = new Date()
        postToPage(nameP, imageP, messageP, date)
    }, 2500);
});

function populateChat(listChats){
    for (let i = 0; i < listChats.length; i++){
        let chatMessage = listChats[i];
        let user = chatMessage[0];
        let name = user.username;
        let image = user.profileImageSrc;
        let message = chatMessage[1];
        let date = chatMessage[2];
        postToPage(name, image, message, date);
    }
}

let textChannels = document.getElementById("textChannels").querySelectorAll('p')
for (let i = 0; i < textChannels.length; i++){
    let channel = textChannels[i];
    channel.addEventListener('click', function(event){
        clearPage()
        populateChat(chatLog[channel.textContent]);
        document.getElementById('currentTextChannel').setAttribute('id', "");
        channel.parentNode.setAttribute('id', "currentTextChannel");
        document.getElementById('conversationColumn').querySelector('h3').textContent = channel.textContent.slice(2) + " Text Channel"
    });
}

let startLog = document.getElementById("textChannels").querySelector('p').textContent
populateChat(chatLog[startLog])