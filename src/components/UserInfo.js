export class UserInfo {
  constructor(name, aboutUser) {
    this._name = document.querySelector(name);
    this._aboutUser = document.querySelector(aboutUser);
  }
  getInfo() {
    const userInfoOnPage = {
      name: this._name.textContent,
      aboutUser: this._aboutUser.textContent,
    };
    return userInfoOnPage;
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._aboutUser.textContent = data.aboutUser;
  }
}
