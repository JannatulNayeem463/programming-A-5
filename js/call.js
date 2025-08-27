let coinCount = 100 ;
const coinDisplay = document.getElementById('coinCount');
const callButtons = document.querySelectorAll('.call-btn');
const callHistory = document.getElementById('callHistory');

callButtons.forEach(button => {
  button.addEventListener('click', () => {
    const serviceName = button.dataset.name;
    const serviceNumber = button.dataset.number;

    // Check if user has enough coins
    if (coinCount < 20) {
      alert('Insufficient coins to make a call.');
      return;
    }

    
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    //  20 coins
    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    
    const li = document.createElement('li');
    li.textContent = `${serviceName} - ${serviceNumber}`;
    callHistory.appendChild(li);
  });
});
