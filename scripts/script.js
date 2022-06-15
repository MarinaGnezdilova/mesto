let ButtonEdit = document.querySelector('.profile__edit-button');
let ButtonSave = document.querySelector('.popup__button');
let ButtonClosePopup = document.querySelector('.popup__button-close');
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
    let popupContent = document.querySelector('.popup');
    popupContent.classList.add('popup_opened');
}

ButtonEdit.addEventListener('click', openPopup);

function closePopup() {

    popupContent.classList.remove('popup_opened');
}

ButtonClosePopup.addEventListener('click', closePopup);
ButtonSave.addEventListener('click', closePopup);
contentPopupName.value = contentProfileName.textContent;
contentPopupJob.value = contentProfileJob.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();
    let newContentFormName = nameInput.value;
    let newContentFormJob = jobInput.value;
    profileFormName.textContent = newContentFormName;
    profileFormJob.textContent = newContentFormJob;
}
formElement.addEventListener('submit', formSubmitHandler);