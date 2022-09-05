export class Api {
  constructor(baseUrl, authorization, renderTextButton ) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
    this._renderTextButton = renderTextButton;
  }
 _checkResponce(res) {
    if (res.ok) {
        const data = res.json();
        return data;
        }
      return Promise.reject(`Ошибка: ${res.status}`);
}


  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    })
    .then(() => {
        this._checkResponce}
        )
  }

    getCards() {
    return fetch(`${this._baseUrl}`, {
            headers: {
              authorization: this._authorization,
            },
          }).then(this._checkResponce)
      }


  editProfile(formData) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-49/users/me`,
        {
          method: "PATCH",
          headers: {
            authorization: this._authorization,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            about: formData.about,
          }),
        }
      )
      .then(this._checkResponce)

  }


  deleteLike(idCard) {
    return fetch(
        `https://mesto.nomoreparties.co/v1/cohort-49/cards/${idCard}/likes`,
        {
          method: "DELETE",
          headers: {
            authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
          },
        }
      ).then(this._checkResponce)
  }

  setLike(idCard) {
    return fetch(
        `https://mesto.nomoreparties.co/v1/cohort-49/cards/${idCard}/likes`,
        {
          method: "PUT",
          headers: {
            authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
          },
        }
      )
      .then(this._checkResponce)
       }


addCard(formData) {
    return fetch(
        "https://mesto.nomoreparties.co/v1/cohort-49/cards",
        {
          method: "POST",
          headers: {
            authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            link: formData.link,
          }),
        }
      )
      .then(this._checkResponce)

}

changeAvatar(avatar) {
    return fetch(
        "https://mesto.nomoreparties.co/v1/cohort-49/users/me/avatar",
        {
          method: "PATCH",
          headers: {
            authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            avatar: avatar.link,
          }),
        }
      )
      .then(this._checkResponce)
}

  getInfoUser() {
    return fetch("https://nomoreparties.co/v1/cohort-49/users/me", {
        headers: {
          authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
        },
      })
  .then(this._checkResponce)
}

}
