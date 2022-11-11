const modal = document.querySelector('.modal-container');
const popupOpenButton = document.querySelector('.navigation-button-link');
const popupCloseButton = document.querySelector('.modal-close-button');

popupOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-disabled');
});

popupCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-disabled');
});
