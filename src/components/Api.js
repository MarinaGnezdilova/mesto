export class Api {
  constructor(baseUrl, authorization, renderTextButton ) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
    this._renderTextButton = renderTextButton;
  }

  deleteCard(idCard) {
    const res = fetch(`${this._baseUrl}${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  async getCards() {
    try {
      const res = await fetch(`${this._baseUrl}`, {
        headers: {
          authorization: this._authorization,
        },
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    catch (e) {
        alert("Не удалось получить карточки");
      }
  }

  editProfile(formData) {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-49/users/me`,
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
      .then ((res) => {
        if (res.ok) {
            const data = res.json();
            return data;
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        renderError(`Ошибка: ${err}`);
      })
      .finally(() => {
        this._renderTextButton(false, '.popup-profile__button');
      });
  }

  async deleteLike(idCard, card) {
    try {
      const res = await fetch(
        `https://mesto.nomoreparties.co/v1/cohort-49/cards/${idCard}/likes`,
        {
          method: "DELETE",
          headers: {
            authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    catch (e) {
      alert("Не удалось удалить лайк");
    }
  }

  async setLike(idCard, card) {
    try {
      const res = await fetch(
        `https://mesto.nomoreparties.co/v1/cohort-49/cards/${idCard}/likes`,
        {
          method: "PUT",
          headers: {
            authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
      catch (e) {
      alert("Не удалось отправить лайк");
    }
  }

  async addCard(formData) {
    try{

const res = await fetch(
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
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
catch(e) {
    alert("Не удалось добавить карточку");
}
}

  async changeAvatar(avatar) {
    try {
      const res = await fetch(
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
      );
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    catch (e) {
      alert("Не удалось отредактировать аватар");
    }
  }


  async getInfoUser() {
    try {
      const res = await fetch("https://nomoreparties.co/v1/cohort-49/users/me", {
        headers: {
          authorization: "90f8d9a0-3583-4d46-8126-1c35c51fd02a",
        },
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
      catch {
      alert("Не удалось загрузить данные пользователя");
    }
  }
}
