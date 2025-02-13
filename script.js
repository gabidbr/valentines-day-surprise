// Add falling hearts
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Handle button clicks
document.getElementById('yesButton').addEventListener('click', () => {
    window.location.href = 'quiz.html'; // Redirect to the quiz page
  });
  
  document.getElementById('noButton').addEventListener('mouseover', () => {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * 80 + 'vw';
    noButton.style.top = Math.random() * 80 + 'vh';
  });