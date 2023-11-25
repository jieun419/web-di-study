//navList
const navList = document.querySelector(".nav > ul");
const submenu = navList.querySelectorAll(".submenu")

navList.addEventListener("mouseover", () => {
  submenu.forEach((sub) => {
    sub.style.height = "240px";
  })
})

navList.addEventListener("mouseout", () => {
  submenu.forEach((sub) => {
    sub.style.height = "0";
  })
})

//slider
const sliderCont = document.querySelector(".slider-cont");
const slider = sliderCont.querySelectorAll(".slider");
const sliderClon = sliderCont.firstElementChild.cloneNode(true);

sliderCont.appendChild(sliderClon);
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

//tab
const tabBtn = document.querySelectorAll(".tab-menu ul li a");
const tabCont = document.querySelectorAll(".tab-content .tab-cont");

tabCont.forEach(tabcont => { tabcont.style.display = "none" })
tabCont[0].style.display = "flex";
tabBtn[0].classList.add("active");

tabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabBtn.forEach(tabtn => { tabtn.classList.remove("active"); })
    tabCont.forEach(tabcont => { tabcont.style.display = "none" })
    tab.classList.add("active");
    tabCont[index].style.display = "flex";
  })
})

//modal
const modal = document.querySelector(".modal-popup");
const modalCloseBtn = document.querySelector(".close-modal");
const modalOpenBtn = document.querySelector(".open-modal");

modal.style.display = "none";

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
})