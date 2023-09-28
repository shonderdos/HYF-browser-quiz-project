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
let roadLength = window.innerWidth; // this will change maybe
let catProgress = 0;

export const initQuestionPage = () => {
  //select the quiz container and clear all element within it
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //select a question form "data.js"
  const currentQuestion = quizData[questionIndex];

  // create the quiz elements (buttons, headings .etc), then add them to the quiz container
  const questionElement = createQuestionElement(currentQuestion.question);
  userInterface.appendChild(questionElement);

  // select "next-question" button and hide it (we want to show it only if player clicked an answer)
  const nextQuestionBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextQuestionBtn.classList.add('hidden');

  //select answers buttons, the cat live container and the progress cat-head
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const catLiveDiv = document.querySelector('.player-lives');
  const catHead = document.querySelector('#cat-head');

  //to move the cat head to the right (progress)
  catHead.style.left = `${catProgress}px`;

  // this function will remove cat live from the cat live container
  // ()======= {{it works for now, but we need to find a better way to do it}} ========()
  removeCatLive(catLive, catLiveDiv);

  // loop through the question's answers array from "data.js":
  // - create a button with the answer text on it
  // - add it to the answer buttons container
  // - add event listener to it that call a function to check if the answer right or wrong
  quizData[questionIndex].answers.forEach((answerText) => {
    const answerElement = createAnswerElement(answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', (eventObject) => {
      checkAnswer(eventObject);
    });
  });

  // function to check answers
  const checkAnswer = (targetBtn) => {
    
    //if we still have life
    if (catLiveDiv.childNodes.length > 0) {
      // if the question answer is the same as the text on the button
      if (currentQuestion.correct === targetBtn.target.textContent) {

        //change the background color of the button to green
        targetBtn.target.style.backgroundColor = '#A1CB41';

        // disable all answer's buttons
        disableBtns(answersListElement);

        //move the cat head on the road to the right
        progress();

        // as we made next question button hidden with CSS, here we remove this CSS rule to show it 
        nextQuestionBtn.classList.remove('hidden');

        // if there are still questions, then next button will call next question function again
        // if not, then show win page
        if (questionIndex < quizData.length - 1) {
          nextQuestionBtn.addEventListener('click', nextQuestion);
        } else {
          initWinPage();
        }

        // if the wrong answer clicked
      } else {

        // move the cat head right
        progress();

        // make the button back ground color red
        targetBtn.target.style.backgroundColor = '#F44848';

        // disable all answer's buttons
        disableBtns(answersListElement);

        // decrease cat life
        catLive--;

        // remove one cat life image from the cat lifes container
        if (catLive < 3) {
          catLiveDiv.removeChild(catLiveDiv.children[0]);
        }

        // show next question button
        nextQuestionBtn.classList.remove('hidden');

        // go thrugh all answers button to find the right answer and give it green
        for (let i = 0; i < answersListElement.children.length; i++) {
          if (
            answersListElement.children[i].textContent ===
            currentQuestion.correct
          ) {
            answersListElement.children[i].style.backgroundColor = '#A1CB41';
          }
        }

        // if no more life call lose page, else next question button call next question
        if (catLive === 0) {
          initLostPage();
        } else {
          nextQuestionBtn.addEventListener('click', nextQuestion);
        }
      }
    }
  };


  // select road length divid it by quiz question numbers (steps)
  const progress = () => {
    catProgress += roadLength / (quizData.length + 1);
    catHead.style.left = `${catProgress}px`;
  };


  // loop through all answer buttons and disable them
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
