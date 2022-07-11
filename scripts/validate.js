const formProfile = document.querySelector('.popup-profile__form');
const formPlace = document.querySelector('.new-place-form');
const formProfileInput = formProfile.querySelector('.popup__form-field');

formProfile.addEventListener('submit', sendForm);
formProfile.addEventListener('input', handlerInputForm);
formPlace.addEventListener('submit', sendForm);
formPlace.addEventListener('input', handlerInputForm);

validateForm(formProfile);
validateForm(formPlace);

function sendForm(evt) {
    evt.preventDefault();
    /*console.log('вызов sendForm');*/
}

function handlerInputForm(evt) {
    const currentForm = evt.currentTarget;
    validateInput(evt.target);
    validateForm(currentForm);
    /*console.log('вызов handlerInputForm');*/

}

function validateForm(form) {
    const submitButton = form.querySelector('.popup__button');
    if(form.checkValidity()) {
    submitButton.removeAttribute('disabled', true);

      submitButton.classList.add('popup__button_valid');
      submitButton.classList.remove('popup__button_invalid');
      /*console.log('вызов validateForm');*/
    } else {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.remove('popup__button_valid');
        submitButton.classList.add('popup__button_invalid');
        /*console.log('вызов validateForm');
        console.log(submitButton.classList);*/
    }
}

function validateInput(input) {
    addCustomErrorMessage(input);
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    /*console.log('вызов validateInput');*/
}

function addCustomErrorMessage(input) {
    input.setCustomValidity('');
    if(input.validity.valueMissing) {
        input.setCustomValidity('Вы пропустили это поле');
        /*console.log('вызов addCustomErrorMessage');*/
    }
    if(input.validity.tooShort) {
        input.setCustomValidity('Минимальное количество символов:2. Длина текста сейчас 1 символ');
        /*console.log('вызов addCustomErrorMessage');*/
    }
    if(input.validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity('Введите адрес сайта');
        /*console.log('вызов addCustomErrorMessage');*/
    }
}



/*const showInputError = function(element) {
    element.classList.add('popup__form-field-error');
};

const hideInputError = function(element) {
    element.classList.remove('popup__form-field-error');
};

const isValid = function() {
    if (!formProfileInput.validity.valid) {
        showInputError(formProfileInput);
    } else {hideInputError(formProfileInput);
    }
};

formProfileInput.addEventListener('input', isValid);
*/
