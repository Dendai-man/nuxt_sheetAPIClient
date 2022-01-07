import * as CERDS from "../../credential/my_cred.json";
import StoreAccess from "./utils/StoreAccess";

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

export default class GoogleApiJsClient {
  static init() {
    return new Promise(resolve => {
      const _SELF = this
      const _script = document.createElement('script')
      _script.src = `https://apis.google.com/js/api.js?${new Date().getTime()}`
      document.body.appendChild(_script)

      _script.onload = () => {

        function start() {
          // 2. Initialize the JavaScript client library.
          gapi.client.init({
            'apiKey': CERDS.KEY,
            // Your API key will be automatically added to the Discovery Document URLs.
            'discoveryDocs': DISCOVERY_DOCS,
            // clientId and scope are optional if auth is not required.
            'clientId': CERDS.CLIENT_ID,
            'scope': SCOPES,
          }).then(function() {
            // 3. Initialize and make the API request.
            gapi.auth2.getAuthInstance().isSignedIn.listen(_SELF.updateSigninStatus);
            // Handle the initial sign-in state.
            _SELF.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  
            resolve()
          })
        };
        // 1. Load the JavaScript client library.
        gapi.load('client', start);
      }

    })

  }

  static updateSigninStatus(isSignedIn) {
    StoreAccess.commitSignedIn(isSignedIn)
    if (isSignedIn) {

    } else {

    }
  }

  static handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  static signOut(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  static getRange( _sheetName, _range ) {
    return new Promise(resolve => {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: CERDS.SHEET,
        range: `${_sheetName}!${_range}`,
      }).then(function(response) {
  
        let _out = []
        var range = response.result;
  
        if (range.values.length > 0) {
          for (let i = 0; i < range.values.length; i++) {
            const _row = range.values[i];
            _out.push(_row)
          }
          resolve(_out)
        }
      })
    })
  }

  static updateRange( _sheetName, _range, _vals ) {
    return new Promise(resolve => {
      const values = [
        _vals
        // Additional rows ...
      ];
      const resource = {
        values: values
      };
      gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: CERDS.SHEET,
        range: `${_sheetName}!${_range}`,
        // range: `${CERDS.SHEET_NAME}!A33`,
        valueInputOption: "USER_ENTERED",
        resource: resource,
      }).then(function(response) {
        console.log('💓 検証 💓', response);
        resolve()
      })
    })
  }

  static sendRequests( _sheetName, _requests ) {
    return new Promise(resolve => {
      const resource = _requests
      gapi.client.sheets.spreadsheets.batchUpdate({
        resource: resource,
        spreadsheetId: CERDS.SHEET,
        // range: `${_sheetName}!${_range}`,
        // range: `${CERDS.SHEET_NAME}!A33`,
        // valueInputOption: "USER_ENTERED",
      }).then(function(response) {
        console.log('💓 検証 💓', response);
        resolve()
      })
    })
  }
}