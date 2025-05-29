const choices = ['rock', 'paper', 'scissors'];

const emojiMap = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

const buttons = document.querySelectorAll('.choice-btn');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const statusEl = document.querySelector('.status');
const resultMessageEl = document.getElementById('result-message');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function resetAriaPressed() {
  buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
}

function updateScores(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreEl.textContent = `You: ${playerScore}`;
  computerScoreEl.textContent = `Computer: ${computerScore}`;
}

function playRound(playerChoice) {
  resetAriaPressed();
  const button = [...buttons].find(btn => btn.dataset.choice === playerChoice);
  if (button) button.setAttribute('aria-pressed', 'true');

  const computerChoice = getComputerChoice();

  // Update the displayed choices
  document.getElementById('player-choice').querySelector('.icon-large').textContent = emojiMap[playerChoice];
  document.getElementById('computer-choice').querySelector('.icon-large').textContent = emojiMap[computerChoice];

  // Determine the winner
  const result = determineWinner(playerChoice, computerChoice);

  // Update scores based on the result
  updateScores(result);

  // Prepare the result message
  let message = '';
  if (result === 'win') {
    message = 'You win! 🎉';
  } else if (result === 'lose') {
    message = 'You lose! 😢';
  } else {
    message = "It's a draw! 🤝";
  }

  // Update the result message in the UI
  resultMessageEl.textContent = message;
  resultMessageEl.className = 'result-message ' + result;

  // Update the status message
  statusEl.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${message}`;
}

// Event listeners for buttons
buttons.forEach(button =>
  button.addEventListener('click', () => {
    playRound(button.dataset.choice);
  })
);
