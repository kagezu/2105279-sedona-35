const modal = document.querySelector('.modal-container');
const modalOpenButton = document.querySelector('.navigation-button-link');
const modalCloseButton = document.querySelector('.modal-close-button');
const modalForm = document.querySelector('.modal-form');

// Открытие модального окна с формой
modalOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-disabled');
});

// Закрытие модального окна и сброс формы
modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-disabled');
  modalForm.reset();
});
