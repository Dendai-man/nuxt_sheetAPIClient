<template>
  <div class="aloalo-guild-battle">
    <h2>ギルド戦</h2>

    <div class="schedule">
      <p>スケジュール登録</p>

      <v-card flat>
        <v-card-text>
          <v-container fluid>

              <v-row>
                <v-col>
                  <h3>1日目【12/19（日）】</h3>
                  <v-col
                    class="check-inner"
                    v-for="data in Day1Data" :key="data.index"
                    cols="12"
                    sm="4"
                    md="4"
                  >
                    <v-checkbox
                      @change="onChengeCheck"
                      :label="data.label"
                      :color="data.color"
                      v-model="data.model"
                      hide-details
                      class="checkbox"
                    ></v-checkbox>
                  </v-col>
                  <div class="flex-c mtl">
                    <v-btn x-small @click="checkAll(1)">全てチェック</v-btn>
                    <v-btn x-small class="mtm" @click="resetAll(1)">全て解除</v-btn>
                  </div>
                </v-col>

                <v-col>
                  <h3>2日目【12/20（月）】</h3>
                  <v-col
                    class="check-inner"
                    v-for="data in Day2Data" :key="data.index"
                    cols="12"
                    sm="4"
                    md="4"
                  >
                    <v-checkbox
                      @change="onChengeCheck"
                      :label="data.label"
                      :color="data.color"
                      v-model="data.model"
                      hide-details
                      class="checkbox"
                    ></v-checkbox>
                  </v-col>
                  <div class="flex-c mtl">
                    <v-btn x-small @click="checkAll(2)">全てチェック</v-btn>
                    <v-btn x-small class="mtm" @click="resetAll(2)">全て解除</v-btn>
                  </div>
                </v-col>

              </v-row>

            </v-col>
          </v-container>
        </v-card-text>
      </v-card>
      <v-btn large color="blue lighten-3" @click="onClickUpdate">更新</v-btn>

      <p class="tcenter mtl notice">どこにチェックが入ってたか分からなくなったら<br>リセット↓押してください</p>

      <v-btn small color="green lighten-4" @click="fetchData">リセット</v-btn>
    </div>

  </div>
</template>
<script>
import { CERDS, SHEET_NAMES } from '~/assets/js/constants/AppConstants'
import GoogleApiJsClient from '~/assets/js/GoogleApiJsClient'
import { mapActions, mapGetters, mapState } from 'vuex'
import store_access from '~/plugins/store_access'
import StoreAccess from '~/assets/js/utils/StoreAccess'

export default {
  name: '',
  components: {},
  props: {
  },
  data: () => ({
    Day1Data: [
      { label: '18時~', color: 'red', model:false },
      { label: '19時~', color: 'red', model:false },
      { label: '20時~', color: 'red', model:false },
      { label: '21時~', color: 'red', model:false },
      { label: '22時~', color: 'red', model:false },
      { label: '23時~', color: 'red', model:false },
      { label: '24時~', color: 'red', model:false },
    ],
    Day2Data: [
      { label: '18時~', color: 'red', model:false },
      { label: '19時~', color: 'red', model:false },
      { label: '20時~', color: 'red', model:false },
      { label: '21時~', color: 'red', model:false },
      { label: '22時~', color: 'red', model:false },
      { label: '23時~', color: 'red', model:false },
      { label: '24時~', color: 'red', model:false },
    ],
    checks: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
  }),
  computed: {
    ...mapGetters([
      "mySheetData",
      "isSheetDataLoaded"
    ]),
    ...mapState({
      memberName: state => state.memberName,
      scheduleData: state => state.scheduleData,
    }),
  },
  watch: {
    scheduleData(_val) {
      console.log('scheduleData', _val);
    },
  },
  mounted() {
    this.fetchData()
    console.log('MOUNTED', );
  },
  methods: {
    fetchData() {
      this.scheduleData[this.memberName].day1.forEach((_d,i) => {
        this.Day1Data[i].model = this.parseBool(_d.toLowerCase())
      })
      this.scheduleData[this.memberName].day2.forEach((_d,i) => {
        this.Day2Data[i].model = this.parseBool(_d.toLowerCase())
      })
    },
    onChengeCheck() {
      console.log('💓 検証 💓', this.scheduleData[this.memberName]);
    },
    parseBool(value) {
        switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
            return true;
        case false:
        case 'false':
        case 0:
        case '0':
            return false;
        default:
            return null;
        }
    },
    async onClickUpdate() {
      StoreAccess.commitIsLoading(true)

      let _day1Vals = []
      this.Day1Data.forEach(d => {
        _day1Vals.push({"userEnteredValue": {"boolValue": d.model}})
      })
      let _day2Vals = []
      this.Day2Data.forEach(d => {
        _day2Vals.push({"userEnteredValue": {"boolValue": d.model}})
      })

      const _day1Requests = {
        "requests": [
          {
            "updateCells": {
              "rows": [
                {"values": _day1Vals},
              ],
              "fields": "userEnteredValue",
              "range": {
                "sheetId": 0,
                "startRowIndex": this.mySheetData.sheetRow - 1,
                "endRowIndex": this.mySheetData.sheetRow,
                "startColumnIndex": 18,
                "endColumnIndex": 25
              }
            }
          }
        ]
      }
      const _day2Requests = {
        "requests": [
          {
            "updateCells": {
              "rows": [
                {"values": _day2Vals},
              ],
              "fields": "userEnteredValue",
              "range": {
                "sheetId": 0,
                "startRowIndex": this.mySheetData.sheetRow - 1,
                "endRowIndex": this.mySheetData.sheetRow,
                "startColumnIndex": 26,
                "endColumnIndex": 33
              }
            }
          }
        ]
      }
      await GoogleApiJsClient.sendRequests(SHEET_NAMES.ギルド戦情報, _day1Requests)
      await GoogleApiJsClient.sendRequests(SHEET_NAMES.ギルド戦情報, _day2Requests)

      StoreAccess.commitIsLoading(false)
      StoreAccess.commitTriggerAlert('ギルドスケジュール更新完了！')
    },
    checkAll( _day ) {
      this[`Day${_day}Data`].forEach(_d => {
        _d.model = true
      })
    },
    resetAll( _day ) {
      this[`Day${_day}Data`].forEach(_d => {
        _d.model = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: '';
  }

  &:hover::after {
    display: block;
  }
}

.check-inner {
  padding: 0px 10px;
  .checkbox {
    white-space: nowrap;
  }
}
</style>