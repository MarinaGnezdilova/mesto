let buttonEdit = document.querySelector('.profile__edit-button');
let buttonSave = document.querySelector('.popup__button');
let buttonClosePopup = document.querySelector('.popup__button-close');
let contentProfileName = document.querySelector('.profile__form-name');
let contentProfileJob = document.querySelector('.profile__form-profession');
let contentPopupName = document.querySelector('.popup__form-field-name');
let contentPopupJob = document.querySelector('.popup__form-field-job');
let popupContent = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-field-name');
let jobInput = document.querySelector('.popup__form-field-job');
let profileFormName = document.querySelector('.profile__form-name');
let profileFormJob = document.querySelector('.profile__form-profession');

function openPopup() {
    popupContent.classList.add('popup_opened');
    contentPopupName.value = contentProfileName.textContent;
    contentPopupJob.value = contentProfileJob.textContent;
}

buttonEdit.addEventListener('click', openPopup);

function closePopup() {
    popupContent.classList.remove('popup_opened');
}

buttonClosePopup.addEventListener('click', closePopup);
buttonSave.addEventListener('click', closePopup);


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileFormName.textContent = nameInput.value;
    profileFormJob.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);