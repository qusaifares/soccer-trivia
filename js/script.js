const updateMenuScale = (scale) => {
  menuWrap.style.transform = `scale(${scale})`;
};

const openMenu = () => updateMenuScale(1);
const closeMenu = () => updateMenuScale(0);

closeMenuBtn.addEventListener('click', closeMenu);
startButton.addEventListener('click', openMenu);

// Soccer Trivia
const selectSoccerTrivia = () => {
  closeMenu();
  soccerTrivia.startTrivia();
};
soccerButton.addEventListener('click', () => selectSoccerTrivia());

// Donald Trivia
const selectDonaldTrivia = () => {
  closeMenu();
  donaldTrivia.startTrivia();
};
donaldButton.addEventListener('click', () => selectDonaldTrivia());

// Anime Trivia
const selectAnimeTrivia = () => {
  closeMenu();
  animeTrivia.startTrivia();
};
animeButton.addEventListener('click', () => selectAnimeTrivia());
