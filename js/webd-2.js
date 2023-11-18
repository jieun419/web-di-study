// nav
const header = document.querySelector(".header");
const navList = header.querySelector("nav > ul");

navList.addEventListener("mouseover", function () {
  navList.querySelectorAll(".submenu").forEach(sub => {
    sub.classList.add("active")
  })
  header.classList.add("active")
})

navList.addEventListener("mouseout", function () {
  navList.querySelectorAll(".submenu").forEach(sub => {
    sub.classList.remove("active")
  })
  header.classList.remove("active")
})

// slider
const sliderCont = document.querySelector(".slider-cont");
const slider = sliderCont.querySelectorAll(".slider");
const sliderClone = sliderCont.firstElementChild.cloneNode(true);

sliderCont.appendChild(sliderClone);

let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex + 1;

  sliderCont.style.marginLeft = `${-(currentIndex * 100)}%`;
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
const modal = document.querySelector(".modal-popup");
const modalOpenBtn = document.querySelector(".modal-open");
const modalCloseBtn = document.querySelector(".modal-close");

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
})