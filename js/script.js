function selectSoccerTrivia() {
  menuWrap.style.display = 'none';
  soccerTrivia.startTrivia();
}

startButton.addEventListener('click', () => (menuWrap.style.display = 'flex'));

closeMenu.addEventListener('click', () => (menuWrap.style.display = 'none'));

soccerButton.addEventListener('click', () => selectSoccerTrivia());
