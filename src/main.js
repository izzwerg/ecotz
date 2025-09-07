let isScrolling = false;

window.addEventListener("wheel", (e) => {
  if (isScrolling) return; 
  isScrolling = true;

  const direction = e.deltaY > 0 ? 1 : -1;
  const nextPos = window.scrollY + direction * window.innerHeight;

  window.scrollTo({
    top: nextPos,
    behavior: "smooth"
  });

  setTimeout(() => isScrolling = false, 800); // затримка для завершення анімації
});