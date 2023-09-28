//Declare variables for timer and DOM elements
let interval;
let minutes = 0;
let seconds = 0;

const cronometer = document.getElementById("cronometer");

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
let gameOverMessage;

export function stopTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;

        gameOverMessage = document.createElement('div');
        gameOverMessage.textContent = "GAME OVER";
        gameOverMessage.classList.add('game-over-message');

        document.body.appendChild(gameOverMessage);
    }
}

export function removeGameOverMessage() {
    if (gameOverMessage && gameOverMessage.parentNode) {
        gameOverMessage.parentNode.removeChild(gameOverMessage)
    }
}

//Function to reset the timer
export function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    cronometer.textContent = "00:00";
}