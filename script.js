const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const gif = document.querySelector('.gif');

const messages = [
  "Nijamganaaa🥺?",
  "Malli alochinchu??",
  "Inko sari alochinchu bujji....",
  "Na bangaram kadhu🥺...",
  "Just think about it!",
  "Nuvvu kadhu ante, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Sare ithey, inka adaganule😔...",
  "Vadhuluthana enti, yes chepochuga! ❤"
];

noBtn.addEventListener('mouseover', () => {
  const containerRect = document.querySelector('.container').getBoundingClientRect();
  const gifRect = gif.getBoundingClientRect();

  const safeArea = {
    top: containerRect.top,
    bottom: gifRect.top - noBtn.offsetHeight,
    left: containerRect.left,
    right: containerRect.right - noBtn.offsetWidth
  };

  const randomX = Math.floor(Math.random() * (safeArea.right - safeArea.left)) + safeArea.left;
  const randomY = Math.floor(Math.random() * (safeArea.bottom - safeArea.top)) + safeArea.top;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // **Fix: Ensure No Button Text Changes Correctly**
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  noBtn.textContent = randomMessage;

  // **Yes Button Expands on Hover**
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize * 1.05}px`;

  // **Yes Button Color Changes**
  const colors = ['#e91e63', '#c2185b', '#ff4081', '#f50057'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  yesBtn.style.backgroundColor = randomColor;
});

// **Yes Button Click Redirect**
yesBtn.addEventListener('click', () => {
  window.location.href = 'yes_page.html';
});
