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
