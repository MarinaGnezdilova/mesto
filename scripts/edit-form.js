let formElement = document.querySelector('.popup__form');
console.log(formElement);

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__form-field-name');
    console.log(nameInput);

    let jobInput = document.querySelector('.popup__form-field-job');
    console.log(jobInput);

    console.log(nameInput.value);
    console.log(jobInput.value);

    let newContentFormName = nameInput.value;
    let newContentFormJob = jobInput.value;
    console.log(newContentFormName);
    console.log(newContentFormJob);

    let profileFormName = document.querySelector('.profile__form-name');
    let profileFormJob = document.querySelector('.profile__form-profession');
    console.log(profileFormName);
    console.log(profileFormJob);

    profileFormName.textContent = newContentFormName;
    profileFormJob.textContent = newContentFormJob;
    console.log(profileFormName);
    console.log(profileFormJob);
}
formElement.addEventListener('submit', formSubmitHandler);