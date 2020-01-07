// Target DOM elements
const choiceBoxes = document.querySelectorAll('.choice');
const questionText = document.querySelector('.question');
const scoreboard = document.querySelector('.scoreboard');
const scoreList = document.querySelector('.score-list');
const clearButton = document.querySelector('.clear-scores');

//create variables
let highScores = JSON.parse(localStorage.getItem('highScoreList'));
if (!highScores || highScores.length === 0) {
  highScores = [];
}

class Trivia {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.numberOfQuestions = questions.length;
  }
  startTrivia() {
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    this.logScores();
    this.showQuestion();
  }
  showQuestion() {
    questionText.innerText = this.questions[this.questionIndex].question;
    for (let i = 0; i < choiceBoxes.length; i++) {
      let guess = this.questions[this.questionIndex].choices[i];
      choiceBoxes[i].innerText = guess.text;
      if (guess.picture) {
        let pic = document.createElement('img');
        pic.setAttribute('class', 'choice-image');
        if (guess.picture && guess.picture.includes('flag')) {
          pic.classList.add('flag');
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
    this.changeScore(guess);
    if (this.checkGameEnd()) {
      this.gameEnd();
    } else {
      this.nextQuestion();
    }
  }
  changeScore(guessMade) {
    if (guessMade === this.questions[this.questionIndex].answer) this.score++;
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
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
    let playerName = prompt('New high score! Enter your name.');
    highScores.push({ name: playerName, score: finalScore });
    this.logScores();
    this.restart();
  }
  logScores() {
    let rows = document.querySelectorAll('.player');
    if (rows) {
      rows.forEach(row => row.parentNode.removeChild(row));
    } else {
    }
    highScores.sort((a, b) => b.score - a.score);
    for (let i = 0; i < highScores.length; i++) {
      let scoreRow = document.createElement('tr');
      scoreRow.setAttribute('class', 'player');
      scoreList.appendChild(scoreRow);
      let rankCell = document.createElement('td');
      rankCell.append(i + 1);
      let playerCell = document.createElement('td');
      playerCell.append(highScores[i].name);
      let scoreCell = document.createElement('td');
      scoreCell.append(highScores[i].score);
      scoreRow.appendChild(rankCell);
      scoreRow.appendChild(playerCell);
      scoreRow.appendChild(scoreCell);
    }
    localStorage.setItem('highScoreList', JSON.stringify(highScores));
  }
  clearScores() {
    highScores = [];
    localStorage.setItem('highScoreList', JSON.stringify(highScores));
    this.logScores();
  }
  restart() {
    this.questionIndex = 0;
    this.score = 0;
    scoreboard.innerText = `Score: ${this.score}/${this.numberOfQuestions}`;
    this.showQuestion();
  }
}

class Question {
  constructor(question, choices, answer, picture) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

choiceBoxes.forEach(choice => {
  choice.addEventListener('click', e => soccerTrivia.makeChoice(e));
});

clearButton.addEventListener('click', e => soccerTrivia.clearScores());

// when choice is clicked, compare to answer
// if answer is correct, add 1 to score
// change index to next question
// show new question
