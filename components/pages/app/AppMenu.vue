<template>
  <div id="aloalo-menu">
    <v-menu
      light
      bottom
      offset-y
      style="z-index: 1000;"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" fixed bottom right @click="toggleOverlay">
          メニュー
        </v-btn>
      </template>
      <v-list light dense>
        <v-list-item class="menu-item" v-for="(menu,i) in menus" :class="menuItemClassHandle(i)" :key="menu.no" link @click="onClickItem(i)">
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-overlay
      :zIndex="100"
      :opacity="0.3"
      :value="isShowOverlay"
      @click="toggleOverlay"
    >
    </v-overlay>
  </div>
</template>
<script>
import { APP_STATES } from '~/assets/js/constants/AppConstants';
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: '',
  components: {},
  props: {
  },
  data () {
    return {
      menus: [
        { title: '戦闘力更新'}, 
        { title: 'ギルド戦'},
        { title: 'マイプロフィール'}, 
        { title: 'ランキング'}, 
        { title: 'メンバーリスト'},
      ],
      isShowOverlay: false,
    }
  },
  computed: {
    ...mapState({
      appState: state => state.appState,
    }),
    
  },
  methods: {
    onClickItem(i) {
      this.isShowOverlay = false
      const _next = Object.values(APP_STATES.APP)[i]
      this.$store.commit('updateAppState', _next)
    },
    toggleOverlay() {
      this.isShowOverlay = !this.isShowOverlay
    },
    menuItemClassHandle(i) {
      const _states = APP_STATES.APP
      return i === Object.values(_states).indexOf(this.appState) ? 'active' : ''
    }
  }
}
</script>
<style lang="scss" scoped>
#aloalo-menu {
  z-index: 1000;
}
.menu-item {
  &.active {
    background: rgba(0,255,255, 0.3);
  }
}
</style>