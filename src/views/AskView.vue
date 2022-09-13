<template>
  <div>
    <div v-for="item in fetchedAsk">
      <!-- <div v-for="item in this.$store.state.ask"> -->
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import { mapState } from 'vuex'
export default {
  computed: {
    // #4
    // index.js에서 fetchedAsk를 바로 쓰고 싶다면 ...mapGetters를 배열처리 []
    ...mapGetters(['fetchedAsk'])

    // #3
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })

    // #2
    // ...mapState({
    //   // mapState를 이용하여 ask에 state.ask를 담았다
    //   // fetchAsk: state => state.ask 로 한후 v-for에 fetchAsk와 동일
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>