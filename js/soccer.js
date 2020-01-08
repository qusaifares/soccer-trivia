// Create questions
soccerQuestions = [
  new Question(
    'Which team won the 2018 FIFA World Cup?',
    [
      { text: 'Brazil', picture: 'brazil-flag.jpg' },
      { text: 'Germany', picture: 'germany-flag.jpg' },
      { text: 'France', picture: 'france-flag.jpg' },
      { text: 'Argentina', picture: 'argentina-flag.jpg' }
    ],
    'France'
  ),
  new Question(
    'How many panels is a traditional soccer ball made of?',
    [{ text: '24' }, { text: '32' }, { text: '48' }, { text: '64' }],
    '32'
  ),
  new Question(
    'Who is the only player to win player of the year 6 times?',
    [
      { text: 'Pele', picture: 'pele.jpg' },
      { text: 'Zinedine Zidane', picture: 'zidane.jpg' },
      { text: 'Cristiano Ronaldo', picture: 'ronaldo.jpg' },
      { text: 'Lionel Messi', picture: 'messi.jpg' }
    ],
    'Lionel Messi'
  ),
  new Question(
    'How many minutes is the length of an official soccer game?',
    [{ text: '60' }, { text: '90' }, { text: '100' }, { text: '120' }],
    '90'
  ),
  new Question(
    'Which team has the most UEFA Champions League Titles?',
    [
      { text: 'Real Madrid', picture: 'realmadrid-crest.png' },
      { text: 'Liverpool', picture: 'liverpool-crest.png' },
      { text: 'Barcelona', picture: 'barcelona-crest.png' },
      { text: 'Manchester Utd', picture: 'manunited-crest.png' }
    ],
    'Real Madrid'
  ),
  new Question(
    'How long is a goalkeeper allowed to hold a ball for?',
    [
      { text: '3 seconds' },
      { text: '6 seconds' },
      { text: '12 seconds' },
      { text: '15 seconds' }
    ],
    '6 seconds'
  ),
  new Question(
    'In which country did the first World Cup take place?',
    [
      { text: 'Brazil', picture: 'brazil-flag.jpg' },
      { text: 'England', picture: 'england-flag.jpg' },
      { text: 'Italy', picture: 'italy-flag.jpg' },
      { text: 'Uruguay', picture: 'uruguay-flag.jpg' }
    ],
    'Uruguay'
  )
];

// Store high scores locally
soccerHighScores = JSON.parse(localStorage.getItem('soccerHighScores'));
if (!soccerHighScores || soccerHighScores.length === 0) {
  soccerHighScores = [];
}

const soccerTrivia = new Trivia(
  soccerQuestions,
  soccerHighScores,
  'soccerHighScores'
);
