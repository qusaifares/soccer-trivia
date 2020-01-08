function selectSoccerTrivia() {
  console.log(menuWrap.style.display);
  menuWrap.style.display = 'none';
  console.log(menuWrap.style.display);
  soccerTrivia.startTrivia();
}

startButton.addEventListener('click', () => (menuWrap.style.display = 'flex'));

closeMenu.addEventListener('click', () => (menuWrap.style.display = 'none'));

soccerButton.addEventListener('click', selectSoccerTrivia());
