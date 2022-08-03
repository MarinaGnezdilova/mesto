import { openPopup } from "./script.js";
export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);
    return card;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    this._card.querySelector(".elements__photo").src = this._image;
    this._card.querySelector(".elements__title").textContent = this._name;
    this._card.querySelector(".elements__photo").alt = this._name;
    return this._card;
  }

  _handleButtonLikeClick() {
    this._likeButton.classList.toggle("button-like_status_active");
  }

  _setEventListeners() {
    const popupPicture = document.querySelector(".popup-picture");
    const titlePopupTitle = document.querySelector(".popup-picture__title");
    const imagePopupPicture = document.querySelector(".popup-picture__image");
    const callHandleButtonLikeClick = () => {
      this._handleButtonLikeClick();
    };
    const callRemoveCard = () => {
      this._card.remove();
    };
    const openPopupImage = () => {
      openPopup(popupPicture);
      imagePopupPicture.src = this._image;
      imagePopupPicture.alt = this._name;
      titlePopupTitle.textContent = this._name;
    };

    this._likeButton = this._card.querySelector(".button-like");
    this._iconDelete = this._card.querySelector(".elements__delete-icon");
    this._imageCard = this._card.querySelector(".elements__photo");

    this._likeButton.addEventListener("click", callHandleButtonLikeClick);
    this._iconDelete.addEventListener("click", callRemoveCard);
    this._imageCard.addEventListener("click", openPopupImage);
  }
}
