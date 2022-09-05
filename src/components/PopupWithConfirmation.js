import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._handleDelete = handleDelete;
    this._buttonСonfirmation = this._popup.querySelector(
      ".popup-delete-card__button"
    );
  }

  setEventListener() {
    super.setEventListener();
    console.log(this.id);
    this._buttonСonfirmation.addEventListener("click", () => {
      this._handleDelete(this.id, this.card);
    });
  }

  open(idCard, card) {
    super.open();
    this.card = card;
    this.id = idCard;
  }
}
