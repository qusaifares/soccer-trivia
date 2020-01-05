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
    ['Pele', 'Cristiano Ronaldo', 'Zinedine Zidane', 'Lionel Messi'],
    'Lionel Messi'
  )
];

let soccerTrivia = new Trivia(soccerQuestions);

soccerTrivia.startTrivia();
