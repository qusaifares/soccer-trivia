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
      { text: 'Alpha' },
      { text: 'Beta' },
      { text: 'Lambda' },
      { text: 'Steins Gate' }
    ],
    'Lambda'
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
  ),
  new Question(
    "What is Naruto's signature move called?",
    [
      { text: 'Amaterasu' },
      { text: 'Chidori' },
      { text: 'Rasengan' },
      { text: 'Tsukuyomi' }
    ],
    'Rasengan'
  ),
  new Question(
    'What is the name of this character?',
    [
      { text: 'Genos' },
      { text: 'Garou' },
      { text: 'Tatsumaki' },
      { text: 'Saitama' }
    ],
    'Saitama',
    'saitama.png'
  ),
  new Question(
    "What is Tanjiro's breathing style in Demon Slayer?",
    [
      { text: 'Water' },
      { text: 'Lightning' },
      { text: 'Wind' },
      { text: 'Beast' }
    ],
    'Water'
  ),
  new Question(
    "What is the name of Goku's signature move?",
    [
      { text: 'Galick Gun' },
      { text: 'Kamehameha' },
      { text: 'Final Flash' },
      { text: 'Desructo Disk' }
    ],
    'Kamehameha'
  ),
  new Question(
    'What is the name of this anime?',
    [
      { text: 'Captain Tsubasa' },
      { text: 'Kuroko no Basket' },
      { text: 'Haikyuu!!' },
      { text: 'Free!' }
    ],
    'Haikyuu!!',
    'haikyuu.jpeg'
  ),
  new Question(
    "Which of the following is not one of Meruem's royal guards in Hunter x Hunter?",
    [
      { text: 'Kurapika' },
      { text: 'Pitou' },
      { text: 'Pouf' },
      { text: 'Youpi' }
    ],
    'Kurapika'
  ),
  new Question(
    "What is the name of All Might's quirk",
    [
      { text: 'All for One' },
      { text: 'One for All' },
      { text: 'Black Hole' },
      { text: 'Cremation' }
    ],
    'One for All',
    'allmight.jpg'
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
