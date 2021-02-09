// Buttons
let reset = document.getElementsByTagName('button')[0];
let rock = document.getElementsByTagName('button')[1];
let paper = document.getElementsByTagName('button')[2];
let scissors = document.getElementsByTagName('button')[3];
let lizard = document.getElementsByTagName('button')[4];
let spock = document.getElementsByTagName('button')[5];
let gameIsLive = true

// Images
let playerImg = document.getElementById('playerImg');
playerImg.src = '../Images/question.png';
let botImg = document.getElementById('botImg');
botImg.src = '../Images/question.png';

function botMove(move){
    botImg.setAttribute('class', 'visible');
    let int = Math.floor(Math.random() * 5);

    if(int == 0){
        botImg.src = '../Images/rock.png';
        return 'rock';
    }
    else if(int == 1){
        botImg.src = '../Images/paper.png';
        return 'paper';
    }
    else if(int == 2){
        botImg.src = '../Images/scissors.png';
        return 'scissors';
    }
    else if(int == 3){
        botImg.src = '../Images/lizard.png';
        return 'lizard';
    }
    else{
        botImg.src = '../Images/spock.png';
        return 'spock';
    }
};

function result(player, bot){
    if(player == 'rock'){
        if(bot == 'rock'){
            document.getElementById('text').textContent = 'TIE!';
        }
        else if(bot == 'paper'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else if(bot == 'scissors'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else if(bot == 'lizard'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else{
            document.getElementById('text').textContent = 'YOU LOST!';
        }
    }
    else if(player == 'paper'){
        if(bot == 'rock'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else if(bot == 'paper'){
            document.getElementById('text').textContent = 'TIE!';
        }
        else if(bot == 'scissors'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else if(bot == 'lizard'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else{
            document.getElementById('text').textContent = 'YOU WON!';
        }
    }
    else if(player == 'scissors'){
        if(bot == 'rock'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else if(bot == 'paper'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else if(bot == 'scissors'){
            document.getElementById('text').textContent = 'TIE!';
        }
        else if(bot == 'lizard'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else{
            document.getElementById('text').textContent = 'YOU LOST!';
        }
    }
    else if(player == 'lizard'){
        if(bot == 'rock'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else if(bot == 'paper'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else if(bot == 'scissors'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else if(bot == 'lizard'){
            document.getElementById('text').textContent = 'TIE!';
        }
        else{
            document.getElementById('text').textContent = 'YOU WON!';
        }
    }
    else if(player == 'spock'){
        if(bot == 'rock'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else if(bot == 'paper'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else if(bot == 'scissors'){
            document.getElementById('text').textContent = 'YOU WON!';
        }
        else if(bot == 'lizard'){
            document.getElementById('text').textContent = 'YOU LOST!';
        }
        else{
            document.getElementById('text').textContent = 'TIE!';
        }
    }
};

reset.addEventListener('click', function(event){
    playerImg.setAttribute('class', 'hidden');
    botImg.setAttribute('class', 'hidden');
    playerImg.src = '../Images/question.png';
    botImg.src = '../Images/question.png';
    document.getElementById('text').textContent = 'Pick a move!';
    gameIsLive = true
});

rock.addEventListener('click', function(event){
    if(!gameIsLive){return}
    playerImg.setAttribute('class', 'visible');
    playerImg.src = '../Images/rock.png';
    bot = botMove('rock');
    result('rock', bot);
    gameIsLive = false
});

paper.addEventListener('click', function(event){
    if(!gameIsLive){return}
    playerImg.setAttribute('class', 'visible');
    playerImg.src = '../Images/paper.png';
    bot = botMove('paper');
    result('paper', bot);
    gameIsLive = false
});

scissors.addEventListener('click', function(event){
    if(!gameIsLive){return}
    playerImg.setAttribute('class', 'visible');
    playerImg.src = '../Images/scissors.png';
    bot = botMove('scissors');
    result('scissors', bot);
    gameIsLive = false
});

lizard.addEventListener('click', function(event){
    if(!gameIsLive){return}
    playerImg.setAttribute('class', 'visible');
    playerImg.src = '../Images/lizard.png';
    bot = botMove('lizard');
    result('lizard', bot);
    gameIsLive = false
});

spock.addEventListener('click', function(event){
    if(!gameIsLive){return}
    playerImg.setAttribute('class', 'visible');
    playerImg.src = '../Images/spock.png';
    bot = botMove('spock');
    result('spock', bot);
    gameIsLive = false
});
