export class UserInfo {
  constructor(nameSelector, aboutUserSelector) {
    this._name = document.querySelector(nameSelector);
    this._aboutUser = document.querySelector(aboutUserSelector);
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
