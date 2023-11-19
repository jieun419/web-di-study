const navList = document.querySelectorAll("nav > ul > li");

navList.forEach(function (sub) {
  sub.addEventListener("mouseover", function () {
    this.querySelector(".submenu").style.maxHeight = "200px";
  })
  sub.addEventListener("mouseout", function () {
    this.querySelector(".submenu").style.maxHeight = "0";
  })
})


const sliderCont = document.querySelector(".slider-cont");
const slider = sliderCont.querySelectorAll(".slider");
const sliderClone = sliderCont.firstElementChild.cloneNode(true);

sliderCont.appendChild(sliderClone);

let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex + 1;

  sliderCont.style.marginTop = `${-currentIndex * 400}px`;
  sliderCont.style.transition = "all 0.6s";

  if (currentIndex === slider.length) {
    setTimeout(() => {
      sliderCont.style.marginTop = "0";
      sliderCont.style.transition = "0s";

      currentIndex = 0;
    }, 700)
  }

}, 3000)


const modal = document.querySelector(".modal");
const modalOpenBtn = document.querySelector(".modal-open");
const modalCloseBtn = document.querySelector(".modal-close");

const modalStyle = (disStyle) => {
  modal.style.display = disStyle;
}

modalOpenBtn.addEventListener("click", () => modalStyle("block"))
modalCloseBtn.addEventListener("click", () => modalStyle("none"))