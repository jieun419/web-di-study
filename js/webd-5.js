//nav
const navList = document.querySelectorAll("nav > ul > li")

navList.forEach(function (sub) {
  sub.addEventListener("mouseover", function () {
    this.querySelector(".submenu").style.maxHeight = "200px";
  })
  sub.addEventListener("mouseout", function () {
    this.querySelector(".submenu").style.maxHeight = "0px";
  })
})

//slider
const sliderCont = document.querySelector(".slider-cont");
const slider = sliderCont.querySelectorAll(".slider");
const sliderClone = sliderCont.firstElementChild.cloneNode(true);

sliderCont.appendChild(sliderClone);
sliderCont.style.width = `${(slider.length + 1) * 100}%`;

let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex + 1;

  sliderCont.style.marginLeft = `${-currentIndex * 100}%`;
  sliderCont.style.transition = "all 0.6s";

  if (currentIndex === slider.length) {
    setTimeout(() => {
      sliderCont.style.marginLeft = "0";
      sliderCont.style.transition = "0s";
      currentIndex = 0;
    }, 700)
  }

}, 3000)

//modal
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");
const modalOpenBtn = document.querySelector(".modal-open");

const modalToggle = (disStyle) => {
  modal.style.display = disStyle;
}

modalOpenBtn.addEventListener("click", () => modalToggle("block"))

modalCloseBtn.addEventListener("click", () => modalToggle("none"))