<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a> 
      <!-- v-bind:href vue 하이퍼링크 api -->
      <small>
        {{ item.time_ago }} by
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link>  -->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        <!-- user뒤에 이름을 넘겨야 되기 때문에 v-bind:to를 이용 또는, 빽틱 이용 -->
        <!-- router의 index.js에서 정의한 /user/:id에 id값이 넘어간다 -->
        <!-- param으로 넘겨주는거 말고 query로 넘겨주는거 까지 한번 알아보자 -->
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>