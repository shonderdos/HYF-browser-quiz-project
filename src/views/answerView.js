/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (answerText) => {
  const element = document.createElement('button');
  element.innerHTML = `${answerText}`;
  return element;
};
