export class Card {
  constructor(data, templateSelector, openImagePopup, openPopupDelete, handleSetLike, handleDeleteLike) {
    this._name = data.name;
    this._image = data.link;
    this._likes =  data.likes;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
    this._owner = data.owner._id; /*fc3090ca812d87234f1e5e39*/
    this._popupDelete = openPopupDelete;
    this._idCard = data._id;
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;

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
    this._likeButton = this._card.querySelector(".button-like");
    this._iconDelete = this._card.querySelector(".elements__delete-icon");
    this._imageCard = this._card.querySelector(".elements__photo");
    this._blockLike = this._card.querySelector('.elements__amount-like');
    this._card.querySelector(".elements__title").textContent = this._name;
    this._imageCard.src = this._image;
    this._imageCard.alt = this._name;
    this._blockLike.textContent = this._likes.length;
    this._setEventListeners();
    this._setLikes();
    if (this._owner === 'fc3090ca812d87234f1e5e39') {
      return this._card;
    } else {
      this._iconDelete.remove();
      return this._card;}
  };

  _setLikes() {
      if (this._likes.length > 0) {
        for (let i = 0; i < this._likes.length; i++)
        {if (this._likes[i]._id === 'fc3090ca812d87234f1e5e39' ) {
          this._likeButton.classList.add("button-like_status_active");
        }}
        }
    }


  _setEventListeners() {
    this._likeButton.addEventListener("click", () =>{
      if(this._likeButton.classList.contains("button-like_status_active")) {
    this._handleDeleteLike(this._idCard, this._card);
    this._likeButton.classList.toggle("button-like_status_active");
} else {
    this._handleSetLike(this._idCard, this._card);
    this._likeButton.classList.toggle("button-like_status_active");
  }})
    this._iconDelete.addEventListener("click", () => {
      this._popupDelete(this._idCard, this._card);
    });
    this._imageCard.addEventListener("click", () =>
      this._openImagePopup(this._name, this._image)
    );
  }


  _callRemoveCard() {
    this._card.remove();
  }
}

