var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    spaceBetween: 80,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        575:{
            slidesPerView : 2,
        },
        768:{
            slidesPerView : 2,
        },
        1024:{
            slidesPerView :3,
        },
        1200:{
            slidesPerView: 3,
        }
    }
});
let btnButton = document.querySelector('.btn__banner');
btnButton.addEventListener('click', clickSearch);
function clickSearch (){
    let fa = document.querySelector('.fa-search');
    fa.classList.toggle('btnActive');
}
document.addEventListener('DOMContentLoaded', () => {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval( () => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("counter1",0,37,3000);
    counter("counter2",100,80,3000);
    counter("counter3",1000,837,3000);
})
// slider banner
let slider = document.querySelector('.slider__items')
let isDown = false;
let slideX;
let scrollLeft = false;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    slideX = e.pageX - slider.offsetLeft;
});
slider.addEventListener('mouseleave', (e) => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', (e) =>{
    isDown = false;
    slider.classList.remove('active');
})
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slideX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

// button scroll
let btnn = document.querySelector('.btn');
window.onscroll = function (){
    buttonScroll();
}
function buttonScroll (){
    if(document.body.scrollTop  > 0 || document.documentElement.scrollTop > 0){
        btnn.style.right = '20px';
        btnn.style.transition = '0.5s';
    }else{
        btnn.style.right = '-50%';
    }
}
btnn.addEventListener('click', btnClick);
function btnClick (e){
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// stikcy
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 0);
});
// hamburger
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('navShow');
    hamburger.classList.toggle('hamburgerBar');
});
// ul active
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
li.forEach(current => {
  current.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');

    current.classList.toggle('active');
  });   
});
// button not function
let btnNotFunction = document.getElementsByClassName('Tombol');
for(let i = 0; i < btnNotFunction.length; i++){
    btnNotFunction[i].addEventListener('click', notFunction);
}
function notFunction (){
    window.alert("Sorry, This button cannot use")
}

