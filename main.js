const nameInput = document.getElementById('name').value;
const betAmount = document.getElementById('bet-amount').value;
const bet = document.getElementById('bet').value;
const submitButton = document.querySelector('#submit-button');
const thankYouNote = document.getElementById('thank-you');

const user = {
  name: nameInput,
  betamount: betAmount,
  bet: bet,
};

console.log(user);

submitButton.addEventListener('click', (e) => {

  e.preventDefault();

  nameInput.value = '';
  betAmount.value = '';
  bet.value = '';

  thankYouNote.style = 'opacity: 1;';
});
