const buttonEdit = document.querySelector('.profile__edit-button');
const buttonSave = document.querySelector('.popup__button');
const buttonClosePopup = document.querySelector('.popup__button-close');
const contentProfileName = document.querySelector('.profile__form-name');
const contentProfileJob = document.querySelector('.profile__form-profession');
const contentPopupName = document.querySelector('.popup__form-field-name');
const contentPopupJob = document.querySelector('.popup__form-field-job');
const popupContent = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-field-name');
const jobInput = document.querySelector('.popup__form-field-job');
const profileFormName = document.querySelector('.profile__form-name');
const profileFormJob = document.querySelector('.profile__form-profession');
const elementTemplate = document.querySelector('#element').content;
const blockElements = document.querySelector('.elements');
const popupNewPlaceContent = document.querySelector('.popup_new-place');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonClosePopupNewPlace = document.querySelector('.popup_new-place__button-close');
const buttonCreatePlace = document.querySelector('.popup_new-place__button');
const fieldPlaceName = document.querySelector('.popup_new-place__form-field-placename');
const fieldPicture = document.querySelector('.popup_new-place__form-field-picture');
const formAddPlace = document.querySelector('.popup_new-place_form');
const popupPicture = document.querySelector('.popup-picture');
const buttonClosePopupPicture = document.querySelector('.popup-picture__button-close');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function openPopup() {
    popupContent.classList.add('popup_opened');
    contentPopupName.value = contentProfileName.textContent;
    contentPopupJob.value = contentProfileJob.textContent;
}
buttonEdit.addEventListener('click', openPopup);

function openPopupNewPlace() {
    popupNewPlaceContent.classList.add('popup_opened');
}
buttonAdd.addEventListener('click', openPopupNewPlace);

function closePopup(evt) {
    const closeElement = evt.target;
    closeElement.closest('.popup').classList.remove('popup_opened');
}
buttonClosePopup.addEventListener('click', closePopup);
buttonSave.addEventListener('click', closePopup);
buttonClosePopupPicture.addEventListener('click', closePopup);
buttonClosePopupNewPlace.addEventListener('click', closePopup);
buttonCreatePlace.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileFormName.textContent = nameInput.value;
    profileFormJob.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);



function addPlaceSubmitHandle(evt) {
    evt.preventDefault();
    const newElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
    newElement.querySelector('.elements__title').textContent = fieldPlaceName.value;
    newElement.querySelector('.elements__photo').src = fieldPicture.value;
    newElement.querySelector('.button-like').addEventListener('click', function (evt) {
      const targetClick = evt.target;
      targetClick.classList.toggle('button-like_status_active');
  });
  newElement.querySelector('.elements__delete-icon').addEventListener('click', function(evt){
    const targetClick = evt.target;
    const elementsForDelete = targetClick.closest('.elements__element');
    elementsForDelete.remove();
});
newElement.querySelector('.elements__photo').addEventListener('click', function(evt) {
    popupPicture.classList.add('popup_opened');
    const targetClick = evt.target;
    const imagePopupPicture = document.querySelector('.popup-picture__image');
    imagePopupPicture.src = targetClick.src;
    const titlePopupTitle = document.querySelector('.popup-picture__title');
    const popupTitleNew = targetClick.closest('.elements__element').querySelector('.elements__title');
    titlePopupTitle.textContent = popupTitleNew.textContent;
  });
    blockElements.prepend(newElement);
}
formAddPlace.addEventListener('submit', addPlaceSubmitHandle);

initialCards.forEach(function(item){
    const newElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
    newElement.querySelector('.elements__title').textContent = item.name;
    newElement.querySelector('.elements__photo').src = item.link;
    newElement.querySelector('.button-like').addEventListener('click', function (evt) {
        const targetClick = evt.target;
        targetClick.classList.toggle('button-like_status_active');
    });
    newElement.querySelector('.elements__delete-icon').addEventListener('click', function(evt){
        const targetClick = evt.target;
        const elementsForDelete = targetClick.closest('.elements__element');
        elementsForDelete.remove();
    });
    newElement.querySelector('.elements__photo').addEventListener('click', function(evt) {
      popupPicture.classList.add('popup_opened');
      const targetClick = evt.target;
      const imagePopupPicture = document.querySelector('.popup-picture__image');
      imagePopupPicture.src = targetClick.src;
      const titlePopupTitle = document.querySelector('.popup-picture__title');
      const popupTitleNew = targetClick.closest('.elements__element').querySelector('.elements__title');
      titlePopupTitle.textContent = popupTitleNew.textContent;
    });
    blockElements.append(newElement);
});



