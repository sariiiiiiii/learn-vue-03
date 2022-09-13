<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
// import { mapGetters } from vuex-helper로 this.$store.state.user를 computed 속성으로 짧게 변환시켜줄 수 있다
// 여기에서는 컴포넌트의 computed 속성을 이용해서 짧게 변환
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }  
  },
  created() {
    console.log(this.$route.params.id) // id값 넘어온다
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName); // 인자를 넘겨주고 싶으면 store 속성명 다음 인자 전달
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  },
}
</script>

<style>

</style>