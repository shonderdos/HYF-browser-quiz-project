import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { USER_NAME_INPUT_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 id="welcome-heading">Welcome</h1>
    <input type="text" class="" name="" id="${USER_NAME_INPUT_ID}" placeholder="Enter your name"  required/>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
