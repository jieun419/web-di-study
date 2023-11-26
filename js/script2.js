//navList
const navList = document.querySelector('.nav .gnb');
const submenu = document.querySelectorAll('.submenu');

navList.addEventListener('mouseover', () => {
  navList.classList.add('active');
  submenu.forEach((sub) => {
    sub.classList.add('active')
  })
})

navList.addEventListener('mouseout', () => {
  navList.classList.remove('active');
  submenu.forEach((sub) => {
    sub.classList.remove('active')
  })
})

//slider
const sliderCont = document.querySelector('.slider-cont');
const slider = sliderCont.querySelectorAll('.slider');

let currentIndex = 0;

setInterval(() => {
  let nextIndex = (currentIndex + 1) % slider.length;
  slider[currentIndex].style.opacity = '0';
  slider[nextIndex].style.opacity = '1';

  currentIndex = nextIndex;
}, 3000)

//tabCont
const tabBtn = document.querySelectorAll('.tab-button ul li a');
const tabCont = document.querySelectorAll('.tab-cont .tab-item');

tabBtn.forEach((tabItem, idx) => {
  tabItem.addEventListener('click', () => {
    tabBtn.forEach((tabBtns) => tabBtns.classList.remove('active'));
    tabCont.forEach((tabConts) => tabConts.style.display = 'none');

    tabItem.classList.add('active');
    tabCont[idx].style.display = 'flex';
  })
})

//modal
const modal = document.querySelector('.modal-popup');
const modalCloseBtn = document.querySelector('.close-popup');
const modalOpenBtn = document.querySelector('.open-popup');

modalOpenBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})