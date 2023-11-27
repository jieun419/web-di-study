const navList = document.querySelectorAll('.nav .gnb > ul > li');

navList.forEach(function (sub) {
  sub.addEventListener('mouseover', function () {
    this.querySelector('.submenu').style.maxHeight = '200px'
  })
  sub.addEventListener('mouseout', function () {
    this.querySelector('.submenu').style.maxHeight = '0px'
  })
})


const sliderCont = document.querySelector('.slider-cont');
const slider = document.querySelectorAll('.slider');
const sliderClone = sliderCont.firstElementChild.cloneNode(true);

sliderCont.appendChild(sliderClone);

let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex + 1;
  sliderCont.style.marginTop = `${-currentIndex * 400}px`;
  sliderCont.style.transition = 'all 0.6s';

  if (currentIndex === slider.length) {
    sliderCont.style.marginTop = '0';
    sliderCont.style.transition = '0s';
    currentIndex = 0;
  }
}, 3000)


const tabBtns = document.querySelectorAll('.tab-buttons ul li a');
const tabConts = document.querySelectorAll('.tab-conts .tab-item');


tabBtns.forEach((tabBtn, idx) => {
  tabBtn.addEventListener('click', () => {
    tabConts.forEach((item) => item.classList.remove('active'));
    tabBtns.forEach((item) => item.classList.remove('active'));

    tabBtn.classList.add('active');
    tabConts[idx].classList.add('active');
  })
})


const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');
const modalOpenBtn = document.querySelector('.modal-open');

modalOpenBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})