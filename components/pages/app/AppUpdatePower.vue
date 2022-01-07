<template>
  <div id="aloalo-update-power">
    <h2>戦闘力更新</h2>
    <p>各キャラの戦闘力を入力→更新押してね</p>
    <h3 class="mtm">◯入力方法◯</h3>
    <p>・真ん中のタップでセレクターから選択</p>
    <p>・プラスマイナスボタンで増減</p>

    <ul class="mts">
      <li class="notice">だいたいで良い</li>
      <li class="notice">1つのプリセットの戦力</li>
    </ul>

    <ul class="mtl">
      <li class="input-power flex" v-for="(name, i) in charaNames" :key="name">
        <p>{{name}}</p>
        <div class="input-inner">
          <button class="btn-round" @click="decre(name)">-1000</button>

          <div class="select-inner">

            <select class="select" name="" id="selectPower" @change="onSelect($event, name)">
              <option value="0">0</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
              <option value="4000">4000</option>
              <option value="5000">5000</option>
              <option value="6000">6000</option>
              <option value="7000">7000</option>
              <option value="8000">8000</option>
              <option value="9000">9000</option>
              <option value="10000">10000</option>
              <option value="11000">11000</option>
              <option value="12000">12000</option>
              <option value="13000">13000</option>
              <option value="14000">14000</option>
              <option value="15000">15000</option>
              <option value="16000">16000</option>
              <option value="17000">17000</option>
              <option value="18000">18000</option>
              <option value="19000">19000</option>
              <option value="20000">20000</option>
              <option value="21000">21000</option>
              <option value="22000">22000</option>
              <option value="23000">23000</option>
              <option value="24000">24000</option>
              <option value="25000">25000</option>
              <option value="26000">26000</option>
              <option value="27000">27000</option>
              <option value="28000">28000</option>
              <option value="29000">29000</option>
              <option value="30000">30000</option>
              <option value="31000">31000</option>
              <option value="32000">32000</option>
              <option value="33000">33000</option>
              <option value="34000">34000</option>
              <option value="35000">35000</option>
              <option value="36000">36000</option>
              <option value="37000">37000</option>
              <option value="38000">38000</option>
              <option value="39000">39000</option>
              <option value="40000">40000</option>
              <option value="41000">41000</option>
              <option value="42000">42000</option>
              <option value="43000">43000</option>
              <option value="44000">44000</option>
              <option value="45000">45000</option>
              <option value="46000">46000</option>
              <option value="47000">47000</option>
              <option value="48000">48000</option>
              <option value="49000">49000</option>
              <option value="50000">50000</option>
              <option value="51000">51000</option>
              <option value="52000">52000</option>
              <option value="53000">53000</option>
              <option value="54000">54000</option>
              <option value="55000">55000</option>
              <option value="56000">56000</option>
              <option value="57000">57000</option>
              <option value="58000">58000</option>
              <option value="59000">59000</option>
              <option value="60000">60000</option>
              <option value="61000">61000</option>
              <option value="62000">62000</option>
              <option value="63000">63000</option>
              <option value="64000">64000</option>
              <option value="65000">65000</option>
              <option value="66000">66000</option>
              <option value="67000">67000</option>
              <option value="68000">68000</option>
              <option value="69000">69000</option>
              <option value="70000">70000</option>
              <option value="71000">71000</option>
              <option value="72000">72000</option>
              <option value="73000">73000</option>
              <option value="74000">74000</option>
              <option value="75000">75000</option>
              <option value="76000">76000</option>
              <option value="77000">77000</option>
              <option value="78000">78000</option>
              <option value="79000">79000</option>
              <option value="80000">80000</option>
              <option value="81000">81000</option>
              <option value="82000">82000</option>
              <option value="83000">83000</option>
              <option value="84000">84000</option>
              <option value="85000">85000</option>
              <option value="86000">86000</option>
              <option value="87000">87000</option>
              <option value="88000">88000</option>
              <option value="89000">89000</option>
              <option value="90000">90000</option>
              <option value="91000">91000</option>
              <option value="92000">92000</option>
              <option value="93000">93000</option>
              <option value="94000">94000</option>
              <option value="95000">95000</option>
              <option value="96000">96000</option>
              <option value="97000">97000</option>
              <option value="98000">98000</option>
              <option value="99000">99000</option>
              <option value="100000">100000</option>
              <option value="101000">101000</option>
              <option value="102000">102000</option>
              <option value="103000">103000</option>
              <option value="104000">104000</option>
              <option value="105000">105000</option>
              <option value="106000">106000</option>
              <option value="107000">107000</option>
              <option value="108000">108000</option>
              <option value="109000">109000</option>
              <option value="110000">110000</option>
              <option value="111000">111000</option>
              <option value="112000">112000</option>
              <option value="113000">113000</option>
              <option value="114000">114000</option>
              <option value="115000">115000</option>
              <option value="116000">116000</option>
              <option value="117000">117000</option>
              <option value="118000">118000</option>
              <option value="119000">119000</option>
              <option value="120000">120000</option>
              <option value="121000">121000</option>
              <option value="122000">122000</option>
              <option value="123000">123000</option>
              <option value="124000">124000</option>
              <option value="125000">125000</option>
              <option value="126000">126000</option>
              <option value="127000">127000</option>
              <option value="128000">128000</option>
              <option value="129000">129000</option>
              <option value="130000">130000</option>
              <option value="131000">131000</option>
              <option value="132000">132000</option>
              <option value="133000">133000</option>
              <option value="134000">134000</option>
              <option value="135000">135000</option>
              <option value="136000">136000</option>
              <option value="137000">137000</option>
              <option value="138000">138000</option>
              <option value="139000">139000</option>
              <option value="140000">140000</option>
              <option value="141000">141000</option>
              <option value="142000">142000</option>
              <option value="143000">143000</option>
              <option value="144000">144000</option>
              <option value="145000">145000</option>
              <option value="146000">146000</option>
              <option value="147000">147000</option>
              <option value="148000">148000</option>
              <option value="149000">149000</option>
              <option value="150000">150000</option>
              <option value="151000">151000</option>
              <option value="152000">152000</option>
              <option value="153000">153000</option>
              <option value="154000">154000</option>
              <option value="155000">155000</option>
              <option value="156000">156000</option>
              <option value="157000">157000</option>
              <option value="158000">158000</option>
              <option value="159000">159000</option>
              <option value="160000">160000</option>
              <option value="161000">161000</option>
              <option value="162000">162000</option>
              <option value="163000">163000</option>
              <option value="164000">164000</option>
              <option value="165000">165000</option>
              <option value="166000">166000</option>
              <option value="167000">167000</option>
              <option value="168000">168000</option>
              <option value="169000">169000</option>
              <option value="170000">170000</option>
              <option value="171000">171000</option>
              <option value="172000">172000</option>
              <option value="173000">173000</option>
              <option value="174000">174000</option>
              <option value="175000">175000</option>
              <option value="176000">176000</option>
              <option value="177000">177000</option>
              <option value="178000">178000</option>
              <option value="179000">179000</option>
              <option value="180000">180000</option>
              <option value="181000">181000</option>
              <option value="182000">182000</option>
              <option value="183000">183000</option>
              <option value="184000">184000</option>
              <option value="185000">185000</option>
              <option value="186000">186000</option>
              <option value="187000">187000</option>
              <option value="188000">188000</option>
              <option value="189000">189000</option>
              <option value="190000">190000</option>
            </select>
            <label for="selectPower">{{getPower(name)}}</label>
          </div>

          <button class="btn-round" @click="incre(name)">+1000</button>
        </div>
      </li>
    </ul>

    <button class="alo-btn mtl" @click="onClickComplete">更新</button>

    <button class="alo-btn cancel" @click="onClickBack">騎士団名を選び直す</button>

    <!-- <div class="alo-modal" :class="{show : isShowModal}">
      <h3>戦闘力更新完了！</h3>
      <button class="alo-btn" @click="onClickOk">OK</button>

      <ul>
        <li v-for="(power, name) in prevMyPowers" :key="power.index">
          <span>{{name}}</span> : <span>{{power}}</span><span> => </span><span>{{myPowers[name]}}</span>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import { mapGetters,mapState } from 'vuex'
