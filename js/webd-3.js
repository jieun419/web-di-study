// navList
const navList = document.querySelectorAll(".aside nav > ul > li");

navList.forEach(sub => {
  sub.addEventListener("mouseover", function () {
    this.querySelector(".submenu").style.maxHeight = "200px"
  })
  sub.addEventListener("mouseout", function () {
    this.querySelector(".submenu").style.maxHeight = "0"
  })
})

// sliderCont
const sliderCont = document.querySelector(".slider-cont");
const slider = sliderCont.querySelectorAll(".slider");
const sliderClone = sliderCont.firstElementChild.cloneNode(true);

sliderCont.appendChild(sliderClone);

let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex + 1;

  sliderCont.style.marginTop = `${-(currentIndex * 350)}px`;
  sliderCont.style.transition = "all 0.6s";

  if (currentIndex === slider.length) {
    setTimeout(() => {
      sliderCont.style.marginTop = "0";
      sliderCont.style.transition = "0s";
      currentIndex = 0;
    }, 700)
  }

}, 3000)

// modal
const modal = document.querySelector(".modal-popup");
const modalOpenBtn = document.querySelector(".modal-open");
const modalCloseBtn = document.querySelector(".modal-close");

modal.style.display = "none";

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
})