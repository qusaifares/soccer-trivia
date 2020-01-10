closeMenu.addEventListener(
  'click',
  () => (menuWrap.style.transform = 'scale(0)')
);
startButton.addEventListener('click', () => {
  menuWrap.style.transform = 'scale(1)';
  menuWrap.style.opacity = '1';
});

// Soccer Trivia
const selectSoccerTrivia = () => {
  menuWrap.style.transform = 'scale(0)';
  soccerTrivia.startTrivia();
};
soccerButton.addEventListener('click', () => selectSoccerTrivia());

//
const selectDonaldTrivia = () => {
  menuWrap.style.transform = 'scale(0)';
  donaldTrivia.startTrivia();
};
donaldButton.addEventListener('click', () => selectDonaldTrivia());

// Anime Trivia
const selectAnimeTrivia = () => {
  menuWrap.style.transform = 'scale(0)';
  animeTrivia.startTrivia();
};
animeButton.addEventListener('click', () => selectAnimeTrivia());
