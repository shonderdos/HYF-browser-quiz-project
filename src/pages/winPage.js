
import { createLogicGamesElement } from '../logicGamesUtilities.js';
import { USER_INTERFACE_ID } from '../constants.js';

const initWinPage = () => {
  const winElement = createLogicGamesElement(
    'Congratulation',
    'You have won and you got the cat home. You did a great job!',
    'Play Again',
    'imgs/win.png',
    'imgs/confetti.gif'
  );

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  userInterface.appendChild(winElement);

};

export { initWinPage };