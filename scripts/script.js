let cliclButtonEdit = document.querySelector('.profile__edit-button');
console.log(cliclButtonEdit);

let clickButtonSave = document.querySelector('.popup__button');
console.log(clickButtonSave);

function openPopup() {
    let popupContent = document.querySelector('.popup');
    console.log(popupContent);
    popupContent.classList.add('popup_opened');
}

cliclButtonEdit.addEventListener('click', openPopup);

let clickButtonClosePopup = document.querySelector('.popup__close-icon');
console.log(clickButtonClosePopup);

function closePopup() {
    let popupContent = document.querySelector('.popup');
    popupContent.classList.remove('popup_opened');
}

clickButtonClosePopup.addEventListener('click', closePopup);

clickButtonSave.addEventListener('click', closePopup);