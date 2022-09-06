export class UserInfo {
  constructor(name, aboutUser, nameOnPage, aboutOnPage, avatar) {
    this._name = document.querySelector(name);
    this._aboutUser = document.querySelector(aboutUser);
    this._nameOnPage = document.querySelector(nameOnPage);
    this._aboutUserOnPage = document.querySelector(aboutOnPage);
    this._avatar = document.querySelector(avatar);
  }
  getInfo() {
    const userInfoOnPage = {
      name: this._name.textContent,
      about: this._aboutUser.textContent,
    };
    return userInfoOnPage;
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._aboutUser.textContent = data.about;
  }

  setUserInfoOnPage(data) {
    this._aboutUser.textContent = data.about;
    this._nameOnPage.textContent = data.name;
    this._avatar.src = data.avatar;
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
