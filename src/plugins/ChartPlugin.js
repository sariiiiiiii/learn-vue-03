import Chart from 'chart.js';

export default {
    install(Vue) {
        // 플러그인 profix는 $_로 정하기를 vue에서 권고한다
        Vue.prototype.$_Chart = Chart;

    // App.vue
    // this.$_Chart 가 Chart로 접근한다
    

    // LineChart.vue
    // this.$_Chart

    }
}