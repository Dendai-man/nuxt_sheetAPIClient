<template>
  <transition name="fade">
    <div class="alo-alert" v-show="triggerAlert">
      <v-alert
        type="success"
      >{{triggerAlert}}</v-alert>
    </div>
  </transition>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import StoreAccess from '~/assets/js/utils/StoreAccess';
export default {
  name: '',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  watch: {
    triggerAlert(val) {
      if (val) {
        setTimeout(() => {
          StoreAccess.commitTriggerAlert('')
        }, 2000);
      }
    }
  },
  computed: {
    ...mapState({
      triggerAlert: state => state.triggerAlert,
    }),
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.alo-alert {
  position: fixed;
  bottom: 5%;
  left: 5%;
  z-index: 999;
  .v-alert {
    font-size: 3vw;
  }
}
</style>