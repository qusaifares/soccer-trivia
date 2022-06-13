class Trivia {
  constructor(questions, highScores, highScoreLocal, triviaType, hasAudio = false) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.numberOfQuestions = questions.length;
    this.highScores = highScores;
    this.highScoreLocal = highScoreLocal;
    this.triviaType = triviaType;
    this.hasAudio = hasAudio;
  }
  startTrivia() {
    // delete choices and end-game form dom elements then regenerate them
    this.removeChoices();
    if (this.triviaType === 'multiple choice') {
      this.generateChoices(4);
    } else if (this.triviaType === 'true or false') {
      this.generateChoices(2);
    } else {
      alert('Invalid trivia type.');
    }
    this.removeForm();
    this.generateForm();
    this.questionIndex = 0;
    this.score = 0;
    this.callEventListeners();
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${this.numberOfQuestions}`;

    this.logScores();
    this.showQuestion();
    if (this.hasAudio) {
      startAudio();
    } else {
      stopAudio();
    }
  }
  generateChoices(num) {
    for (let i = 1; i <= num; i++) {
      let choiceBox = document.createElement('div');
      choiceBox.setAttribute('class', `choice choice-` + i);
      choiceContainer.appendChild(choiceBox);
    }
  }
  removeChoices() {
    while (choiceContainer.firstChild) choiceContainer.removeChild(choiceContainer.firstChild);
  }
  removeForm() {
    while (endPopupInner.firstChild) endPopupInner.removeChild(endPopupInner.firstChild);
  }
  generateForm() {
    // generate world cup image
    let worldCup = document.createElement('img');
    worldCup.setAttribute('class', 'cup');
    worldCup.setAttribute('src', 'img/trophy-worldcup.png');
    endPopupInner.appendChild(worldCup);
    //form
    let form = document.createElement('form');
    form.setAttribute('class', 'congrats');
    endPopupInner.appendChild(form);
    // X close button
    let close = document.createElement('div');
    close.setAttribute('class', 'close');
    close.append('✕');
    form.appendChild(close);

    let message = document.createElement('p');
    message.append('Congratulations, new high score!');
    form.appendChild(message);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('class', 'name-input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter your name.');
    form.appendChild(nameInput);

    let submit = document.createElement('button');
    submit.setAttribute('class', 'submit-score');
    submit.innerText = 'Submit';
    form.appendChild(submit);
  }
  showQuestion() {
    questionText.innerText = this.questions[this.questionIndex].question;
    //if theres already a picture, delete it.
    if (!!document.querySelector('.question-image')) {
      document.querySelector('.question-image').remove();
    }
    // if theres a picture in the questions array, create element
    if (!!this.questions[this.questionIndex].picture) {
      let questionImage = document.createElement('img');
      questionImage.setAttribute('src', `img/${this.questions[this.questionIndex].picture}`);
      questionImage.classList.add('question-image');
      questionImageContainer.appendChild(questionImage);
    }
    if (this.triviaType === 'multiple choice') {
      this.showMultipleChoice();
    } else if (this.triviaType === 'true or false') {
      this.showTrueOrFalse();
    } else {
      alert('Invalid trivia type.');
    }
  }
  showMultipleChoice() {
    // generates 4 choices
    let choiceBoxes = document.querySelectorAll('.choice');
    for (let i = 0; i < choiceBoxes.length; i++) {
      let guess = this.questions[this.questionIndex].choices[i];
      choiceBoxes[i].innerText = guess.text;
      // gives class to choice to decide on hover height
      let pictureTypes = ['choice-image', 'flag', 'small-img', 'big-img', 'crest-img'];
      pictureTypes.forEach((picClass) => {
        if (choiceBoxes[i].classList.contains(picClass)) {
          choiceBoxes[i].classList.remove(picClass);
        }
      });
      if (guess.picture) {
        let pic = document.createElement('img');
        pic.setAttribute('class', 'choice-image');
        if (guess.picture && guess.picture.includes('flag')) {
          pic.classList.add('flag');
          choiceBoxes[i].classList.add('small-img');
        } else if (guess.picture && guess.picture.includes('crest')) {
          pic.classList.add('crest');
          choiceBoxes[i].classList.add('crest-img');
        } else {
          choiceBoxes[i].classList.add('big-img');
        }
        pic.setAttribute('src', `img/${guess.picture}`);
        choiceBoxes[i].appendChild(pic);
      }
    }
  }
  showTrueOrFalse() {
    // generates 2 choices
    let choiceBoxes = document.querySelectorAll('.choice');
    for (let i = 0; i < 2; i++) {
      let guess = this.questions[this.questionIndex].choices[i];
      choiceBoxes[i].innerText = guess.text;
      choiceBoxes[i].className = 'choice';

      if (guess.picture) {
        let pic = document.createElement('img');
        pic.setAttribute('class', 'choice-image');
        if (guess.picture && guess.picture.includes('flag')) {
          pic.classList.add('flag');
          choiceBoxes[i].classList.add('small-img');
        } else if (guess.picture && guess.picture.includes('crest')) {
          pic.classList.add('crest');
          choiceBoxes[i].classList.add('crest-img');
        } else {
          choiceBoxes[i].classList.add('big-img');
        }
        pic.setAttribute('src', `img/${guess.picture}`);
        choiceBoxes[i].appendChild(pic);
      }
    }
  }
  makeChoice(e) {
    let guess;
    if (e.target.classList.contains('choice-image')) {
      guess = e.target.parentNode.innerText;
    } else {
      guess = e.target.innerText;
    }
    if (this.isCorrect(guess)) {
      this.addScore();
      this.showCorrect();
    } else {
      this.showIncorrect();
    }
    if (this.checkGameEnd()) {
      this.gameEnd();
    } else {
      this.nextQuestion();
    }
  }
  isCorrect(guessMade) {
    return guessMade === this.questions[this.questionIndex].answer;
  }
  addScore() {
    this.score++;
    scoreboard.innerText = `Score: ${this.score}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${this.numberOfQuestions}`;
  }
  showCorrect() {
    result.innerText = 'Thats correct. Good job!';
    acknowledge.innerText = 'Yay!';
    resultPopup.style.transform = 'scale(1)';
    resultPopup.style.opacity = '1';
  }
  showIncorrect() {
    result.innerText = `That's wrong. The correct answer is ${
      this.questions[this.questionIndex].answer
    }`;
    acknowledge.innerText = "I'm sorry";
    resultPopup.style.transform = 'scale(1)';
    resultPopup.style.opacity = '1';
  }
  acknowledge() {
    resultPopup.style.transform = 'scale(0)';
  }
  nextQuestion() {
    this.questionIndex++;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${this.numberOfQuestions}`;
    this.showQuestion();
  }
  checkGameEnd() {
    return this.questionIndex === this.numberOfQuestions - 1;
  }
  gameEnd() {
    let finalScore = this.score;
    if (this.highScores.length < 5 || finalScore >= this.highScores[4].score) {
      endPopup.style.transform = 'scale(1)';
      endPopup.style.opacity = '1';
    } else {
      restartPopup.style.transform = 'scale(1)';
      restartPopup.style.opacity = '1';
    }
  }
  getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = 0;
    if (now.getMinutes() + 1 < 10) {
      minutes = '0' + now.getMinutes().toString();
    } else {
      minutes = now.getMinutes();
    }
    let period;
    if (hours >= 12) {
      period = 'PM';
    } else {
      period = 'AM';
    }
    let date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    let time;
    if (hours > 12) {
      time = `${hours - 12}:${minutes} ${period}`;
    } else if (hours == 0) {
      time = `${hours + 12}:${minutes} ${period}`;
    } else {
      time = `${hours}:${minutes} ${period}`;
    }
    return `${date} ${time}`;
  }
  highScoreInput() {
    let nameInput = document.querySelector('.name-input');
    if (nameInput.value) {
      let playerName = nameInput.value;
      let finalScore = this.score;
      this.highScores.push({
        name: playerName,
        score: finalScore,
        date: this.getCurrentTime(),
        scoreText: `${finalScore}/${this.numberOfQuestions}`,
      });
      endPopup.style.transform = 'scale(0)';
      this.logScores();
      restartPopup.style.transform = 'scale(1)';
      restartPopup.style.opacity = '1';
    } else {
      alert('Make sure to enter a name.');
    }
  }
  abortScoreInput() {
    endPopup.style.transform = 'scale(0)';
    restartPopup.style.transform = 'scale(1)';
    restartPopup.style.opacity = '1';
  }
  logScores() {
    let rows = document.querySelectorAll('.player');
    if (rows) {
      rows.forEach((row) => row.parentNode.removeChild(row));
    } else {
    }
    this.highScores.sort((a, b) => b.score - a.score);
    this.highScores = this.highScores.slice(0, 5);
    for (let i = 0; i < this.highScores.length; i++) {
      let scoreRow = document.createElement('tr');
      scoreRow.setAttribute('class', 'player');
      scoreList.appendChild(scoreRow);
      let rankCell = document.createElement('td');
      rankCell.append(i + 1);
      let playerCell = document.createElement('td');
      playerCell.append(this.highScores[i].name);
      let scoreCell = document.createElement('td');
      scoreCell.append(this.highScores[i].scoreText);
      let dateCell = document.createElement('td');
      dateCell.append(this.highScores[i].date);
      scoreRow.appendChild(rankCell);
      scoreRow.appendChild(playerCell);
      scoreRow.appendChild(scoreCell);
      scoreRow.appendChild(dateCell);
    }
    localStorage.setItem(this.highScoreLocal, JSON.stringify(this.highScores));
  }
  clearScores() {
    this.highScores = [];
    localStorage.setItem('highScoreList', JSON.stringify(this.highScores));
    this.logScores();
  }
  restart() {
    restartPopup.style.transform = 'scale(0)';
    restartPopup.style.opacity = '0';
    this.questionIndex = 0;
    this.score = 0;
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${this.numberOfQuestions}`;
    this.showQuestion();
  }
  dontRestart() {
    restartPopup.style.transform = 'scale(0)';
    restartPopup.style.opacity = '0';
    this.questionIndex = 0;
    this.score = 0;
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${this.numberOfQuestions}`;
    this.removeChoices();
    this.removeForm();
    this.replaceRestart();
    questionText.innerText = 'Thanks for playing';
  }
  replaceRestart() {
    document.querySelector('.restart').remove();
    document.querySelector('.no-restart').remove();
    let restartBtn = document.createElement('button');
    restartBtn.setAttribute('class', 'restart');
    restartForm.append(restartBtn);
    let noRestart = document.createElement('button');
    noRestart.setAttribute('class', 'no-restart');
    restartForm.append(noRestart);
  }
  callEventListeners() {
    // makes all buttons functional
    document.querySelectorAll('.choice').forEach((choice) => {
      choice.addEventListener('click', (e) => this.makeChoice(e));
    });

    clearButton.addEventListener('click', () => this.clearScores());

    document.querySelector('.congrats').addEventListener('submit', () => this.highScoreInput());

    document.querySelector('.restart').addEventListener('click', () => this.restart());

    document.querySelector('.no-restart').addEventListener('click', () => this.dontRestart());

    document.querySelector('.close').addEventListener('click', () => this.abortScoreInput());

    acknowledge.addEventListener('click', () => this.acknowledge());
  }
}
