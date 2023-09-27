//Declare variables for timer and DOM elements
let interval;
let minutes = 0;
let seconds = 0;

const cronometer = document.getElementById("cronometer");
const resetButton = document.getElementById("resetButton");

//Add event listene to the reset button
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
        gameOver();
    }
}

// Function to start the timer
export function startTimer() {
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
    interval = null;
}

//Function to reset the timer
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    cronometer.textContent = "00:00";
}

// Function to handle game over

function gameOver() {
    stopTimer();
    alert("Game Over");
}

export { gameOver };