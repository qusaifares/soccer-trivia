animeQuestions = [
  new Question(
    'Which fast food chain was advertised throughout Code Geass?',
    [
      { text: 'McDonalds', picture: 'mcdonalds-crest.png' },
      { text: 'Subway', picture: 'subway-crest.png' },
      { text: 'KFC', picture: 'kfc-crest.png' },
      { text: 'Pizza Hut', picture: 'pizzahut-crest.png' }
    ],
    'Pizza Hut'
  ),
  new Question(
    "Which of the following 'world lines' was not mentioned in Steins; Gate?",
    [
      { text: 'Alpha World Line', picture: 'ryuk-crest.jpg' },
      { text: 'Beta World Line', picture: 'rem-crest.jpg' },
      { text: 'Lambda World Line', picture: 'sidoh-crest.png' },
      { text: 'Steins Gate World Line', picture: 'gelus-crest.jpg' }
    ],
    ' World Line'
  ),
  new Question(
    'Which Shinigami dropped their notebook in the human world?',
    [
      { text: 'Ryuk', picture: 'ryuk-crest.jpg' },
      { text: 'Rem', picture: 'rem-crest.jpg' },
      { text: 'Sidoh', picture: 'sidoh-crest.png' },
      { text: 'Gelus', picture: 'gelus-crest.jpg' }
    ],
    'Ryuk'
  )
];

// Store high scores locally
animeHighScores = JSON.parse(localStorage.getItem('animeHighScores'));
if (!animeHighScores || animeHighScores.length === 0) {
  animeHighScores = [];
}

const animeTrivia = new Trivia(
  animeQuestions,
  animeHighScores,
  'animeHighScores',
  'multiple choice'
);
