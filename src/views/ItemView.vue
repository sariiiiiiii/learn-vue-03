<template>
  <div>
    <!-- <p>{{ fetchedItem.title }}</p>
    <div>{{ fetchedItem.content }}</div> -->
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2> 
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- 데이터를 불러왔는데 텍스트를 찍어내는게 아니라 html tag까지 데이터가 불러와질 경우 -->
      <!-- 화면에서 tag 변환시켜줘야 한다 그럴때 쓰는게 v-html 디렉토링을 이용해서 사용 -->
      <!-- https://vuejs.org/api/#v-html -->
      <!-- https://vuejs.org/guide/essentials/template-syntax.html#Raw-HTML -->
      <div v-html="fetchedItem.content">
        <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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