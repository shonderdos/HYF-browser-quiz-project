
import { createLogicGamesElement } from '../logicGamesUtilities.js';
import { USER_INTERFACE_ID } from '../constants.js';

const initLostPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const lostElements = createLogicGamesElement(
    'Unfortunately',
    'You have Lost. Better luck next time!',
    'Play Again',
    'img/lost.png',
    'imgs/sad-cat.jpg'
  );

  userInterface.appendChild(lostElements);
};

export { initLostPage };