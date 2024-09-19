const stars = document.querySelector("#stars");
const moon = document.querySelector("#moon");
const boat = document.querySelector("#boat");
const river = document.querySelector("#river");
const mt3 = document.querySelector("#mt3");
const mt4 = document.querySelector("#mt4");
const lee = document.querySelector("#lee");
const body = document.querySelector("body");
const audio = document.querySelector('audio');

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value * 5 + "px";
  moon.style.top = value * 3 + "px";
  mt3.style.top = value * 2 + "px";
  mt4.style.top = value + "px";
  boat.style.left = value * 1.5 + "px";
  boat.style.top = value + "px";
  river.style.top = value + "px";
  lee.style.transform = `translate(-50%,${value}px)`;
  if (value <= 0) {
    lee.style.transform = `translate( -50%,-50%)`;
    audio.pause();
    // audio.currentTime=0;
    

  } else {
    lee.style.transform = `translate(-50%,${value}px)`;
    lee.style.width = value + "px";
    lee.style.height = value + "px";
    audio.play();
    // lee.style.zIndex = 100; 
  }
  if (value > 100) {
    body.style.background = "linear-gradient(#376281,#10001f)";
  } else {
    body.style.background = "linear-gradient(#200016 , #10001f)";
  }
};
