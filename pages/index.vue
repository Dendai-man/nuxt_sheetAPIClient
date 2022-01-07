<template>
  <v-app id="app">
    <div id="aloalo" :class="{loading: isCheckingLogin}" class="flex-c">
      <div class="main">
        <Enter v-if="appState === APP_STATES.ENTER"/>
        <Select v-if="appState === APP_STATES.SELECT_NAME"/>
        <AppUpdatePower v-if="appState === APP_STATES.APP.UPDATE_POWER"/>
        <APPGuildBattle v-if="appState === APP_STATES.APP.GUILD_BATTLE"/>
        <AppMemberList v-if="appState === APP_STATES.APP.MEMBER_LIST"/>
        <AppMyProfile v-if="appState === APP_STATES.APP.MY_PROFILE"/>
        <AppRankings v-if="appState === APP_STATES.APP.RANKINGS"/>
      </div>

      <AppMenu v-if="isShowMenu"/>

      <Alert/>

      <Loading v-if="isLoading"/>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters, mapState } from 'vuex'
// components
import AppUpdatePower from '~/components/pages/app/AppUpdatePower.vue'
import AppMenu from '~/components/pages/app/AppMenu.vue'
import Select from '~/components/pages/select/Select.vue'
import Enter from '~/components/pages/enter/Enter.vue'
import AppMemberList from '~/components/pages/app/AppMemberList.vue'
import AppMyProfile from '~/components/pages/app/AppMyProfile.vue'
import AppRankings from '~/components/pages/app/AppRankings.vue'
import APPGuildBattle from '~/components/pages/app/APPGuildBattle.vue'
// js
import GoogleApiJsClient from '~/assets/js/GoogleApiJsClient'
import {APP_STATES, SHEET_NAMES} from '../assets/js/constants/AppConstants'
import SheetModel from '../assets/js/models/SheetModel'
import Loading from '~/components/parts/Loading.vue'
import Alert from '~/components/parts/Alert.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { AppUpdatePower, Select, Enter, AppMenu, AppMemberList, AppMyProfile, AppRankings, Loading, APPGuildBattle, Alert },
    data() {
      return {
        APP_STATES: APP_STATES,
      }
    },
    computed: {
      ...mapState({
        // @ts-ignore
        signedIn: state => state.signedIn,
        // @ts-ignore
        appState: state => state.appState,
        // @ts-ignore
        memberNames: state => state.memberNames,
        // @ts-ignore
        sheetData: state => state.sheetData,
        // @ts-ignore
        isLoading: state => state.isLoading,
      }),
      ...mapGetters([
        'isCheckingLogin'
      ]),
      isShowMenu() {
        // console.log('🎾検証🎾', Object.values(APP_STATES.APP), this.appState);
        return Object.values(APP_STATES.APP).includes(this.appState)
      }
    },
    watch: {
      signedIn(val) {
        console.log('sinedIn ???', val);
        if (val) {
          this.$store.commit('updateAppState', APP_STATES.SELECT_NAME)
        } else {
          this.$store.commit('updateSignedIn', false)
        }
      },
      appstate(_val) {
        console.log('appstate', _val);
      },
      isLoading(_val) {
        console.log('isLoading', _val);
      },
    },
    async mounted() {
      await GoogleApiJsClient.init()
      let _data
      await GoogleApiJsClient.getRange( SHEET_NAMES.戦力情報, 'A3:AG32' ).then((_res) => {
        _data = _res
      })

      this.$store.commit('updateMemberNames', SheetModel.memberNamesModel(_data))
      this.$store.commit('updateSheetData', SheetModel.sheetDataModel(_data))
      this.$store.commit('updateScheduleData', SheetModel.scheduleDataModel(_data))
    },
    methods: {
      onLogout() {
        GoogleApiJsClient.signOut()
      }
    }
})
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: transform .6s, opacity .6s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-200%) !important;
  opacity: 0 !important;
}
.fade-out-leave-active {
  transition: transform .6s, opacity .6s;
}
.fade-out-leave-to {
  transform: translateX(-200%) !important;
  opacity: 0 !important;
}

html, body {
  margin:0 !important;
  font-weight: 600;
}
p, h4, h3 {
  margin: 0;
}
ul {
  padding: 0;
}
li {
  padding: 10px 0;
}

.mauto {
  margin: 0 auto;
}
.tcenter {
  text-align: center !important;
}

.notice {
  font-size: .75rem;
  color: gray;
  padding: 0;
  margin: 0;
  line-height: 1.5;
  text-align: left;
}
.notice::before {
  /* content: '*'; */
  /* display: inline-block; */
  /* position: relative; */
}

.alo-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-width: 300px;
  padding: 20px 40px;
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  /* opacity: 0; */
  display: none;

  li {
    list-style: none;
  }
}
.alo-modal.show {
  /* opacity: 1; */
  display: block;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-ttl {
  position: fixed;
}

.mts {
  margin-top: 0.5rem;
}
.mtm {
  margin-top: 1rem;
}
.mtl {
  margin-top: 2rem;
}

select {
  height: 30px;
  background: azure;
  font-weight: bold;
}

.alo-btn {
  min-width: 100px;
  min-height: 30px;
  padding: 10px 20px;
  margin-top: 15px;
  border: solid black 1.5px;
  background: skyblue;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 9999px;
  white-space: nowrap;
}

.alo-btn.cancel {
  font-weight: normal;
  font-size: 0.5rem;
  background: white;
}

#aloalo {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;

  text-align: center;
  color: black;
  font-size: 1rem;
  font-family: "Helvetica Neue",
                Arial,
                "Hiragino Kaku Gothic ProN",
                "Hiragino Sans",
                Meiryo,
                sans-serif;
  /* background-image: url(../assets/img/bg_0.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#aloalo::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 0;
}

#aloalo::after {
  content: 'ログイン情報確認中...';
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: transparent;
  transition: background .3s;
  pointer-events: none;
  z-index: -1;
}

#aloalo.loading::after {
  background: rgba(0,0,0,0.5);
  pointer-events: all;
  z-index: 100;
}

.main {
  position: relative;
  z-index: 10;
  margin: 10vh 0;
}
</style>