/*import "../pages/index.css";*/
import {
  blockElements,
  formAddPlace,
  formAvatar,
  buttonAdd,
  buttonEdit,
  userNameFieldForm,
  aboutUserFieldForm,
  setting,
  popupFormEditProfile
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Сard.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { Api } from "../components/Api.js";
const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-49/cards/",
  "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
  renderTextButton
);
const validationNewPlace = new FormValidator(setting, formAddPlace);
const validationProfile = new FormValidator(setting, popupFormEditProfile);
const validationAvatarLink = new FormValidator(setting, formAvatar)
const popupPicture = new PopupWithImage(".popup-picture");
const popupNewPlace = new PopupWithForm({
  popupSelector: ".new-place",
  handleFormSumbit: (formData) => {
    renderTextButton(true, '.new-place-button');
    api.addCard(formData).then((res) => {
      const newCard = createCard(res);
      cardList.prependItem(newCard);
    })
    .finally(() => {
      renderTextButton(false, '.new-place-button');
    });
  }
})

const popupProfile = new PopupWithForm({
  popupSelector: ".popup-profile",
  handleFormSumbit: (formData) => {
    renderTextButton(true, '.popup-profile__button');
    api.editProfile(formData);
    userInfo.setUserInfoOnPage(formData);
  },
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup-edit-avatar",
  handleFormSumbit: (avatar) => {
    renderTextButton(true, '.popup-edit-avatar__button');
    api.changeAvatar(avatar).then((res) => {
      const profileAvatar = document.querySelector(".profile__avatar");
      profileAvatar.src = res.avatar;
    })
    .finally(() => {
      renderTextButton(false, '.popup-edit-avatar__button');
    });

  },
});
const avatarEditIcon = document.querySelector(".profile__edit-icon");


const userInfo = new UserInfo(
  ".profile__form-name",
  ".profile__form-profession",
  ".profile__form-name",
  ".profile__form-profession",
  ".profile__avatar"
);

const popupDeleteCard = new PopupWithConfirmation(
  ".popup-delete-card",
  handleDelete
);
const cardList = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  blockElements
);



async function handleDelete(idCard, card) {
  try {
    card.remove();
    api.deleteCard(idCard);
  } catch (e) {
    alert("Не удалось удалить карточку");
  }
}


function openPopupDelete(idCard, card) {
  popupDeleteCard.open();
  popupDeleteCard.submit(idCard, card);
}

function createCard(item) {
  const card = new Card(
    item,
    ".element-template",
    openImagePopup,
    openPopupDelete,
    handleSetLike,
    handleDeleteLike
  );

  const cardElement = card.generateCard();
  return cardElement;
}

function handleSetLike(idCard, card) {
  api.setLike(idCard, card).then((res) => {
    const blockLike = card.querySelector(".elements__amount-like");
    blockLike.textContent = res.likes.length;
  });
}

function handleDeleteLike(idCard, card) {
  api.deleteLike(idCard, card).then((res) => {
    const blockLike = card.querySelector(".elements__amount-like");
    blockLike.textContent = res.likes.length;
  })
}

function openImagePopup(name, link) {
  popupPicture.open(name, link);
}

function renderTextButton(isLoading, buttonSelector) {
  const button = document.querySelector(buttonSelector);
  if(isLoading) {
    button.textContent = 'Сохранение...';
  } else {button.textContent = 'Сохранить';}
}

popupPicture.setEventListener();
popupNewPlace.setEventListener();
popupProfile.setEventListener();
popupDeleteCard.setEventListener();
popupEditAvatar.setEventListener();

buttonAdd.addEventListener("click", () => {
  popupNewPlace.open();
  validationNewPlace.resetValidation();
});
buttonEdit.addEventListener("click", () => {
  popupProfile.open();
  const formData = userInfo.getInfo();
  userNameFieldForm.value = formData.name;
  aboutUserFieldForm.value = formData.about;
  validationProfile.resetValidation();
});
avatarEditIcon.addEventListener("click", () => {
  popupEditAvatar.open();
  validationAvatarLink.resetValidation();
});

validationNewPlace.enableValidation();
validationProfile.enableValidation();
validationAvatarLink.enableValidation();


api.getCards().then((res) => {
  cardList.renderItems(res);
})
api.getInfoUser().then((res) => {
  userInfo.setUserInfoOnPage(res);
  const avatar = document.querySelector(".profile__avatar");
  avatar.src = res.avatar;
});