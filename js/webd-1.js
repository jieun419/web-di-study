/*nav*/
const navList = document.querySelectorAll("nav > ul > li");

navList.forEach((navItem) => {
  navItem.addEventListener("mouseenter", function () {
    this.querySelector(".submenu").style.height = "160px"
  })
  navItem.addEventListener("mouseleave", function () {
    this.querySelector(".submenu").style.height = "0"
  })
})

/*slider*/
const slider = document.querySelectorAll(".slider");

slider.forEach(img => {
  img.style.opacity = "0";
  img.style.transition = "all 1s";
});

slider[0].style.opacity = "1";

let currentIndex = 0;

setInterval(() => {
  let nextIndex = (currentIndex + 1) % slider.length;

  slider[nextIndex].style.opacity = "1"
  slider[currentIndex].style.opacity = "0"

  currentIndex = nextIndex
}, 3000)