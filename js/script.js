closeMenu.addEventListener('click', () => (menuWrap.style.display = 'none'));

// Soccer Trivia
const selectSoccerTrivia = () => {
  menuWrap.style.display = 'none';
  soccerTrivia.startTrivia();
};
startButton.addEventListener('click', () => (menuWrap.style.display = 'flex'));
soccerButton.addEventListener('click', () => selectSoccerTrivia());

//
const selectDonaldTrivia = () => {
  menuWrap.style.display = 'none';
  donaldTrivia.startTrivia();
};
donaldButton.addEventListener('click', () => (menuWrap.style.display = 'flex'));
donaldButton.addEventListener('click', () => selectDonaldTrivia());
