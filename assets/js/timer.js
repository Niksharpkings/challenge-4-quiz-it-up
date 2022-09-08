const timerCountdown = document.querySelector(
  ".timerContainer .timerCountdown"
);
const timeBar = document.querySelector("aside .timeBar");

const timeCount = document.querySelector(".timerContainer .timerCountdown");
const quizAside = document.getElementsByClassName("quizAside")[0];
const startCountdownTimer = (_timeCount, duration) => {
  const exp = Date.now() + duration; //expires in now + duration milliseconds
  
  //im having a hard time relocating where i got the code below. it was a jsfiddle from a stackoverflow about something about milliseconds. i couldn't find the bookmark or history on it..
  //the const rAF to windows can is not my code got it from a random jsfiddle mentioned above, except the quizAside and timecountdown. if i ever find it, i will source it right away to be fair.
  // i was in a rush,very steep deadline, i will now make sure i source my code every time.
  
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
      quizAside.style.backgroundSize = `${(e / duration) * 100}%`;
      timeCount.style.width = `${(e / duration) * 100}%`;
      timeCount.innerHTML = `${pad(m)}:${pad(s)}:${pad(ms, 3)}`;
      rAF(update);
    } else {
      window.cancelAnimationFrame(rAF);
    }
  })();
};

//I can't find the original original site i the code below from, it had a amazing great explanation on what it does. , spent 2 hour looking thru google search, no luck, history deleted after 30days...
// best i can reference are these two below.
//https://www.webperf.tips/tip/performance-timing-markers/
//https://gist.github.com/arteg/3343958
const now = (function () {
  const perf = window.performance || {};
  const fn = perf.now || perf.mozNow || perf.webkitNow || perf.msNow || perf.oNow;
  return fn ? fn.bind(perf) :
    () => new Date().getTime();
})();


const timerIcon = document.createElement("span");
timerIcon.classList.add("fas", "fa-fire");

const stopWatchIcon = document.createElement("span");
stopWatchIcon.classList.add("fa", "fa-stopwatch");

startCountdownTimer(document.getElementById("timer"), 75000);