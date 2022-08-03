import { Card } from "./Сard.js";
import { FormValidator } from "./FormValidator.js";
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = document.querySelector(".popup__button-close");
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
const popupEditProfile = document.querySelector(".popup-profile");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonClosePopupNewPlace = document.querySelector(
  ".new-place-button-close"
);
const fieldPlaceName = document.querySelector(
  ".new-place-form-field-placename"
);
const fieldPicture = document.querySelector(".new-place-form-field-picture");
const formAddPlace = document.querySelector(".new-place-form");
const buttonClosePopupPicture = document.querySelector(
  ".popup-picture__button-close"
);
const popupProfile = document.querySelector(".popup-profile");
const popups = document.querySelectorAll(".popup");
const inputsFormProfile =
  popupFormEditProfile.querySelectorAll(".popup__form-field");
const inputsFormNewPlace = Array.from(
  formAddPlace.querySelectorAll(".popup__form-field")
);
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
  validationProfile.enableSubmitButton();
  inputsFormProfile.forEach(function (input) {
    validationProfile.hideInputErrorFirstOpen(input);
  });
}

function openNewPlacePopup() {
  fieldPlaceName.value = "";
  fieldPicture.value = "";
  openPopup(popupNewPlaceContent);
  validationNewPlace.toggleButtonState();
  inputsFormNewPlace.forEach(function (input) {
    validationNewPlace.hideInputErrorFirstOpen(input);
  });
}

function hideClosestPopup(evt) {
  const closestPopup = evt.target.closest(".popup");
  closePopup(closestPopup);
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
  const newElement = new Card(formAdd, ".element-template");
  const cardElement = newElement.generateCard();
  blockElements.prepend(cardElement);
  closePopup(popupNewPlaceContent);
  fieldPlaceName.value = "";
  fieldPicture.value = "";
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
buttonClosePopupProfile.addEventListener("click", () => {
  closePopup(popupEditProfile);
});
buttonClosePopupPicture.addEventListener("click", hideClosestPopup);
buttonClosePopupNewPlace.addEventListener("click", () => {
  closePopup(popupNewPlaceContent);
});
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
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  });
});

initialCards.forEach((item) => {
  blockElements.append(createCard(item));
});
