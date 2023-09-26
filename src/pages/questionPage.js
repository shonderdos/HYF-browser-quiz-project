import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const nextBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextBtn.disabled = true;

  //this variable used to disable the correct button if user selected all wrong answers and also enable the next answer button
  let wrongBtnCounter = 0;

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    // this variable used to disable the btns if the correct answer clicked or disable only the wrong clicked answer
    let divBtns = answersListElement.children;

    answerElement.addEventListener('click', (eventObject) => {
      // the following condetion could be changed based on the question structure
      if (eventObject.target.textContent[0] === currentQuestion.correct) {
        eventObject.target.style.backgroundColor = 'green';
        eventObject.target.disabled = true;
        for (let i = 0; i < divBtns.length; i++) {
          divBtns[i].disabled = true;
        }
        nextBtn.disabled = false;
        nextBtn.addEventListener('click', nextQuestion);
      } else {
        wrongBtnCounter++;
        eventObject.target.style.backgroundColor = 'red';
        eventObject.target.disabled = true;
        if (wrongBtnCounter === divBtns.length - 1) {
          for (let i = 0; i < divBtns.length; i++) {
            divBtns[i].disabled = true;
          }
          nextBtn.disabled = false;
          nextBtn.addEventListener('click', nextQuestion);
        }
      }
    });
  }
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};
