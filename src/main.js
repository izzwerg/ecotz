const sections = document.querySelectorAll(".one-screen");
  let current = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    current = index;
    setTimeout(() => isScrolling = false, 800);
  }

  // --- Скрол колесиком ---
  window.addEventListener("wheel", (e) => {
    let isMenuOpen = document.querySelector('.head-mob-menu')?.classList.contains('open');
    if (isMenuOpen) return; // блокуємо, якщо меню відкрите
    if (isScrolling) return;

    e.preventDefault(); // блокуємо нативний скрол

    if (e.deltaY > 0) {
      scrollToSection(current + 1);
    } else {
      scrollToSection(current - 1);
    }
  }, { passive: false });

  // --- Свайпи ---
  let touchStartY = 0;
  let touchEndY = 0;

  window.addEventListener("touchstart", (e) => {
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchend", (e) => {
    let isMenuOpen = document.querySelector('.head-mob-menu')?.classList.contains('open');
    if (isMenuOpen) return; // блокуємо свайпи при відкритому меню
    if (isScrolling) return;

    touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (Math.abs(deltaY) < 50) return; // маленький рух — ігноруємо

    if (deltaY > 0) {
      scrollToSection(current + 1); // свайп вгору → вниз
    } else {
      scrollToSection(current - 1); // свайп вниз → вгору
    }
  }, { passive: true });

window.addEventListener("keydown", (e) => {
    let isMenuOpen = document.querySelector('.head-mob-menu')?.classList.contains('open');
    if (isMenuOpen) return;
    if (isScrolling) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      scrollToSection(current + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      scrollToSection(current - 1);
    }
  });

const whyBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
closeBtn.onclick = () => {
  document.querySelector('.why').classList.remove('open');
}

whyBtn.onclick = () => {
  document.querySelector('.why').classList.add('open');
}
