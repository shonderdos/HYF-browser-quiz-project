//Create a Logic Gams Element/
/*@param { string } title // the title o display on the page (e.g., "Congratulation" o "Unfortunately")
@param { string } message // the message to display on the page
@param { string } buttonText // the text for the "Play Again" button
@param { string } imageSource // the source URL for the main image
@param { string } congratsImageSource // the source URL for the congratulatory image
@returns { element } */

export const createLogicGamesElement = (title, message, buttonText, imageSource, congratsImageSource) => {
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="player-win">
            <div class="left-content">
                <h1>${title}</h1>
                <p>${message}</p>
                <button id="play-again-button">${buttonText}</button>
                ${congratsImageSource ? `<img src="${congratsImageSource}"> alt="image" class="congrats-image">` : ''}
            </div>
            <div class="right-content">
                <img src="${imageSource}" alt="Image" class="cat-image">
            </div>
        </div>
    `;
    return element;
};
