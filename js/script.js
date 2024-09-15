document.addEventListener("DOMContentLoaded", function(event) {


//Burger
const burger = document?.querySelector('[data-burger]');
const header__nav = document?.querySelector('[data-header__nav]');
const navItems = header__nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;

console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  header__nav?.classList.toggle('header__nav--visible');
  search.classList.remove('search__show');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    header__nav?.classList.remove('header__nav--visible');
  });
});


// Search
const searchOpen = document.querySelector('.search__btn');
const search = document.querySelector('.search__form');
const searchClose = document.querySelector('.search__close');


searchOpen.addEventListener('click', () => {
  search.classList.add('search__show');
  body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  header__nav?.classList.remove('header__nav--visible');

});

searchClose.addEventListener('click', () => {
  search.classList.remove('search__show')
});

//Swiper
const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 5000,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slideToClickedSlide: true,
  loop: true,
});

//Tab
let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsItem = document.querySelectorAll('.tabs__text');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn--active') });
    e.currentTarget.classList.add('tabs__btn--active');

    tabsItem.forEach(function (element){ element.classList.remove('tabs__text--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__text--active');
  });
});


//Accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion-active',
});

});
