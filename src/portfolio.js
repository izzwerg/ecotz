const track = document.querySelector('.portfolio-track');
  const items = document.querySelectorAll('.portfolio-item');
  const prevBtn = document.querySelector('.portfolio-nav.left');
  const nextBtn = document.querySelector('.portfolio-nav.right');

  let current = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    updateCarousel();
  });