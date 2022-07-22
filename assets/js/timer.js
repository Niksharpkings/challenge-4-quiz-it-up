const timerCountdown = document.querySelector(
  ".timerContainer .timerCountdown"
);
const timeBar = document.querySelector("aside .timeBar");

const timeCount = document.querySelector(".timerContainer .timerCountdown");
const quizAside = document.getElementsByClassName("quizAside")[0];
const startCountdownTimer = (_timeCount, duration) => {
  const exp = Date.now() + duration; //expires in now + duration milliseconds
  
  //callback using window.requestAnimationFrame if available else setTimeout at 60fps:
  const rAF =
    window.requestAnimationFrame ||
    ((callback) => {
      window.setTimeout(callback, 1000 / 60);
    });

  //left-pad with leading zeros
  const pad = (n, s = 2) => {
    return `00000${n}`.substr(-s);
  };

  (function update() {
    const n = Date.now();
    const e = exp - n;
    const ms = e % 1000;
    const s = (e / 1000) % 60 >> 0;
    const m = (e / (1000 * 60)) % 60 >> 0;

    if (e > 0) {
      // timeBar.style.width = `${(e / duration) * 100}%`;
      // timeBar.textContent = `${pad(m)}:${pad(s)}:${pad(ms, 3)}`;
      quizAside.style.backgroundSize = `${(e / duration) * 100}%`;
      timeCount.style.width = `${(e / duration) * 100}%`;
      timeCount.innerHTML = `${pad(m)}:${pad(s)}:${pad(ms, 3)}`;
      rAF(update);
    } else {
      window.cancelAnimationFrame(rAF);
    }
  })();
};

const now = (function () {
  const perf = window.performance || {};
  const fn = perf.now || perf.mozNow || perf.webkitNow || perf.msNow || perf.oNow;
  return fn ? fn.bind(perf) :
    () => new Date().getTime();
})();




console.log(timerCountdown);
console.log(timeBar);
console.log(timeCount);







const timerIcon = document.createElement("span");
timerIcon.classList.add("fas", "fa-fire");

const stopWatchIcon = document.createElement("span");
stopWatchIcon.classList.add("fa", "fa-stopwatch");

let startValue = 75.0;
let timeInterval;
let counterBarLine; //counterBarLine variable

startCountdownTimer(document.getElementById("timer"), 75000);