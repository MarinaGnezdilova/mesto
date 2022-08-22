import "../pages/index.css";
import { blockElements, formAddPlace, buttonAdd, buttonEdit, userNameFieldForm, aboutUserFieldForm, initialCards, setting, popupFormEditProfile } from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from '../components/Сard.js';
const validationNewPlace = new FormValidator(setting, formAddPlace);
const validationProfile = new FormValidator(setting, popupFormEditProfile);
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  blockElements
);
const popupPicture = new PopupWithImage(".popup-picture");
const popupNewPlace = new PopupWithForm({
  popupSelector: ".new-place",
  handleFormSumbit: (formData) => {
    const cardElement = createCard(formData);
    cardList.prependItem(cardElement);
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

function openImagePopup(name, link) {
  popupPicture.open(name, link);
}

function createCard(item) {
  const card = new Card(item, ".element-template", openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

cardList.renderItems();
popupPicture.setEventListener();
popupNewPlace.setEventListener();
popupProfile.setEventListener();
buttonAdd.addEventListener("click", () => {
  popupNewPlace.open();
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
