class Trivia {
  constructor(questions, highScores, highScoreLocal, triviaType) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.numberOfQuestions = questions.length;
    this.highScores = highScores;
    this.highScoreLocal = highScoreLocal;
    this.triviaType = triviaType;
  }
  startTrivia() {
    this.questionIndex = 0;
    this.score = 0;
    this.callEventListeners();
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${
      this.numberOfQuestions
    }`;

    this.logScores();
    this.showQuestion();
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
      questionImage.setAttribute(
        'src',
        `img/${this.questions[this.questionIndex].picture}`
      );
      questionImage.classList.add('question-image');
      questionImageContainer.appendChild(questionImage);
    }
    console.log(this.triviaType);
    if (this.triviaType === 'multiple choice') {
      this.showMultipleChoice();
    } else if (this.triviaType === 'true or false') {
      this.showTrueOrFalse();
    } else {
      console.log(this.triviaType);
      alert('Invalid trivia type.');
    }
  }
  showMultipleChoice() {
    choiceOne.style.display = 'block';
    choiceFour.style.display = 'block';
    for (let i = 0; i < choiceBoxes.length; i++) {
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
  showTrueOrFalse() {
    choiceOne.style.display = 'none';
    choiceFour.style.display = 'none';
    for (let i = 1; i < 3; i++) {
      let guess = this.questions[this.questionIndex].choices[i - 1];
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
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${
      this.numberOfQuestions
    }`;
  }
  showCorrect() {
    result.innerText = 'Thats correct. Good job!';
    acknowledge.innerText = 'Yay!';
    resultPopup.style.display = 'flex';
  }
  showIncorrect() {
    result.innerText = `That's wrong. The correct answer is ${
      this.questions[this.questionIndex].answer
    }`;
    acknowledge.innerText = "I'm sorry";
    resultPopup.style.display = 'flex';
  }
  acknowledge() {
    resultPopup.style.display = 'none';
  }
  nextQuestion() {
    this.questionIndex++;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${
      this.numberOfQuestions
    }`;
    this.showQuestion();
  }
  checkGameEnd() {
    return this.questionIndex === this.numberOfQuestions - 1;
  }
  gameEnd() {
    console.log('GAME OVER');
    let finalScore = this.score;
    if (this.highScores.length < 5 || finalScore >= this.highScores[4].score) {
      endPopup.style.display = 'flex';
    } else {
      console.log(
        this.highScores.length < 5 || finalScore >= this.highScores[4]
      );
      console.log(this.highScores);
      this.restart();
    }
  }
  getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = 0;
    console.log(typeof now.getMinutes());
    if (now.getMinutes() + 1 < 10) {
      minutes = '0' + now.getMinutes().toString();
    } else {
      minutes = now.getMinutes();
    }
    console.log(minutes);
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
    } else {
      time = `${hours}:${minutes} ${period}`;
    }
    return `${date} ${time}`;
  }
  highScoreInput() {
    if (nameInput.value) {
      let playerName = nameInput.value;
      let finalScore = this.score;
      this.highScores.push({
        name: playerName,
        score: finalScore,
        date: this.getCurrentTime()
      });
      endPopup.style.display = 'none';
      this.logScores();
      this.restart();
    } else {
      alert('Make sure to enter a name.');
    }
  }
  abortScoreInput() {
    endPopup.style.display = 'none';
    this.restart();
  }
  logScores() {
    let rows = document.querySelectorAll('.player');
    if (rows) {
      rows.forEach(row => row.parentNode.removeChild(row));
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
      scoreCell.append(this.highScores[i].score);
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
    this.questionIndex = 0;
    this.score = 0;
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    questionNumber.innerText = `Question: ${this.questionIndex + 1}/${
      this.numberOfQuestions
    }`;
    this.showQuestion();
  }
  callEventListeners() {
    choiceBoxes.forEach(choice => {
      choice.addEventListener('click', e => this.makeChoice(e));
    });

    clearButton.addEventListener('click', () => this.clearScores());

    form.addEventListener('submit', () => this.highScoreInput());

    restart.addEventListener('click', () => this.restart());

    close.addEventListener('click', () => this.abortScoreInput());

    acknowledge.addEventListener('click', () => this.acknowledge());
  }
}
