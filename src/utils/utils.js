import { Card } from '../components/Сard.js';
import { popupPicture } from '../utils/constants.js'
function openImagePopup(name, link) {
    popupPicture.open(name, link);
  }

 export function createCard(item) {
    const card = new Card(item, ".element-template", openImagePopup);
    const cardElement = card.generateCard();
    return cardElement;
}
