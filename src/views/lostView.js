/**
 * Create a Win Element
 * @returns {Element}
 */
export const createLostElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `

  <div class="player-win">
  <div class="left-content">
    
    <h1>Unfortunately</h1>
    <p>You have won and you got the cat home. You did a great job!</p>
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