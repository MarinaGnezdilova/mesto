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
const elementTemplate = document.querySelector("#element").content;
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
const popupPicture = document.querySelector(".popup-picture");
const buttonClosePopupPicture = document.querySelector(
  ".popup-picture__button-close"
);
const imagePopupPicture = document.querySelector(".popup-picture__image");
const titlePopupTitle = document.querySelector(".popup-picture__title");
const popupProfile = document.querySelector(".popup-profile");
const containers = document.querySelectorAll(".popup__container");
const popups = document.querySelectorAll(".popup");
const inputsFormProfile = popupFormEditProfile.querySelectorAll(".popup__form-field");
const inputsFormNewPlace = formAddPlace.querySelectorAll(".popup__form-field");
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
  inactiveButtonClass: "popup__button_invalid",
  errorClass: "error_visible",
  inputErrorClass: "popup__form-field_error",
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function openPropfilePopup() {
  contentPopupFieldName.value = contentProfileName.textContent;
  contentPopupFielJob.value = contentProfileJob.textContent;
  openPopup(popupProfile);
  inputsFormProfile.forEach(function (input) {
    hideInputErrorFirstOpen(input,setting);
  });
  disableSubmitButton(popupProfile,setting);
}

function openNewPlacePopup() {
  fieldPlaceName.value = "";
  fieldPicture.value = "";
  openPopup(popupNewPlaceContent);
  inputsFormNewPlace.forEach(function (input) {
    hideInputErrorFirstOpen(input,setting);
  });
  disableSubmitButton(popupNewPlaceContent,setting);
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

function createCard(item) {
  const cardElement = elementTemplate.querySelector(".elements__element").cloneNode(true);
  cardElement.querySelector(".button-like").addEventListener("click", function (evt) {
      const targetClick = evt.target;
      targetClick.classList.toggle("button-like_status_active");
    });
  cardElement
    .querySelector(".elements__delete-icon")
    .addEventListener("click", function (evt) {
      cardElement.remove();
    });
  const imageCard = cardElement.querySelector(".elements__photo");
  imageCard.addEventListener("click", function (evt) {
    openPopup(popupPicture);
    imagePopupPicture.src = item.link;
    imagePopupPicture.alt = item.name;
    titlePopupTitle.textContent = item.name;
  });
  cardElement.querySelector(".elements__title").textContent = item.name;
  imageCard.src = item.link;
  imageCard.alt = item.name;
  return cardElement;
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const formAdd = { name: fieldPlaceName.value, link: fieldPicture.value };
  const newElement = createCard(formAdd);
  blockElements.prepend(newElement);
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

buttonClosePopupProfile.addEventListener("click", hideClosestPopup);
buttonClosePopupPicture.addEventListener("click", hideClosestPopup);
buttonClosePopupNewPlace.addEventListener("click", hideClosestPopup);
buttonEdit.addEventListener("click", function (evt) {
  openPropfilePopup(popupEditProfile);
});
buttonAdd.addEventListener("click", function (evt) {
  openNewPlacePopup(popupNewPlaceContent);
});
popupFormEditProfile.addEventListener("submit", handleProfileFormSubmit);
formAddPlace.addEventListener("submit", handleNewPlaceFormSubmit);

initialCards.forEach(function (item) {
  const newElement = createCard(item);
  blockElements.append(newElement);
});

popups.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  });
});

