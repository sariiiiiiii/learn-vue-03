import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1
  render: function(createElement) {
    return createElement(App);
  },
  // 2
  // h == vue는 가상 DOM을 사용하고 있는데 h는 하이퍼스크립트의 약자
  // 가상DOM 진영에서 많이 쓰는 약자
  render: function(h) {
    return h(App);
  },
  // 3
  render: (h) => {
    return h(App);
  },
  // 4
  render: h => h(App),
}).$mount('#app')
