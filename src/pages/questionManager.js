import { ANSWERS_LIST_ID, NEXT_QUESTION_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { createAnswerElement } from '../views/answerView.js';
import { createQuestionElement } from '../views/questionView.js';
import { initWinPage } from '../pages/winPage.js';
import { initLostPage } from '../pages/lostPage.js';
import { quizData } from '../data.js';

let questionIndex = 0;
let catLive = 3;
let roadLength = window.innerWidth;
let catProgress = 0;

const userInterface = document.getElementById(USER_INTERFACE_ID);
const catLiveDiv = document.querySelector('.player-lives');
const catHead = document.querySelector('#cat-head');
const answersListElement = document.getElementById(ANSWERS_LIST_ID);

//Function to init the question page
export const initQuestionPage = (quizData) => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);

    if (userInterface) {
        userInterface.innerHTML = '';
        const currentQuestion = quizData[questionIndex];
        const questionElement = createQuestionElement(currentQuestion.question);


        userInterface.appendChild(questionElement);

        // (code to show answer and manage events)

        catHead.style.left = `${catProgress}px`;
    }
};


//function to check the right answer
const checkAnswer = (targetBtn) => {
    const currentQuestion = quizData[questionIndex];
    const selectedAnswer = targetBtn.target.textContent;

    if (currentQuestion.correct === selectedAnswer) {
        targetBtn.target.style.backgroundColor = 'green';

        // track the cat progress
        catProgress += roadLength / 11;
        catHead.style.left = `${catProgress}px`;

        //check if is the last question
        if (questionIndex < 9) {
            //add the even to go to the nxt question
            disableBtns(answersListElement);

            const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
            nextQuestionButton.addEventListener('click', nextQuestion);
        } else if (catLive > 0) {
            //wrong answer: 
            targetBtn.target.style.backgroundColor = 'red';
            targetBtn.target.disabled = true;
            catLive--;

            // update the representation of the lives
            catLiveDiv.removeChild(catLiveDiv.children[0]);

            // if th player lost the 3 lives
            if (catLive === 0) {
                //add an event to show the lost page
                const lostButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
                lostButton.addEventListener('click', initLostPage);
            }
        } else {
            //add event to show the win page
            const winButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
            winButton.addEventListener('click', initWinPage);
        }

    }

};

//function to go to te next question
const nextQuestion = () => {
    questionIndex++;
    initQuestionPage();
};

const disableBtns = (btnsDiv) => {
    const btns = btnsDiv.children;
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }
};
