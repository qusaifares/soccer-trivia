// Target DOM elements
const choiceBoxes = document.querySelectorAll('.choice');
const questionText = document.querySelector('.question');
const scoreboard = document.querySelector('.scoreboard');
const scoreList = document.querySelector('.score-list');

//create variables
let highScores = [];
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
  }
  logScores() {
    highScores.forEach(obj => {
      let scoreItem = document.createElement('li');
      scoreItem.innerText = `Name: ${obj.name}, ${obj.score}`;
      scoreList.appendChild(scoreItem);
    });
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

// when choice is clicked, compare to answer
// if answer is correct, add 1 to score
// change index to next question
// show new question
