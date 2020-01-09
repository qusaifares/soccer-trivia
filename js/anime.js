animeQuestions = [
  new Question(
    'Which fast food chain was advertised throughout Code Geass?',
    [
      { text: 'McDonalds', picture: 'mcdonalds-crest.jpg' },
      { text: 'Subway', picture: 'subway-crest.jpg' },
      { text: 'KFC', picture: 'kfc-crest.jpg' },
      { text: 'Pizza Hut', picture: 'pizzahut-crest.jpg' }
    ],
    'Pizza Hut'
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
