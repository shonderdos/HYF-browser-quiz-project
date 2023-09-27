import { createLostElement } from '../views/lostView.js';

export const initLostPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const lostElement = createLostElement();
  userInterface.appendChild(lostElement);
};
