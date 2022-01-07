<template>
  <div id="enter">
    <h3>Aloalo管理サイト</h3>
    <button class="alo-btn" @click="onLogin">ログイン</button>
    <p>ログイン情報はDiscordから</p>
    <p>何かあったら「vでんv」に連絡してね</p>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import GoogleApiJsClient from '~/assets/js/GoogleApiJsClient'

export default {
  name: 'Enter',
  components: {},
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      signedIn: state => state.signedIn,
    }),
  },
  methods: {
    onLogin() {
      GoogleApiJsClient.handleAuthClick()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>