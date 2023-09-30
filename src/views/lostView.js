/**
 * Create a Win Element
 * @returns {Element}
 */

import {gameData} from '../data.js'

export const createLostElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `

  <div class="player-win">
  <div class="left-content">
  <h1 class="game-over"> GAME OVER </h1>
    <h3> Unfortunately </h3>
    <p>Whiskers lost his way, but you can help him by playing again ;)</p>
    <p class="final-score"> Your final score was: ${gameData.score} </p>
    <button id="play-again-button">Play Again</button>
    <img src="imgs/sad-cat.jpg" alt="Image" class="congrats-image">
  </div>
  <div class="right-content">
    <img src="imgs/lost.png" alt="Image" class="cat-image">
  </div>
</div>

  `;
  return element;
};
