<template>
  <div id="sel-member">
    <h2>騎士団名を選択</h2>

    <div class="select-name">
      <select name="memberName" id="member_name" v-model="selectVal">
        <option value="騎士団名を選択" selected>騎士団名を選択</option>
        <option :value="name" v-for="name in memberNames" :key="name.index">{{name}}</option>
      </select>
    </div>

    <button class="alo-btn" @click="onClickNext">次へ</button>

    <div class="alo-modal confirm" :class="{show : isShowConfirm}">
      <h3>
        <span>{{memberName}}</span>
        <span v-if="discordName"> : </span>
        <span>{{discordName}}</span>
      </h3>
      <p>でログインします。よろしいですか？</p>
      <button class="alo-btn cancel" @click="onClickCancel">キャンセル</button>
      <button class="alo-btn" @click="onClickOk">確定</button>
    </div>

  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { APP_STATES } from '~/assets/js/constants/AppConstants'
import LocalstorageManager from '~/assets/js/utils/LocalStorageManager'

export default {
  name: '',
  components: {},
  props: {
  },
  data () {
    return {
      selectVal: '',
      isShowConfirm: false
    }
  },
  computed: {
    ...mapState({
      memberName: state => state.memberName,
      memberNames: state => state.memberNames,
      sheetData: state => state.sheetData,
    }),
    discordName() {
      if (this.sheetData[this.memberName]) {
        const _dName = this.sheetData[this.memberName].discordName
        if (_dName === "未加入") {
          return null
        } else {
          return this.sheetData[this.memberName].discordName
        }
      }
    }
  },
  beforeMount() {
    const _name = LocalstorageManager.getUserName()
    console.log('LS_NAME', _name);
    if (_name) {
      this.$store.commit('updateAppState', APP_STATES.APP.UPDATE_POWER)
      this.$store.commit('updateMemberName', _name)
    }
  },
  methods: {
    onClickNext() {
      if (!this.memberNames.includes(this.selectVal)) return
      this.$store.commit('updateMemberName', this.selectVal)
      this.isShowConfirm = true
    },
    onClickOk() {
      this.$store.commit('updateAppState', APP_STATES.APP.UPDATE_POWER)
      LocalstorageManager.setUserName(this.memberName)
      this.isShowConfirm = false
    },
    onClickCancel() {
      this.isShowConfirm = false
    }
  }
}
</script>
<style lang="scss" scoped>
.select-name {
  overflow: hidden;
  width: 90%;
  margin: 2em auto;
  text-align: center;
  padding: 10px 38px 10px 8px;
	color: #ffffff;
  position: relative;
	border-radius: 2px;
  border-radius: 50px;
	background: white;
  border: solid 1px steelblue;
  background: whitesmoke;
  text-align: center;
  select {
    width: 100%;
    padding: 0 1em;
    cursor: pointer;
    text-indent: 0.01px;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    background: transparent;
    background-image: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
    text-align: center;

  }
  select::-ms-expand {
    display: none;
  }
  &::before {
    position: absolute;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.8em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid steelblue;
    pointer-events: none;
    display: block;
  }
}
</style>