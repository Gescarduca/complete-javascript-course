/* 'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//listening to events

let number = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highscore = 0;
console.log(number);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //this works because if no input result is 0
  //0 is falsey value
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } else if (guess === number) {
    //document.querySelector('.number').textContent = number;
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    scoreNumber++;
    document.querySelector('.score').textContent = scoreNumber;

    if (scoreNumber > highscore) {
      document.querySelector('.highscore').textContent = scoreNumber;
    }
  } else if (guess !== number) {
    if (scoreNumber > 1) {
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
      //decreaseScore(scoreNumber);
    }
  } else {
    displayMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
  }

  /*   else if (guess > number) {
    //document.querySelector('.message').textContent = 'Too High!';
    displayMessage('Too High!');
    decreaseScore(scoreNumber);
  } else if (guess < number) {
    //document.querySelector('.message').textContent = 'Too Low!';
    displayMessage('Too Low!');
    decreaseScore(scoreNumber);
  } else {
    document.querySelector('.message').textContent = 'You Lost the Game!';
  }
} */
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number + 'In again button');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').value = '?';
  document.querySelector('.guess').value = '';
  console.log(number);
  displayMessage('Start guessing...');
  document.querySelector('.check').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function decreaseScore(scoreNumber) {
  console.log(scoreNumber + 'In decrease score');
  scoreNumber--;
  document.querySelector('.score').textContent = scoreNumber;
}

function increaseScore(scoreNumber) {
  scoreNumber++;
  document.querySelector('.score').textContent = scoreNumber;
}
