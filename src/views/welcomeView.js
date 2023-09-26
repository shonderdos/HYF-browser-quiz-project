import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div id="welcome-content" class="flex-container">
      <div class="flex-item">
        <img src="imgs/welcome-page-img.jpeg" alt="Whiskers" id="whiskers-image">
      </div>
      <div class="flex-item">
        <h1 id="cat-home-title">Get the Cat Back Home</h1>
        <p id="cat-description">
          Meet "Whiskers," an adorable round cat who ventured out to explore the world following a playful feather and now needs your help to find his way back home. Get ready to test your knowledge and assist Whiskers in his journey!
        </p>
        <button id="${START_QUIZ_BUTTON_ID}" class="animated-button">Start Quiz</button>
      </div>
    </div>
  `;
  return element;
};
