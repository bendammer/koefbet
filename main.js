const nameInput = document.getElementById('name');
const betAmount = document.getElementById('bet-amount');
const bet = document.getElementById('bet');
const submitButton = document.querySelector('#submit-button');

const user = {
  name: nameInput,
  betamount: betAmount,
  bet: bet,
};

console.log(user);


submitButton.addEventListener('click', (e, user) => {

  e.preventDefault();

  console.log(user);

  nameInput.value = '';
  betAmount.value = '';
  bet.value = '';

});
