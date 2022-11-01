let time = document.querySelector('.time')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let m=0,s=0,ms=0;
let counter;

start.addEventListener('click', ()=> {
  if (!counter) {
  counter = setInterval(runTime, 1);

  function runTime() {
    if (m < 10) {
    time.textContent = `0${m}:0${s}:${ms}`;
    ms++;
    }
    if (s < 10)  {
        time.textContent = `0${m}:0${s}:${ms}`;
        ms++;
        }
    if (ms > 100) {
        ms = 0;
        s++;
      }
      if (s>60) {
        ms = 0;
        m++;
      }
  }
  }
})

stop.addEventListener('click', ()=> {
  if (counter) {
    clearInterval();

  }
})