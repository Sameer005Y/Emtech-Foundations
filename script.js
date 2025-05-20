const cards = document.querySelectorAll('.cards');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  cards.forEach((card, index) => {
    const offset = index * window.innerHeight;
    if (scrollY >= offset) {
      card.style.transform = 'scale(1.05)';
    } else {
      card.style.transform = 'scale(1)';
    }
  });
});