import { APP_STATES, SHEET_NAMES } from '~/assets/js/constants/AppConstants';
import GoogleApiJsClient from '~/assets/js/GoogleApiJsClient';
import LocalstorageManager from '~/assets/js/utils/LocalStorageManager';
import StoreAccess from '~/assets/js/utils/StoreAccess';

export default {
    name: "AppUpdatePower",
    data() {
        return {
          isShowModal: false,
          prevMyPowers: {},
          innited: false,
        };
    },
    computed: {
        ...mapState({
            charaNames: state => state.charaNames,
            memberName: state => state.memberName,
            sheetData: state => state.sheetData,
        }),
        ...mapGetters([
          "mySheetData",
          "isSheetDataLoaded"
        ]),
        myPowers() {
          if (this.mySheetData) {
            return this.mySheetData.powers;
          }
        },
    },
    watch: {
      myPowers(val) {
        if (val && !this.innited) {
          this.innited = true
          this.setPrevPowers()
        }
      },
    },
    methods: {
        setPrevPowers() {
          // console.log('⛅️検証⛅️', this.prevMyPowers.キュイ, this.myPowers.キュイ);
          Object.assign(this.prevMyPowers, this.myPowers)
          console.log('⛅️検証⛅️AAAAAAA', this.prevMyPowers.キュイ, this.myPowers.キュイ);
        },
        getPower(_name) {
            if (this.mySheetData) {
                return this.mySheetData.powers[_name];
            }
        },
        decre(_name) {
            this.$store.commit("decreSpecificSheetData", _name);
        },
        incre(_name) {
            this.$store.commit("increSpecificSheetData", _name);
        },
        onSelect(e, _name) {
            const _val = e.target.value;
            this.$store.commit("updateSpecificSheetData", {
                name: _name,
                val: _val
            });
        },
        onClickOk() {
          this.isShowModal = false
          this.setPrevPowers()
        },
        onClickBack() {
          LocalstorageManager.setUserName('')
          this.$store.commit("updateAppState", APP_STATES.SELECT_NAME);
        },
        async onClickComplete() {
          StoreAccess.commitIsLoading(true)
          // 戦力アップデート
          const _range = `C${this.mySheetData.sheetRow}`
          const _vals = Object.values(this.mySheetData.powers);
          await GoogleApiJsClient.updateRange( SHEET_NAMES.戦力情報, _range, _vals)
          // 更新日時アップデート
          const _dateRange = `K${this.mySheetData.sheetRow}`
          const _d = new Date()
          const _dateVals = [`${_d.getMonth()+1}${_d.getDate()}`]
          // console.log('💓 検証 💓', _dateRange, _dateVaqls);
          await GoogleApiJsClient.updateRange( SHEET_NAMES.戦力情報, _dateRange , _dateVals)

          // this.isShowModal = true
          StoreAccess.commitTriggerAlert('戦闘力更新完了！')
          StoreAccess.commitIsLoading(false)
        },
    },
}
</script>
<style lang="scss" scoped>
#aloalo-update-power {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input-power {
    // display: flex;
    width: 300px;
    justify-content: space-between;

    .input-inner {
      display: flex;
      justify-content: center;
      align-items: center;

      .select-inner {
        position: relative;
        .select {
          opacity: 0;
          margin: 0px 10px;
          position: relative;
        }

        label {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 1;
          color: black;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }


      .btn-round {
        height: 28px;
      }
    }
  }
}
</style>