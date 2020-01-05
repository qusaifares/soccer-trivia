// Target DOM elements
const choiceBoxes = document.querySelectorAll('.choice');
const questionText = document.querySelector('.question');
const scoreboard = document.querySelector('.scoreboard');

// create class for questions and quiz
class Trivia {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
    this.numberOfQuestions = questions.length;
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
    return this.questionIndex >= this.numberOfQuestions - 1;
  }
}

class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

soccerQuestions = [
  new Question(
    'Which team won the 2018 FIFA World Cup?',
    ['Brazil', 'Germany', 'France', 'Argentina'],
    'France'
  ),
  new Question(
    'How many panels is a classic soccer ball made of?',
    ['8', '16', '32', '64'],
    '32'
  ),
  new Question(
    'Who is the only player to win player of the year 6 times?',
    ['Pele', 'Cristiano Ronaldo', 'Diego Maradona', 'Lionel Messi'],
    'Lionel Messi'
  )
];

let soccerTrivia = new Trivia(soccerQuestions);

soccerTrivia.showQuestion();

choiceBoxes.forEach(choice => {
  choice.addEventListener('click', e => soccerTrivia.makeChoice(e));
});

// when choice is clicked, compare to answer
// if answer is correct, add 1 to score
// change index to next question
// show new question
