export class Card {
  constructor(data, templateSelector, openImagePopup) {
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate = () => {
    const card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);
    return card;
  };

  generateCard = () => {
    this._card = this._getTemplate();
    this._card.querySelector(".elements__title").textContent = this._name;
    this._card.querySelector(".elements__photo").src = this._image;
    this._card.querySelector(".elements__photo").alt = this._name;
    this._setEventListeners();
    return this._card;
  };

  _handleButtonLikeClick() {
    this._likeButton.classList.toggle("button-like_status_active");
  }

  _setEventListeners() {
    this._likeButton = this._card.querySelector(".button-like");
    this._iconDelete = this._card.querySelector(".elements__delete-icon");
    this._imageCard = this._card.querySelector(".elements__photo");

    this._likeButton.addEventListener("click", () =>
      this._handleButtonLikeClick()
    );
    this._iconDelete.addEventListener("click", () => this._callRemoveCard());
    this._imageCard.addEventListener("click", () =>
      this._openImagePopup(this._name, this._image)
    );
  }

  _callRemoveCard() {
    this._card.remove();
  }
}
