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
// highScores = localStorage.getItem('highScores');
// localStorage.setItem('highScores', highScores);

// create class for questions and quiz
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
      choiceBoxes[i].innerText = this.questions[this.questionIndex].choices[i];
    }
  }
  makeChoice(e) {
    let guess = e.target.innerText;
    this.changeScore(guess);
    if (this.checkGameEnd()) {
      console.log(this.checkGameEnd());
      this.gameEnd();
    } else {
      this.nextQuestion();
    }
  }
  changeScore(guessedAnswer) {
    if (guessedAnswer === this.questions[this.questionIndex].answer)
      this.score++;
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
    this.showQuestion();
  }
}

class Question {
  constructor(question, choices, answer) {
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
