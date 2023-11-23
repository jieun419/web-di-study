
//* MA1 - 하나씩 나오기
const navList1 = document.querySelectorAll("#header1 nav > ul > li");

navList1.forEach((sub) => {
  sub.addEventListener("mouseover", function () {
    this.querySelector(".submenu").style.maxHeight = "180px";
  })
  sub.addEventListener("mouseout", function () {
    this.querySelector(".submenu").style.maxHeight = "0";
  })
})

//* MA2 - 한 번에 나오기
const navList2 = document.querySelector("#header2 nav > ul");

navList2.addEventListener("mouseover", () => {
  navList2.querySelectorAll(".submenu").forEach((sub) => {
    sub.style.height = "180px";
  })
})

navList2.addEventListener("mouseout", () => {
  navList2.querySelectorAll(".submenu").forEach((sub) => {
    sub.style.height = "0";
  })
})

//* MA3 - 풀로 나오기
const header3 = document.querySelector("#header3");
const navList3 = document.querySelector("#header3 nav > ul");

navList3.addEventListener("mouseover", () => {
  header3.classList.add("active");
  navList3.querySelectorAll(".submenu").forEach((sub) => {
    sub.style.height = "180px";
  })
})

navList3.addEventListener("mouseout", () => {
  header3.classList.remove("active");
  navList3.querySelectorAll(".submenu").forEach((sub) => {
    sub.style.height = "0";
  })
})

//* MB1 - 하나 씩 나오기(아래)
const navList4 = document.querySelectorAll("#header4 nav > ul > li");

navList4.forEach((sub) => {
  sub.addEventListener("mouseover", function () {
    this.querySelector(".submenu").style.maxHeight = "180px";
  })
  sub.addEventListener("mouseout", function () {
    this.querySelector(".submenu").style.maxHeight = "0";
  })
})

//* MB2 - 하나 씩 나오기(우측)
const navList5 = document.querySelectorAll("#header5 nav > ul > li");

navList5.forEach((sub) => {
  sub.addEventListener("mouseover", function () {
    this.querySelector(".submenu").style.maxHeight = "180px";
  })
  sub.addEventListener("mouseout", function () {
    this.querySelector(".submenu").style.maxHeight = "0";
  })
})

//* MB3 - 풀로 나오기
const nav6 = document.querySelector("#menu6");
const navDropBox6 = document.querySelector("#header6 .drop-box6");

const navList6 = document.querySelector("#header6 nav > ul");
const submenu6 = document.querySelectorAll("#header6 .submenu");

nav6.addEventListener("mouseover", () => {
  nav6.classList.add("active");
})

nav6.addEventListener("mouseleave", () => {
  nav6.classList.remove("active");
})