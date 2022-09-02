import { Popup } from "./Popup.js";
 export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleDelete) {
        super(popupSelector);
        this._delete = handleDelete;

    }

    submit = (idCard, card) => {
        this._buttonСonfirmation = this._popup.querySelector('.popup-delete-card__button');
        this._buttonСonfirmation.addEventListener('click', ()=> {
            this._delete(idCard, card);
            this.close();})
        }
    }








