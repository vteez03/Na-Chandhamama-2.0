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

function changeNoButtonText() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  noBtn.textContent = randomMessage;
}

function moveNoButton() {
  const containerRect = document.querySelector('.container').getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', () => {
  changeNoButtonText();
  moveNoButton();
});

noBtn.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevents weird touch behaviors
  changeNoButtonText();
  moveNoButton();
});

// **Yes Button Click Redirect**
yesBtn.addEventListener('click', () => {
  window.location.href = 'yes_page.html';
});

// **No Button Click Pulse Yes Button**
noBtn.addEventListener('click', () => {
  yesBtn.classList.add('pulse');
  setTimeout(() => {
    yesBtn.classList.remove('pulse');
  }, 1000); // Duration of the pulse animation
});
