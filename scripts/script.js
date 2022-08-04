import { Card } from "./Сard.js";
import { FormValidator } from "./FormValidator.js";
const buttonEdit = document.querySelector(".profile__edit-button");
const contentProfileName = document.querySelector(".profile__form-name");
const contentProfileJob = document.querySelector(".profile__form-profession");
const contentPopupFieldName = document.querySelector(".popup__form-field-name");
const contentPopupFielJob = document.querySelector(".popup__form-field-job");
const popupFormEditProfile = document.querySelector(".popup-profile__form");
const nameInput = document.querySelector(".popup__form-field-name");
const jobInput = document.querySelector(".popup__form-field-job");
const profileFormName = document.querySelector(".profile__form-name");
const profileFormJob = document.querySelector(".profile__form-profession");
const blockElements = document.querySelector(".elements");
const popupNewPlaceContent = document.querySelector(".new-place");
const buttonAdd = document.querySelector(".profile__add-button");
const fieldPlaceName = document.querySelector(
  ".new-place-form-field-placename"
);
const fieldPicture = document.querySelector(".new-place-form-field-picture");
const formAddPlace = document.querySelector(".new-place-form");
const popupProfile = document.querySelector(".popup-profile");
const popups = document.querySelectorAll(".popup");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const setting = {
  formSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inputSelector: ".popup__form-field",
  inactiveButtonClass: "popup__button_invalid",
  errorClass: "error_visible",
  inputErrorClass: "popup__form-field_error",
};
const validationNewPlace = new FormValidator(setting, formAddPlace);
const validationProfile = new FormValidator(setting, popupFormEditProfile);

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function openPropfilePopup() {
  contentPopupFieldName.value = contentProfileName.textContent;
  contentPopupFielJob.value = contentProfileJob.textContent;
  openPopup(popupProfile);
  validationProfile.resetValidation();
}

function openNewPlacePopup() {
  fieldPlaceName.value = "";
  fieldPicture.value = "";
  openPopup(popupNewPlaceContent);
  validationNewPlace.resetValidation();
}

function closePopup(closestPopup) {
  closestPopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileFormName.textContent = nameInput.value;
  profileFormJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const formAdd = { name: fieldPlaceName.value, link: fieldPicture.value };
  const cardElement = createCard(formAdd);
  blockElements.prepend(cardElement);
  closePopup(popupNewPlaceContent);
}

function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function createCard(item) {
  const card = new Card(item, ".element-template");
  const cardElement = card.generateCard();
  return cardElement;
}

validationNewPlace.enableValidation();
validationProfile.enableValidation();
buttonEdit.addEventListener("click", function (evt) {
  openPropfilePopup();
});
buttonAdd.addEventListener("click", function (evt) {
  openNewPlacePopup();
});
popupFormEditProfile.addEventListener("submit", handleProfileFormSubmit);
formAddPlace.addEventListener("submit", handleNewPlaceFormSubmit);

popups.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    };
  });
});

initialCards.forEach((item) => {
  blockElements.append(createCard(item));
});
