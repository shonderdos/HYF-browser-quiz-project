import { createWinElement } from '../views/winView.js';
import { createLostElement } from '../views/lostView.js';
import { USER_INTERFACE_ID } from '../constants.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);

// Function to initialize the win page
export const initWinPage = () => {
    userInterface.innerHTML = '';

    const winElement = createWinElement();
    userInterface.appendChild(winElement);
};

// Function to initialize the lost page
export const initLostPage = () => {
    userInterface.innerHTML = '';

    const lostElement = createLostElement();
    userInterface.appendChild(lostElement);
};

// Function to initialize the logic games page
export const initLogicGamesPage = () => {
    userInterface.innerHTML = '';
};