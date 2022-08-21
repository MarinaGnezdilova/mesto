import { createCard } from './utils.js'
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
const blockElements = ".elements";
export const buttonAdd = document.querySelector(".profile__add-button");
export const buttonEdit = document.querySelector(".profile__edit-button");
const formAddPlace = document.querySelector(".new-place-form");
const popupFormEditProfile = document.querySelector(".popup-profile__form");
export const userNameFieldForm = document.querySelector(".popup__form-field-name");
export const aboutUserFieldForm = document.querySelector(".popup__form-field-job");
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
  inputBlockSelector: ".popup__input-block"
};
export const validationNewPlace = new FormValidator(setting, formAddPlace);
export const validationProfile = new FormValidator(setting, popupFormEditProfile);
export const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  blockElements
);

export const popupPicture = new PopupWithImage(".popup-picture");
export const popupNewPlace = new PopupWithForm({
  popupSelector: ".new-place",
  handleFormSumbit: (formData) => {
    const cardElement = createCard(formData);
    cardList.prependItem(cardElement);
  },
});
export const popupProfile = new PopupWithForm({
  popupSelector: ".popup-profile",
  handleFormSumbit: (formData) => {
    userInfo.setUserInfo(formData);
  },
});
export const userInfo = new UserInfo(
  ".profile__form-name",
  ".profile__form-profession"
);
