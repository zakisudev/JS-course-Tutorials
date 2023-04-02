const timerDayEl = document.querySelector(".timer_day");
const timerHourEl = document.querySelector(".timer_hour");
const timerMinEl = document.querySelector(".timer_minute");
const timerSecEl = document.querySelector(".timer_second");



function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds/1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60 );
  let days = Math.floor(hours / 24 );

  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 *60) - (hours * 60 * 60) - (minutes * 60);
  if (days < 10)
  {
    days = "0" + days;
  }
  if (hours < 10)
  {
    hours = "0" + hours;
  }
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }
  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds
  };
  getTimeDifference(startDate, endDate);
}



let timer = setInterval(function() {
  const startDate = new Date();
  const endDate = new Date ("March 14, 2024 00:00:00");

  let timeDifferenceObj = getTimeDifference(startDate, endDate);

  timerDayEl.textContent = timeDifferenceObj.rDays;
  timerHourEl.textContent = timeDifferenceObj.rHours;
  timerMinEl.textContent = timeDifferenceObj.rMinutes;
  timerSecEl.textContent = timeDifferenceObj.rSeconds;
}, 1000);