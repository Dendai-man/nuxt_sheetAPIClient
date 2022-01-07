export default class StoreAccess {

  static getSignedIn() {
    return this.$state.signedIn
  }
  static commitSignedIn( _bool ) {
    this.$store.commit('updateSignedIn', _bool)
  }

  static getSheetData() {
    return this.$state.sheetData
  }
  static commitSheetData( _bool ) {
    this.$store.commit('updateSheetData', _bool)
  }

  static commitIsLoading( _bool ) {
    this.$store.commit('updateIsLoading', _bool)
  }

  static commitTriggerAlert( _text ) {
    this.$store.commit('updateTriggerAlert', _text)
  }



}
