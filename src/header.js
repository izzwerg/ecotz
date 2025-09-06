// const header = document.querySelector('.head');
// const main = document.querySelector('.main');
const headNavMobile = document.querySelector('.head-nav-mobile');

// window.onwheel = e => {
//   if(e.deltaY >= 0){
//     // Wheel Down
//     header.classList.add('sticky');
//   } else {
//     // Wheel Up
//     header.classList.remove('sticky');
//   }
// }

headNavMobile.onclick = () => {
  // header.classList.toggle('sticky');
  document.querySelector('.head-mob-menu').classList.toggle('open');
}