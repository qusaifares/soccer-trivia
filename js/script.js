// Target DOM elements
const choiceBoxes = document.querySelectorAll('.choice');
const questionText = document.querySelector('.question');
const scoreboard = document.querySelector('.scoreboard');
const scoreList = document.querySelector('.score-list');
const clearButton = document.querySelector('.clear-scores');
const form = document.querySelector('.congrats');
const endPopup = document.querySelector('.popup-bg');
const nameInput = document.querySelector('.name-input');
const restart = document.querySelector('.restart');
const close = document.querySelector('.close');
const resultPopup = document.querySelector('.popup-question-bg');
const result = document.querySelector('.result');
const acknowledge = document.querySelector('.acknowledge');

class Trivia {
  constructor(questions, highScores, highScoreLocal) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.numberOfQuestions = questions.length;
    this.highScores = highScores;
    this.highScoreLocal = highScoreLocal;
  }
  startTrivia() {
    this.callEventListeners();
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    this.logScores();
    this.showQuestion();
  }
  showQuestion() {
    questionText.innerText = this.questions[this.questionIndex].question;
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
  highScoreInput() {
    if (nameInput.value) {
      let playerName = nameInput.value;
      let finalScore = this.score;
      this.highScores.push({ name: playerName, score: finalScore });
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
      scoreRow.appendChild(rankCell);
      scoreRow.appendChild(playerCell);
      scoreRow.appendChild(scoreCell);
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

class Question {
  constructor(question, choices, answer, picture) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

// when choice is clicked, compare to answer
// if answer is correct, add 1 to score
// change index to next question
// show new question
