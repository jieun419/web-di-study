//* SA1 - fade 슬라이드 전환
const slider1 = document.querySelectorAll("#slider-wrap1 .slider");

let currentIndex1 = 0;

setInterval(() => {
  let nextIndex1 = (currentIndex1 + 1) % slider1.length;

  slider1[currentIndex1].style.opacity = "0";
  slider1[nextIndex1].style.opacity = "1";

  currentIndex1 = nextIndex1;
}, 3000)

//* SA2 - 좌우 슬라이드 전환
const sliderCont2 = document.querySelector("#slider-wrap2 .slider-cont");
const slider2 = sliderCont2.querySelectorAll(".slider");
const sliderClone2 = sliderCont2.firstElementChild.cloneNode(true);

sliderCont2.appendChild(sliderClone2);

let currentIndex2 = 0;

setInterval(() => {
  currentIndex2 = currentIndex2 + 1
  sliderCont2.style.marginLeft = `${-currentIndex2 * 100}%`;
  sliderCont2.style.transition = "all 0.6s";

  if (currentIndex2 === slider2.length) {
    setTimeout(() => {
      sliderCont2.style.marginLeft = "0";
      sliderCont2.style.transition = "0s";
      currentIndex2 = 0;
    }, 700)
  }
}, 3000)


//* SA3 - 상하 슬라이드 전환
const sliderCont3 = document.querySelector("#slider-wrap3 .slider-cont");
const slider3 = sliderCont3.querySelectorAll(".slider");
const sliderClone3 = sliderCont3.firstElementChild.cloneNode(true);

sliderCont3.appendChild(sliderClone3);

let currentIndex3 = 0;

setInterval(() => {
  currentIndex3 = currentIndex3 + 1;

  sliderCont3.style.marginTop = `${-currentIndex3 * 300}px`;
  sliderCont3.style.transition = "all 0.6s";

  if (currentIndex3 === slider3.length) {
    setTimeout(() => {
      sliderCont3.style.marginTop = "0";
      sliderCont3.style.transition = "0s";

      currentIndex3 = 0;
    }, 700)
  }
}, 3000)