/* 'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//listening to events

const number = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = Number(document.querySelector('.score').textContent);

document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //this works because if no input result is 0
  //0 is falsey value
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  }
    else if (guess === number) {
      //document.querySelector('.number').textContent = number;
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      increaseScore(scoreNumber);
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Too High!';
      decreaseScore(scoreNumber);
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'Too Low!';
      decreaseScore(scoreNumber);
    }
   else {
    document.querySelector('.message').textContent = 'You Lost the Game!';
  }
});

function decreaseScore(scoreNumber) {
  console.log(scoreNumber);
  scoreNumber--;
  document.querySelector('.score').textContent = scoreNumber;
}

function increaseScore(scoreNumber) {
  scoreNumber++;
  document.querySelector('.score').textContent = scoreNumber;
}
