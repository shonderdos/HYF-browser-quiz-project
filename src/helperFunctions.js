export const removeCatLive = (catLive, catLiveDiv) => {
  if (catLive === 2) {
    catLiveDiv.removeChild(catLiveDiv.children[0]);
  }
  if (catLive === 1) {
    catLiveDiv.removeChild(catLiveDiv.children[0]);
    catLiveDiv.removeChild(catLiveDiv.children[0]);
  }
};

export const checkAnswer = (targetBtn) => {
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
      

      if (catLive === 0) {
        initLostPage();
      } else {
        nextQuestionBtn.addEventListener('click', nextQuestion);
      }
    }
  }
};

export const disableBtns = (btnsDiv) => {
  let btns = btnsDiv.children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
  }
};
