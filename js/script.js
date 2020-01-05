// Target DOM elements
const choiceBoxes = document.querySelectorAll('.choice');
const questionText = document.querySelector('.question');
const choiceOne = document.querySelector('.choice-1');
const choiceTwo = document.querySelector('.choice-2');
const choiceThree = document.querySelector('.choice-3');
const choiceFour = document.querySelector('.choice-4');
// create variables
let questionIndex = 0;
let currentScore = 0;

// create class for questions
class Trivia {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
  }
  showQuestion() {
    questionText.innerText = this.questions[questionIndex].question;
    choiceOne.innerText = this.questions[questionIndex].choices[0];
    choiceTwo.innerText = this.questions[questionIndex].choices[1];
    choiceThree.innerText = this.questions[questionIndex].choices[2];
    choiceFour.innerText = this.questions[questionIndex].choices[3];
  }
  makeChoice(e) {
    return e.target.innerText === this.question.answer;
  }
  nextQuestion() {
    this.questionIndex++;
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
    'Who won the last world cup?',
    ['france', 'argentina', 'brazil', 'spain'],
    'france'
  ),
  new Question(
    'Who won the 2014 world cup?',
    ['germany', 'argentina', 'brazil', 'netherlands'],
    'germany'
  )
];

let soccerTrivia = new Trivia(soccerQuestions);

soccerTrivia.showQuestion();

// when choice is clicked, compare to answer
// if answer is correct, add 1 to score
// change index to next question
// show new question
