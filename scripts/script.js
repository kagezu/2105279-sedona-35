const modal = document.querySelector('.modal-container');
const popupButton = document.querySelector('.navigation-button-link');

popupButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-disabled');
});
