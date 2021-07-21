'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
//    console.log(window.scrollY);
//    console.log('navbarHeight: ${navbarHeight}');
// scroll할때 높이 알려주는것과 네비높이 알려주는것
   if (window.scrollY > navbarHeight){
       navbar.classList.add('navbar--dark');
   } else{
       navbar.classList.remove('navbar--dark');
   }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    // 클릭이 되면 우리가 만든 함수가 호출이 되도록 하는 것
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
    scrollIntoView(link);
});

//Handle click on 'contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}