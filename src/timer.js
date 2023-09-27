//Declare variables for timer and DOM elements
let interval;
let minutes = 0;
let seconds = 0;

const cronometer = document.getElementById("cronometer");
const playButton = document.getElementById("playButton");
const resetButton = document.getElementById("resetButton");

// Add event listener to buttons
playButton.addEventListener("click", function () {
    startTimer();
});

resetButton.addEventListener("click", function () {
    resetTimer();
});

// Function to update the timer
function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    //Format minutes and seconds as strings with leading zeros
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;

    //Update the timer display
    cronometer.textContent = minutesStr + ":" + secondsStr;

    if (minutes >= 10) {
        stopTimer();
        alert("Game Over");
    }
}

// check if the game is over (10 minutes)
function startTimer() {
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
        playButton.disabled = true;
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
    interval = null;
    playButton.disabled = false;
}

//Function to reset the timer
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    cronometer.textContent = "00:00";
}

