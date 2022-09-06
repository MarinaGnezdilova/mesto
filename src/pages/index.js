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
  "https://mesto.nomoreparties.co/v1/cohort-49/cards",
  "90f8d9a0-3583-4d46-8126-1c35c51fd02a"
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
      const newCard = createCard(res, res.owner._id);
      cardList.prependItem(newCard);
      popupNewPlace.close();
    })
    .catch((e) => {
      alert("Не удалось добавить карточку");
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
    api.editProfile(formData).then((res) => {
      userInfo.setUserInfo(formData);
      popupProfile.close();
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderTextButton(false, '.popup-profile__button');
    });

  },
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup-edit-avatar",
  handleFormSumbit: (avatar) => {
    renderTextButton(true, '.popup-edit-avatar__button');
    api.changeAvatar(avatar).then((res) => {
      userInfo.setAvatar(res);
      popupEditAvatar.close();
    })
    .catch((e) => {
      alert("Не удалось изменить аватар");
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
    renderer: (item, id) => {
      const cardElement = createCard(item, id);
      cardList.addItem(cardElement);
    },
  },
  blockElements
);

function handleDelete(idCard, card) {
  api.deleteCard(idCard)
  .then((res) => {
    card.remove();
    popupDeleteCard.close();

  })
  .catch((e) => {
    alert("Не удалось удалить карточку");
  })
}



function openPopupDelete(idCard, card) {
  popupDeleteCard.open(idCard, card);
}

function createCard(item, id) {
  const card = new Card(
    item,
    ".element-template",
    openImagePopup,
    openPopupDelete,
    handleSetLike,
    handleDeleteLike, id
  );

  const cardElement = card.generateCard();
  return cardElement;
}

function handleSetLike(idCard, card, buttonLike) {
  api.setLike(idCard).then((res) => {
    const blockLike = card.querySelector(".elements__amount-like");
    blockLike.textContent = res.likes.length;
    buttonLike.classList.toggle("button-like_status_active");
  })
  .catch((e) => {
    alert("Не удалось поставить лайк");
  })
}


function handleDeleteLike(idCard, card, buttonLike) {
  api.deleteLike(idCard).then((res) => {
    const blockLike = card.querySelector(".elements__amount-like");
    blockLike.textContent = res.likes.length;
    buttonLike.classList.toggle("button-like_status_active");
  })
  .catch((e) => {
    alert("Не удалось удалить лайк");})
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

Promise.all([api.getCards(), api.getInfoUser()])
.then(([cards, userData]) => {
  const id = userData._id;
  cardList.renderItems(cards, id);
  userInfo.setUserInfoOnPage(userData);
})
.catch((e) => {
  alert("Не удалось получитm данные страницы");})

