import { createLostElement } from '../views/lostView.js';
import { USER_INTERFACE_ID, PLAY_AGAIN_BUTTON_ID } from '../constants.js';
import { initWelcomePage } from '../pages/welcomePage.js';

export const initLostPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const lostElement = createLostElement();
  userInterface.appendChild(lostElement);

  const playAgainBtn = document.getElementById(PLAY_AGAIN_BUTTON_ID);

  playAgainBtn.addEventListener('click', () => {
    // added by saleh
    location.reload()

    // added by ln
    initWelcomePage();
  });
};
