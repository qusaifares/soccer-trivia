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

// Anime Trivia
const selectAnimeTrivia = () => {
  menuWrap.style.display = 'none';
  animeTrivia.startTrivia();
};
animeButton.addEventListener('click', () => (menuWrap.style.display = 'flex'));
animeButton.addEventListener('click', () => selectAnimeTrivia());
