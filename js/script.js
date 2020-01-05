// Target DOM elements
const choiceBoxes = document.querySelectorAll('.choice');
const questionText = document.querySelector('.question');
const choiceOne = document.querySelector('.choice-1');
const choiceTwo = document.querySelector('.choice-2');
const choiceThree = document.querySelector('.choice-3');
const choiceFour = document.querySelector('.choice-4');
// create variables
let questionIndex = 0;
let score = 0;

// create class for questions

class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

questions = [
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

let pageSetup = () => {
  questionText.innerText = questions[questionIndex].question;
  choiceOne.innerText = questions[questionIndex].choices[0];
  choiceTwo.innerText = questions[questionIndex].choices[1];
  choiceThree.innerText = questions[questionIndex].choices[2];
  choiceFour.innerText = questions[questionIndex].choices[3];
};
