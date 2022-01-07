/**
 * Localstorage
 *
 * 保管するもの
 * 　AuthorizationToken（これの有無でログインん判定）
 *   UserName
 *   CustomcarData
 *   SoundOnOff
 *
 */
export default class LocalstorageManager {

  static localstrage_key = "aloalo"
  static aloaloData = {
    userName: '',
  }

  static getLocalStorageData() {

    let data = localStorage.getItem(this.localstrage_key);
    if (data !== "") {
      data = JSON.parse(data)
      this.aloaloData = Object.assign(this.aloaloData, data)
    }
    return data
  }

  static getData() {
    this.getLocalStorageData()
    return this.aloaloData
  }
  static setData() {
    localStorage.setItem(this.localstrage_key, JSON.stringify(this.aloaloData))
  }

  static getUserName() {
    this.getLocalStorageData()
    return this.aloaloData.userName
  }

  static setUserName(userName) {
    this.aloaloData.userName = userName;
    this.setData()
  }

}