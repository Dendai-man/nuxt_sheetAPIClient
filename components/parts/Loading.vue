<template>
  <div id="loading">
    <v-overlay
      :zIndex="10000"
      :opacity="0.5"
      :value="isLoading"
    >
      <h3>通信中...</h3>
    </v-overlay>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: '',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
    }),
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>