const headNavMobile = document.querySelector('.head-nav-mobile');

headNavMobile.onclick = () => {

  document.querySelector('.head-mob-menu').classList.toggle('open');
}

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
  link.onclick = () => {
    document.querySelector('.head-mob-menu').classList.remove('open');
  }
})

const sections = document.querySelectorAll(".one-screen[id]");

const navLinks = document.querySelectorAll(".desc-link");
  function setActiveLink() {
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {     
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        // navLinks.forEach(link => link.classList.remove("active"));
        navLinks.forEach(link => {
          if (link.childNodes[0].href.includes(`#${section.id}`)) {
          link.classList.add("active")
          } else {
            link.classList.remove("active")
          }
        });
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();