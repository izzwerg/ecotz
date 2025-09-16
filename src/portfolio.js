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

  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) < 50) return; // ігноруємо маленькі рухи

    if (deltaX > 0) {
      // свайп вліво → наступний
      current = (current + 1) % items.length;
    } else {
      // свайп вправо → попередній
      current = (current - 1 + items.length) % items.length;
    }
    updateCarousel();
  }, { passive: true });