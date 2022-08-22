export const blockElements = ".elements";
export const buttonAdd = document.querySelector(".profile__add-button");
export const buttonEdit = document.querySelector(".profile__edit-button");
export const formAddPlace = document.querySelector(".new-place-form");
export const popupFormEditProfile = document.querySelector(".popup-profile__form");
export const userNameFieldForm = document.querySelector(".popup__form-field-name");
export const aboutUserFieldForm = document.querySelector(".popup__form-field-job");
export const initialCards = [
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
export const setting = {
  formSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inputSelector: ".popup__form-field",
  inactiveButtonClass: "popup__button_invalid",
  errorClass: "error_visible",
  inputErrorClass: "popup__form-field_error",
  inputBlockSelector: ".popup__input-block"
};
