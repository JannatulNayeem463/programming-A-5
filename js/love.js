let likeCount =0;

  const likeDisplay = document.getElementById("like-count");
  const heartButtons = document.querySelectorAll(".heart-btn");

  heartButtons.forEach(button => {
    button.addEventListener("click", () => {
      likeCount++;
      likeDisplay.textContent = likeCount;
    });
  });

