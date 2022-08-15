import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSumbit }) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this.handleFormSumbit = handleFormSumbit;
  }
  _getInputValues = () => {
    this._inputList = this._popup.querySelectorAll(".popup__form-field");
    this._formValue = {};
    this._inputList.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  };
  setEventListener = () => {
    super.setEventListener();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSumbit(this._getInputValues());
      this.close();
    });
  };
}
