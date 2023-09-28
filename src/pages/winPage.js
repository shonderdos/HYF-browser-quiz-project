import { createWinElement } from '../views/winView.js';
import { USER_INTERFACE_ID, PLAY_AGAIN_BUTTON_ID } from '../constants.js';

export const initWinPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const winElement = createWinElement();
  userInterface.appendChild(winElement);

  const playAgainBtn = document.getElementById(PLAY_AGAIN_BUTTON_ID);

  playAgainBtn.addEventListener('click', () => {
    location.reload();
  });
};
