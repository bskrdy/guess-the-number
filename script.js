'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20, highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const bodyBackground = function(color){
    document.querySelector('body').style.backgroundColor = color;
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No Number!');
    }
    else if(guess === secretNumber){
        displayMessage('Correct Number!');
        displayNumber(secretNumber);
        bodyBackground('#60b347');
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('You lost the game!');
            bodyBackground('red');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    document.querySelector('.guess').value = '';
    bodyBackground('grey');
    document.querySelector('.number').style.width = '15rem';
});