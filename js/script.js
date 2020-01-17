closeMenu.addEventListener(
  'click',
  () => (menuWrap.style.transform = 'scale(0)')
);

startButton.addEventListener('click', () => {
  menuWrap.style.transform = 'scale(1)';
  menuWrap.style.opacity = '1';
});

// Consider ways to make this DRY. Other than calling different trivia, the functionality is largely the same.  Could you pass the selection in based on an id or data

// Soccer Trivia
const selectSoccerTrivia = () => {
  menuWrap.style.transform = 'scale(0)';
  soccerTrivia.startTrivia();
};
soccerButton.addEventListener('click', () => selectSoccerTrivia());

// The Donald Trivia
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
