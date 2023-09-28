import { createLostElement } from '../views/lostView.js';
import { USER_INTERFACE_ID } from '../constants.js';

export const initLostPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const lostElement = createLostElement();
  userInterface.appendChild(lostElement);
};
