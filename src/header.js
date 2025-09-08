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