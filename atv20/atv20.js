const board = document.getElementById('board');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

const items = [
  '🍎','🍌','🍇','🍓','🍒','🍍','🥝','🍉',
  '🍎','🍌','🍇','🍓','🍒','🍍','🥝','🍉'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  board.innerHTML = '';
  message.textContent = '';
  [firstCard, secondCard] = [null, null];
  lockBoard = false;

  const shuffledItems = shuffle([...items]);
  shuffledItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.item = item;
    card.textContent = '';
    card.addEventListener('click', handleCardClick);
    board.appendChild(card);
  });
}

function handleCardClick() {
  if (lockBoard) return;
  if (this.classList.contains('revealed') || this.classList.contains('matched')) return;

  this.classList.add('revealed');
  this.textContent = this.dataset.item;

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.item === secondCard.dataset.item;

  if (isMatch) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetTurn();
    checkGameOver();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      firstCard.textContent = '';
      secondCard.textContent = '';
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function checkGameOver() {
  const matchedCards = document.querySelectorAll('.card.matched');
  if (matchedCards.length === items.length) {
    message.textContent = 'Parabéns! Você concluiu o jogo!';
  }
}

restartBtn.addEventListener('click', createBoard);

createBoard();