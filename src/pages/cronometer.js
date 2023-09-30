// Import the function from lostPage.js
import { initLostPage } from "./lostPage.js";

let interval;
let minutes = 0;
let seconds = 0;

function updateTimer(cronometer) {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;

  cronometer.textContent = minutesStr + ':' + secondsStr;

  // Check if one minute has passed, then initialize the lost page
  if (minutes >= 1) {
    initLostPage();
  }
}

export function getElapsedTime() {
  return minutes * 60 + seconds;
}

export function startTimer(cronometer) {
  if (!interval) {
    interval = setInterval(() => updateTimer(cronometer), 1000);
  }
}

export function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

export function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  cronometer.textContent = '00:00';
}
