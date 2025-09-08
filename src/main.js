let isScrolling = false;

window.addEventListener("wheel", (e) => {
    let isMenuOpen = document.querySelector('.head-mob-menu').classList.contains('open');
    if (isMenuOpen) return; // no scrolling when menu is open
  if (isScrolling) return; 
  isScrolling = true;

  const direction = e.deltaY > 0 ? 1 : -1;
  const nextPos = window.scrollY + direction * window.innerHeight;

  window.scrollTo({
    top: nextPos,
    behavior: "smooth"
  });

  setTimeout(() => isScrolling = false, 800); // delay to prevent rapid scrolling
});

const whyBtn = document.querySelector('.modal-btn')
console.log(
  whyBtn
);

whyBtn.onclick = () => {
  document.querySelector('.why').classList.add('open');
}
