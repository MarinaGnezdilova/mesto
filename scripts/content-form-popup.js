let contentProfileName = document.querySelector('.profile__form-name');
console.log(contentProfileName);

let contentProfileJob = document.querySelector('.profile__form-profession');
console.log(contentProfileJob);

let contentPopupName = document.querySelector('.popup__form-field-name');
console.log(contentPopupName);
let contentPopupJob = document.querySelector('.popup__form-field-job');
console.log(contentPopupJob);

contentPopupName.value = contentProfileName.textContent;
console.log(contentPopupName);
contentPopupJob.value = contentProfileJob.textContent;