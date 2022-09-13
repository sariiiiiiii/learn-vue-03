import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index';
import axios from 'axios'
import { store } from './store/index'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
  store, // store/index.js의 vuex가 등록이 되었고 vue 개발자 도구 vuex 화면에서 보면 등록된 것을 확인할 수 있다
}).$mount('#app')

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: [
    
//   ]
// })
// new Vue에
// router: router
// main.js는 기본적으로 application에 플러그인과 라이브러리를 구조적으로 확인할 수 있는 구조도
