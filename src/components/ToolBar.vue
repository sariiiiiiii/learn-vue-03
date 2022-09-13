<template>
  <div class="header">
    <!-- vue 내부적으로 router-link를 썼을 때 라우터에서 화면에 앵커태그(a태그)로 변환해주고 부가적인 클래스를 제공해준다 -->
    <!-- to는 이동할 url을 넣어주면 된다 -->
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped> 
/* 원래 style은 상위태그에 스타일이 아래로 상속이 되는데 scoped은 해당 컴포넌트에만 적용이 되게 하는 뷰 로더 */

.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
/* router-link에서 제공하는 부가적인 클래스를 이용한 style */
.header .router-link-exact-active { 
  color: #35495e;
}
.header a {
  color: white;
}

</style>