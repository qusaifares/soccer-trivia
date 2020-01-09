donaldQuestions = [
  new Question(
    'Which team won the 2018 FIFA World Cup?',
    [{ text: 'Yes' }, { text: 'No' }],
    'Yes'
  )
];
// Store high scores locally
donaldHighScores = JSON.parse(localStorage.getItem('donaldHighScores'));
if (!donaldHighScores || donaldHighScores.length === 0) {
  donaldHighScores = [];
}

const donaldTrivia = new Trivia(
  donaldQuestions,
  donaldHighScores,
  'donaldHighScores',
  'true or false'
);
