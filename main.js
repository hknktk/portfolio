const menuButton = document.querySelector('.js-menuButton');
const menu = document.querySelector('.js-menu');

function menuOpenClose(){
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
}

menuButton.addEventListener('click', () =>{
  menuOpenClose();
})

const menulist = document.querySelector('.menu--list');
menulist.addEventListener('click' , () =>{
  menuOpenClose();
})
