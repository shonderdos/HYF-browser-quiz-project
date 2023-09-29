import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = `

  <div class="player-lives-timer">
    <div class="player-lives">
      <img src="imgs/player-live.png" alt="Life Icon 1">
      <img src="imgs/player-live.png" alt="Life Icon 1">
      <img src="imgs/player-live.png" alt="Life Icon 1">
    </div>
    <!-- Timer content -->
    <div class="timer">
    <h2> 05:00 </h2>
    </div>
  </div>
    <h2>${question}</h2>

    <div id="${ANSWERS_LIST_ID}">
    </div>

    <button id="${NEXT_QUESTION_BUTTON_ID}" class="animated-button">
  Next question
</button>


    <div class="progress-line">
  <!-- Static image/svg for the progress line -->
  <div class="progress-line-image-container">
    <img src="imgs/home-path.svg" alt="Progress Line" class="progress-line-image">
    <!-- Cat-face for the progress -->
    <img id="cat-head" src="imgs/player-live.png" alt="Cat Icon" class="cat-icon">
  </div>
</div>

    
  `;

  return element;
};
