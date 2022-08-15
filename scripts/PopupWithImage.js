import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._name = this._popupSelector.querySelector(".popup-picture__title");
    this._image = this._popupSelector.querySelector(".popup-picture__image");
  }
  open = (name, image) => {
    super.open();
    this._name.textContent = name;
    this._image.src = image;
    this._image.alt = name;
  };
}
