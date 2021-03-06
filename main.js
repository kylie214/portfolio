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
  navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});

//Handle click on 'contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // 스크롤이 되면 우리가 원하는 함수()를 호출해줘
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible')
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});

// Project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
        // 필터가 null이면 아무것도 해주지 않는다
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    e.target.classList.add('selected');
    // ? 왼쪽의 내용이 맞으면 실행하고 아니면 ? 오른쪽을 실행해라
    
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
