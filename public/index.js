const username = document.getElementById('name');
const bank = document.getElementById('bank');
const stake = document.getElementById('stake');
const bet = document.getElementById('bet');
const submitButton = document.getElementById('submit-button');
const thankYouNote = document.getElementById('thank-you');

submitButton.addEventListener('click', (e) => {

  const user = {
    username: username.value,
    bank: bank.value,
    stake: stake.value,
    bet: bet.value
  };

  console.log(user);
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }; 
  
  fetch('http://localhost:3000/api', options).then(response => {
    console.log(response); 
  }); /* hier kommt nen promise zurück */

  e.preventDefault();

  username.value = '';
  bank  .value = '';
  stake.value = '';
  bet.value = '';

  thankYouNote.style = 'opacity: 1;';
});
