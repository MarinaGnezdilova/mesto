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
    const imageCard = this._card.querySelector('.elements__photo');
    const titleCard = this._card.querySelector('.elements__title');
    this._setEventListeners();
    imageCard.src = this._image;
    titleCard.textContent = this._name;
    imageCard.alt = this._name;
    return this._card;
  }

  _handleButtonLikeClick() {
    this._likeButton.classList.toggle("button-like_status_active");
  }

  _setEventListeners() {
    const popupPicture = document.querySelector(".popup-picture");
    const titlePopupTitle = document.querySelector(".popup-picture__title");
    const imagePopupPicture = document.querySelector(".popup-picture__image");

    const openPopupImage = () => {
      openPopup(popupPicture);
      imagePopupPicture.src = this._image;
      imagePopupPicture.alt = this._name;
      titlePopupTitle.textContent = this._name;
    };

    this._likeButton = this._card.querySelector(".button-like");
    this._iconDelete = this._card.querySelector(".elements__delete-icon");
    this._imageCard = this._card.querySelector(".elements__photo");

    this._likeButton.addEventListener("click", () => this._handleButtonLikeClick());
    this._iconDelete.addEventListener("click",  () => this._callRemoveCard());
    this._imageCard.addEventListener("click", openPopupImage);
  }

  _callRemoveCard() {
    this._card.remove();
  };
}
