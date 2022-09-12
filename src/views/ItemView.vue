<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <router-link :to="`/user/${fetchedItem.user}`" slot="username">{{ fetchedItem.user }}</router-link>
        <template slot="time">{{ 'Posted a ' + fetchedItem.time_ago }}</template>
      </user-profile> 
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2> 
    </section>
    <section>
      <div v-html="fetchedItem.content">
        
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', item)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  text-align: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>