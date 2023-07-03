const btnStart = document.querySelector(".start");
const btnstop = document.querySelector(".stop");
const btnreset = document.querySelector(".reset");
let hrs = (min = sec = ms = 0),
  startTimer;
btnStart.addEventListener("click", () => {
  btnStart.classList.add("start-active");
  btnstop.classList.remove("stop-active");
  startTimer = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateDisply();
  }, 10);
});
btnstop.addEventListener("click", () => {
  btnStart.classList.remove("start-active");
  btnstop.classList.add("stop-active");
  clearInterval(startTimer);
});
btnreset.addEventListener("click", function () {
  hrs = min = sec = ms = 0;
  clearInterval(startTimer);
  updateDisply();
  btnStart.classList.remove("start-active");
  btnstop.classList.remove("stop-active");
});
function updateDisply() {
  //formeterd display
  Phrs = hrs < 10 ? "0" + hrs : hrs;
  Pmin = min < 10 ? "0" + min : min;
  Psec = sec < 10 ? "0" + sec : sec;
  Pms = ms < 10 ? "0" + ms : ms;
  document.querySelector(".hrs").innerText = Phrs;
  document.querySelector(".min").innerText = Pmin;
  document.querySelector(".ms").innerText = Pms;
  document.querySelector(".sec").innerText = Psec;
}
