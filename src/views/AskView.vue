<template>
  <div>
    <p v-for="item in fetchedAsk">
      <!-- <a v-bind:href="item.url">
        {{ item.title }}
      </a>  -->
      <!-- v-bind:href vue 하이퍼링크 api -->
      <!-- <router-link v-bind:to="item.url">{{ item.title }}</router-link> -->
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>
        {{ item.time_ago }} by {{ item.user }}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['fetchedAsk'])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>