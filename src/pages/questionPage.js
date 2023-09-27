import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

let questionIndex = 0;
let catLive = 3;
let roadLength = window.innerWidth;
let catProgress = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const currentQuestion = quizData[questionIndex];
  const questionElement = createQuestionElement(currentQuestion.question);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const catLiveDiv = document.querySelector('.player-lives');
  const catHead = document.querySelector('#cat-head');

  if (catLive === 2) {
    catLiveDiv.removeChild(catLiveDiv.children[0]);
  } else if (catLive === 1) {
    catLiveDiv.removeChild(catLiveDiv.children[0]);
    catLiveDiv.removeChild(catLiveDiv.children[0]);
  }
  //should be added to CSS==============================
  answersListElement.style.display = 'flex'; ////////////
  answersListElement.style.flexDirection = 'column'; ////
  //should be added to CSS==============================

  quizData[questionIndex].answers.forEach((answerText) => {
    const answerElement = createAnswerElement(answerText);
    answerElement.addEventListener('click', (eventObject) => {
      checkAnswer(eventObject);
    });
    answersListElement.appendChild(answerElement);
  });
  catHead.style.left = `${catProgress}px`;
  const checkAnswer = (targetBtn) => {
    if (catLiveDiv.childNodes.length > 0) {
      if (currentQuestion.correct === targetBtn.target.textContent) {
        targetBtn.target.style.backgroundColor = 'green';
        disableBtns(answersListElement);
        catProgress += roadLength / 11;
        catHead.style.left = `${catProgress}px`;
      } else {
        targetBtn.target.style.backgroundColor = 'red';
        targetBtn.target.disabled = true;
        catLive--;
        catLiveDiv.removeChild(catLiveDiv.children[0]);

        if (catLive === 0) {
          window.alert('A dog eat Whisker');
        }
      }
    }
  };

  const disableBtns = (btnsDiv) => {
    let btns = btnsDiv.children;
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
  };

  // next button ===========================
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  questionIndex++;

  initQuestionPage();
};
