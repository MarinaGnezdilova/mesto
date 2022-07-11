function enableValidation (setting) {
    const forms = Array.from(document.querySelectorAll(setting.formSelector));
    forms.forEach(function(elem) {
        setEventListeners(elem, setting);
        validateForm(elem, setting);
    });


    function setEventListeners(elem) {
    elem.addEventListener('input', function(evt){
        handlerInputForm(evt);
    });
    elem.addEventListener('submit', function(evt){
    });
   };

   function handlerInputForm(evt) {
    const currentForm = evt.currentTarget;
    validateInput(evt.target);
    validateForm(currentForm, setting);
    };

    function validateForm(form, setting) {
        const submitButton = form.querySelector(setting.submitButtonSelector);
        if(form.checkValidity()) {
        submitButton.removeAttribute('disabled', true);
        submitButton.classList.add('popup__button_valid');
        submitButton.classList.remove('popup__button_invalid');
        } else {
            submitButton.setAttribute('disabled', true);
            submitButton.classList.remove('popup__button_valid');
            submitButton.classList.add('popup__button_invalid');
        }
    };

    function validateInput(input) {
        addCustomErrorMessage(input);
        const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
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

    const inputs =  Array.from(document.querySelectorAll(setting.inputSelector));
    console.log(inputs);
    inputs.forEach(function(item){
        item.addEventListener('keydown', function(evt) {
            console.log(evt);
       })
    })

};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });

