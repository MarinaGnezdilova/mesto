function enableValidation(setting) {
  const forms = Array.from(document.querySelectorAll(setting.formSelector));
  forms.forEach(function (formElement) {
    setEventListeners(formElement, setting);
    toggleButtonState(formElement, setting);
  });

  function setEventListeners(formElement) {
    formElement.addEventListener("input", function (evt) {
      handlerInputForm(evt, setting);
    });
    formElement.addEventListener("submit", function (evt) {});
  }

  function handlerInputForm(evt, setting) {
    const currentForm = evt.currentTarget;
    validateInput(evt.target, setting);
    toggleButtonState(currentForm, setting);
  }

  function toggleButtonState(form, setting) {
    const submitButton = form.querySelector(setting.submitButtonSelector);
    if (form.checkValidity()) {
      submitButton.removeAttribute("disabled", true);
      submitButton.classList.remove(setting.inactiveButtonClass);
    } else {
      submitButton.setAttribute("disabled", true);
      submitButton.classList.add(setting.inactiveButtonClass);
    }
  }

  function validateInput(input, setting) {
    addCustomErrorMessage(input);
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      showInputError(input, errorElement, setting);
    } else {
      hideInputError(input, errorElement, setting);
    }
  }

  function showInputError(input, errorElement, setting) {
    input.classList.add(setting.inputErrorClass);
    errorElement.classList.add(setting.errorClass);
    errorElement.textContent = input.validationMessage;
  }

  function hideInputError(input, errorElement, setting) {
    input.classList.remove(setting.inputErrorClass);
    errorElement.classList.remove(setting.errorClass);
    errorElement.textContent = "";
  }

  function addCustomErrorMessage(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity("Вы пропустили это поле");
    }
    if (input.validity.tooShort) {
      input.setCustomValidity(
        "Минимальное количество символов:2. Длина текста сейчас 1 символ"
      );
    }
    if (input.validity.typeMismatch && input.type === "url") {
      input.setCustomValidity("Введите адрес сайта");
    }
  }
}

enableValidation({
  formSelector: ".popup__form",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_invalid",
  errorClass: "error_visible",
  inputErrorClass: "popup__form-field_error",
});
