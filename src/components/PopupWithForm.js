import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSumbit }) {
    super(popupSelector);
    this.handleFormSumbit = handleFormSumbit;
    this._inputList = this._popup.querySelectorAll(".popup__form-field");
    this._form = this._popup.querySelector('.popup__form');
  }
  _getInputValues = () => {
    this._formValue = {};
    this._inputList.forEach((input) => {
      this._formValue[input.name] = input.value;
    });
    return this._formValue;
  }
  setEventListener = () => {
    super.setEventListener();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSumbit(this._getInputValues());
      this.close();
    });
  }
  close () {
    super.close();
    this._form.reset();
  }
}
