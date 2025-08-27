
  
  let copyCounter = 0;

  
  const copyCountSpan = document.getElementById('copyCount');
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      copyCounter++; 
      copyCountSpan.textContent = copyCounter; 
    });
  });

