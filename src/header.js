const header = document.querySelector('.head');
const main = document.querySelector('.main');
window.onwheel = e => {
  if(e.deltaY >= 0){
    // Wheel Down
    header.classList.remove('sticky');
  } else {
    // Wheel Up
    header.classList.add('sticky');
  }
}