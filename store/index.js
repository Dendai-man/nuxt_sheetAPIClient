import { CHARA_NAMES } from '~/assets/js/constants/GameConstants'
import {APP_STATES} from '../assets/js/constants/AppConstants'

export const state = () => ({
  appState: APP_STATES.ENTER,
  signedIn: null,
  memberName: '',
  memberNames: [],
  memberData: {},
  charaNames: [
    CHARA_NAMES.QUYI,
    CHARA_NAMES.LAS,
    CHARA_NAMES.KARTE,
    CHARA_NAMES.ORTA,
    CHARA_NAMES.NAMALIE,
    CHARA_NAMES.SERIAD,
    CHARA_NAMES.WYIN,
  ],
  sheetData: {},
  scheduleData: {},
  isLoading:false,
  triggerAlert: ''
})

export const getters = {
  mySheetData: (state) => {
    if (state.sheetData && state.memberName) {
      return state.sheetData[state.memberName]
    }
  },
  isCheckingLogin: (state) => {
    return state.signedIn === null
  },
  isSheetDataLoaded: (state) => {
    return Object.values(state.sheetData).length
  },
}

export const mutations = {
  updateAppState(state, status) {
    state.appState = status
  },
  updateSignedIn(state, pw) {
    state.signedIn = pw
  },
  updateMemberNames(state, val) {
    state.memberNames = val
  },
  updateMemberName(state, val) {
    state.memberName = val
  },
  updateCharaNames(state, val) {
    state.charaNames = val
  },

  updateSheetData(state, val) {
    state.sheetData = val
  },
  decreSpecificSheetData(state, name) {
    if (state.sheetData[state.memberName].powers[name] <= 0) return
    state.sheetData[state.memberName].powers[name] = Number(state.sheetData[state.memberName].powers[name]) - 1000
  },
  increSpecificSheetData(state, name) {
    state.sheetData[state.memberName].powers[name] = Number(state.sheetData[state.memberName].powers[name]) + 1000
  },
  updateSpecificSheetData(state, {name, val}) {
    state.sheetData[state.memberName].powers[name] = Number(val)
  },


  updateTriggerAlert(state, val) {
    state.triggerAlert = val
  },

  updateScheduleData(state, val) {
    state.scheduleData = val
  },

  updateIsLoading(state, val) {
    state.isLoading = val
  },

}

export const actions = {
  commitSheetData ({ commit, state }, {name, val}) {

    commit('updateSheetData', _copy)
  }
}