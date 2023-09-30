//Declare variables for timer and DOM elements
import { initLostPage } from "./lostPage.js";

let interval;
let minutes = 0;
let seconds = 0;

const cronometer = document.getElementById('cronometer');


// Function to update the timer
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  //Format minutes and seconds as strings with leading zeros
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;

  //Update the timer display
  cronometer.textContent = minutesStr + ':' + secondsStr;

  if (minutes >= 1) {
    stopTimer();
    initLostPage();
  }
}

export function getElapsedTime() {
  return minutes * 60 + seconds;
}

// Function to start the timer
export function startTimer() {
  if (!interval) {
    interval = setInterval(updateTimer, 1000);
  }
}

export function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

//Function to reset the timer
export function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  cronometer.textContent = '00:00';
}
