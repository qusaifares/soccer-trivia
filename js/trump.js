donaldQuestions = [
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Fake',
    'donald-fake-1.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Real',
    'donald-real-3.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Real',
    'donald-real-2.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Fake',
    'donald-fake-2.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Real',
    'donald-real-1.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Fake',
    'donald-fake-3.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Real',
    'donald-real-4.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Real',
    'donald-real-5.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Real',
    'donald-real-6.png'
  ),
  new Question(
    'Real or fake?',
    [{ text: 'Real' }, { text: 'Fake' }],
    'Fake',
    'donald-fake-4.png'
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

const audio = new Audio('audio/usa-anthem.mp3');

donaldButton.addEventListener('click', () => {
  audio.volume = 0.2;
  audio.play();
});
