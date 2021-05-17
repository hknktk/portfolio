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


const callback = function (el, isIntersecting) {
  if(isIntersecting) {
      el.classList.add('inview');
  }
} 


const so2 = new ScrollObserver('.emphasis', callback);