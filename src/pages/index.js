import "../pages/index.css";
import { buttonAdd, buttonEdit, userNameFieldForm, aboutUserFieldForm, validationNewPlace, validationProfile, cardList, popupPicture, popupNewPlace, popupProfile, userInfo} from "../utils/constants.js";
cardList.renderItems();
popupPicture.setEventListener();
popupNewPlace.setEventListener();
popupProfile.setEventListener();
buttonAdd.addEventListener("click", () => {
  popupNewPlace.open();
  validationNewPlace.resetValidation();
});

buttonEdit.addEventListener("click", () => {
  popupProfile.open();
  const formData = userInfo.getInfo();
  userNameFieldForm.value = formData.name;
  aboutUserFieldForm.value = formData.aboutUser;
  validationProfile.resetValidation();
});
validationNewPlace.enableValidation();
validationProfile.enableValidation();
