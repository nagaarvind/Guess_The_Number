'use strict';
/*
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '20';
// document.querySelector('.score').textContent = ' 15';

// console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '__no Number';
    displayMessage('No number.......');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'correct number!...';
    displayMessage('correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //manipulate css in js
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!...' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high!...' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'you lost the game try again!...';
      displayMessage('You lost the game>>>');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'you lost the game try again!...';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'you lost the game try again!...';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
