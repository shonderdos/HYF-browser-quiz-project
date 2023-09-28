import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initWinPage } from '../pages/winPage.js';
import { initLostPage } from '../pages/lostPage.js';
import { removeCatLive } from '../helperFunctions.js';

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
  const nextQuestionBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextQuestionBtn.classList.add('hidden');
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const catLiveDiv = document.querySelector('.player-lives');
  const catHead = document.querySelector('#cat-head');

  removeCatLive(catLive, catLiveDiv);

  quizData[questionIndex].answers.forEach((answerText) => {
    const answerElement = createAnswerElement(answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', (eventObject) => {
      checkAnswer(eventObject);
    });
  });

  catHead.style.left = `${catProgress}px`;

  const checkAnswer = (targetBtn) => {
    if (catLiveDiv.childNodes.length > 0) {
      if (currentQuestion.correct === targetBtn.target.textContent) {
        targetBtn.target.style.backgroundColor = 'green';
        disableBtns(answersListElement);
        catProgress += roadLength / (quizData.length + 1);
        catHead.style.left = `${catProgress}px`;
        nextQuestionBtn.classList.remove('hidden');
        if (questionIndex < quizData.length - 1) {
          nextQuestionBtn.addEventListener('click', nextQuestion);
        } else {
          initWinPage();
        }
      } else {
        targetBtn.target.style.backgroundColor = 'red';
        disableBtns(answersListElement);
        catLive--;
        if (catLive < 3) {
          catLiveDiv.removeChild(catLiveDiv.children[0]);
        }

        nextQuestionBtn.classList.remove('hidden');

        for (let i = 0; i < answersListElement.children.length; i++) {
          if (
            answersListElement.children[i].textContent ===
            currentQuestion.correct
          ) {
            answersListElement.children[i].style.backgroundColor = 'green';
          }
        }

        if (catLive === 0) {
          initLostPage();
        } else {
          nextQuestionBtn.addEventListener('click', nextQuestion);
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
};

const nextQuestion = () => {
  questionIndex++;
  initQuestionPage();
};
