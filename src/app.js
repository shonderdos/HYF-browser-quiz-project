
import { createLogicGamesElement } from './logicGamesUtilities.js';
// Wait fot the DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  //Call a createLogicGamesElement with the desired values 
  const element = createLogicGamesElement(
    "Congratulations",
    "You won the game!",
    "Play Again",
    "main-image.jpg",
    "congrats-image.jpg"
  );

  // add the created element to the document
  document.body.appendChild(element);
});

import { initQuestionPage } from './pages/questionManager.js';
import { quizData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initQuestionPage(quizData);
})
// import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  // quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
