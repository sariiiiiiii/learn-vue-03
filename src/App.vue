<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- name뒤에 오는 fade가 뷰 내부적으로 css 규칙에 프리픽스가 된다 -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', () => this.startSpinner())
    bus.$on('end:spinner', () => this.endSpinner())
    // bus.$on('start:spinner', () => this.loadingStatus = true)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner())
    bus.$off('end:spinner', this.endSpinner())
    // 이벤트를 등록하고 나면 이벤트버스는 객체가 계속 쌓이기 때문에 컴포넌트가 끝나기 전에 컴포넌트가 역할이 끝나고 나서 오프를 해줘야지 객체가 계속 쌓이지 않고 해제가 된다
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
  /* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
