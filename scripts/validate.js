function enableValidation (setting) {
    const forms = Array.from(document.querySelectorAll(setting.formSelector));
    forms.forEach(function(elem) {
        setEventListeners(elem, setting);
        validateForm(elem, setting);
    });


    function setEventListeners(elem) {
    elem.addEventListener('input', function(evt){
        handlerInputForm(evt,setting);
    });
    elem.addEventListener('submit', function(evt){
    });
   };

   function handlerInputForm(evt,setting) {
    const currentForm = evt.currentTarget;
    validateInput(evt.target, setting);
    validateForm(currentForm, setting);
    };

    function validateForm(form,setting) {
        const submitButton = form.querySelector(setting.submitButtonSelector);
        if(form.checkValidity()) {
        submitButton.removeAttribute('disabled', true);
        submitButton.classList.remove(setting.inactiveButtonClass);
        } else {
            submitButton.setAttribute('disabled', true);
            submitButton.classList.add(setting.inactiveButtonClass);
        }
    };

    function validateInput(input,setting) {
        addCustomErrorMessage(input);
        const errorElement = input.nextElementSibling;
        /*const errorElement = input.parentNode.querySelector(`#${input.id}-error`);*/
        errorElement.classList.add(setting.errorClass);
        errorElement.textContent = input.validationMessage;
        if(!input.validity.valid) {
            input.classList.add(setting.inputErrorClass);
            console.log(input.classList);
        } else {
            input.classList.remove(setting.inputErrorClass);
        }
    }
    function addCustomErrorMessage(input) {
        input.setCustomValidity('');
        if(input.validity.valueMissing) {
            input.setCustomValidity('Вы пропустили это поле');
        }
        if(input.validity.tooShort) {
            input.setCustomValidity('Минимальное количество символов:2. Длина текста сейчас 1 символ');
        }
        if(input.validity.typeMismatch && input.type === 'url') {
            input.setCustomValidity('Введите адрес сайта');
        }
    }
};

enableValidation({
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    errorClass: 'error_visible',
    inputErrorClass: 'popup__form-field_error',
  });

