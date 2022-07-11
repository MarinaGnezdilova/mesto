function enableValidation (setting) {
    const forms = Array.from(document.querySelectorAll(setting.formSelector));
    forms.forEach(function(elem) {
        setEventListeners(elem, setting)
    });


    function setEventListeners(elem) {
    elem.addEventListener('input', function(evt){
        console.log('Клик по форме');
        handlerInputForm(evt);
    });
    elem.addEventListener('submit', function(evt){
        console.log('Отправка формы');
    });
   };

   function handlerInputForm(evt) {
    const currentForm = evt.currentTarget;
    console.log(currentForm);
    /*validateInput(evt.target);*/
    validateForm(currentForm, setting);
    console.log('вызов handlerInputForm');
    };

    function validateForm(form, setting) {
        const submitButton = form.querySelector(setting.submitButtonSelector);
        console.log(submitButton);
        if(form.checkValidity()) {
        submitButton.removeAttribute('disabled', true);
        submitButton.classList.add('popup__button_valid');
        submitButton.classList.remove('popup__button_invalid');
        console.log('вызов validateForm');
        } else {
            submitButton.setAttribute('disabled', true);
            submitButton.classList.remove('popup__button_valid');
            submitButton.classList.add('popup__button_invalid');
            console.log('вызов validateForm');
           /* console.log(submitButton.classList);*/
        }
    };
console.log('Вызов enableValidation');
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });

