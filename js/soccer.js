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
    'How many panels is a classic soccer ball made of?',
    [{ text: '24' }, { text: '32' }, { text: '48' }, { text: '64' }],
    '32'
  ),
  new Question(
    'Who is the only player to win player of the year 6 times?',
    [
      { text: 'Pele', picture: 'pele.jpg' },
      { text: 'Cristiano Ronaldo', picture: 'ronaldo.jpg' },
      { text: 'Zinedine Zidane', picture: 'zidane.jpg' },
      { text: 'Lionel Messi', picture: 'messi.jpg' }
    ],
    'Lionel Messi'
  )
];

let soccerTrivia = new Trivia(soccerQuestions);

soccerTrivia.startTrivia();
