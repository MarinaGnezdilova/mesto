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
    this._card
      .querySelector(".button-like")
      .classList.toggle("button-like_status_active");
  }

  _setEventListeners() {
    this._card.querySelector(".button-like").addEventListener("click", () => {
      this._handleButtonLikeClick();
    });
    this._card
      .querySelector(".elements__delete-icon")
      .addEventListener("click", () => {
        this._card.remove();
      });
    this._card
      .querySelector(".elements__photo")
      .addEventListener("click", () => {
        const popupPicture = document.querySelector(".popup-picture");
        openPopup(popupPicture);
        const imagePopupPicture = document.querySelector(
          ".popup-picture__image"
        );
        imagePopupPicture.src = this._image;
        const titlePopupTitle = document.querySelector(".popup-picture__title");
        titlePopupTitle.textContent = this._name;
      });
  }
}
