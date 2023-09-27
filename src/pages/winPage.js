import { createWinElement } from '../views/winView.js';
import { USER_INTERFACE_ID} from '../constants.js';

export const initWinPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const winElement = createWinElement();
  userInterface.appendChild(winElement);
};
