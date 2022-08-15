import { Section } from "./Section.js";
import { Card } from "./Сard.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
const blockElements = ".elements";
const container = document.querySelector(".elements");
const popupImage = document.querySelector(".popup-picture__image");
const popupImageCaption = document.querySelector(".popup-picture__title");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonEdit = document.querySelector(".profile__edit-button");
const formAddPlace = document.querySelector(".new-place-form");
const popupFormEditProfile = document.querySelector(".popup-profile__form");
const fieldPlaceName = document.querySelector(
  ".new-place-form-field-placename"
);
const userNameFieldForm = document.querySelector(".popup__form-field-name");
const aboutUserFieldForm = document.querySelector(".popup__form-field-job");
const fieldPicture = document.querySelector(".new-place-form-field-picture");
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
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".element-template", openImagePopup);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  blockElements
);
const popupPicture = new PopupWithImage(".popup-picture");
const popupNewPlace = new PopupWithForm({
  popupSelector: ".new-place",
  handleFormSumbit: (formData) => {
    const card = new Card(formData, ".element-template", openImagePopup);
    const cardElement = card.generateCard();
    container.prepend(cardElement);
  },
});
const popupProfile = new PopupWithForm({
  popupSelector: ".popup-profile",
  handleFormSumbit: (formData) => {
    userInfo.setUserInfo(formData);
  },
});
const userInfo = new UserInfo(
  ".profile__form-name",
  ".profile__form-profession"
);
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function openImagePopup(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageCaption.textContent = name;
  const popup = popupImage.closest(".popup-picture");
  openPopup(popup);
}
cardList.renderItems();
popupPicture.setEventListener();
popupNewPlace.setEventListener();
popupProfile.setEventListener();
buttonAdd.addEventListener("click", () => {
  popupNewPlace.open();
  fieldPlaceName.value = "";
  fieldPicture.value = "";
  validationNewPlace.resetValidation();
});

buttonEdit.addEventListener("click", () => {
  popupProfile.open();
  const formData = userInfo.getInfo();
  userNameFieldForm.value = formData.name;
  aboutUserFieldForm.value = formData.aboutUser;
  validationProfile.resetValidation();
});
validationNewPlace.enableValidation();
validationProfile.enableValidation();
