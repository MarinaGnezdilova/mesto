export class FormValidator {
  constructor(setting, form) {
    this._formSelector = setting.formSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._errorClass = setting.errorClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._inputSelector = setting.inputSelector;
    this._form = form;
    this._submitButton = form.querySelector(setting.submitButtonSelector);
  }

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    const callValidareForm = (input) => {
      this._validateForm(input);
    };
    inputs.forEach((input) => {
      input.addEventListener("input", callValidareForm);
    });
  }

  _validateForm(input) {
    this._validateInput(input);
    this.toggleButtonState();
  }

  _validateInput(input) {
    /*this._addCustomErrorMessage(input);*/
    const errorElement = input.target
      .closest(".popup__input-block")
      .querySelector(`#${input.target.id}-error`);
    if (!input.target.validity.valid) {
      this._showInputError(input, errorElement);
    } else {
      this._hideInputError(input, errorElement);
    }
  }

  /*_addCustomErrorMessage(input) {
    input.target.setCustomValidity("");
    if (input.target.validity.valueMissing) {
      input.target.setCustomValidity("Вы пропустили это поле");
    }
    if (input.target.validity.tooShort) {
      input.target.setCustomValidity(
        "Минимальное количество символов:2. Длина текста сейчас 1 символ"
      );
    }
    if (input.target.validity.typeMismatch && input.target.type === "url") {
      input.target.setCustomValidity("Введите адрес сайта");
    }
  }*/

  _showInputError(input, errorElement) {
    input.target.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.target.validationMessage;
  }

  _hideInputError(input, errorElement) {
    input.target.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  enableValidation() {
    this._setEventListeners();
  }

  toggleButtonState() {
    if (this._form.checkValidity()) {
      this.enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }
  }

  _disableSubmitButton() {
    this._submitButton.setAttribute("disabled", true);
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  hideInputErrorFirstOpen(evt) {
    const errorElement = evt
      .closest(".popup__input-block")
      .querySelector(`#${evt.id}-error`);
    evt.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  enableSubmitButton() {
    this._submitButton.removeAttribute("disabled", true);
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }
}
