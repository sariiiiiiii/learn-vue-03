<template>
  <div>
    <h1>Chart.js</h1>
    <!-- vue에서의 DOM에 접근하는 속성 ref(레퍼런스) -->
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>

export default {

  props: ['propsdata'],

  // 컴포넌트 속성 && 인스턴스 옵션
  // 외부 라이브러리를 모듈화 한다고 export default를 지우면 안된다
  mounted() {
    // document.getElementById는 화면이 띄어진 후에 읽어줘야 하기 때문에 라이플사이클 훅 mounted() 활용
    // const ctx = document.getElementById('barChart');
    // ref 속성 이용(vue에서 DOM 접근)
    const ctx = this.$refs.barChart;
    
      const barChart = new this.$_Chart(this.$refs.barChart, {
        // const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            dataset: this.propsdata,
            // datasets: [{
            //     label: '# of Votes',
            //     data: [12, 19, 3, 5, 2, 3],
            //     backgroundColor: [
            //         'rgba(255, 99, 132, 0.2)',
            //         'rgba(54, 162, 235, 0.2)',
            //         'rgba(255, 206, 86, 0.2)',
            //         'rgba(75, 192, 192, 0.2)',
            //         'rgba(153, 102, 255, 0.2)',
            //         'rgba(255, 159, 64, 0.2)'
            //     ],
            //     borderColor: [
            //         'rgba(255, 99, 132, 1)',
            //         'rgba(54, 162, 235, 1)',
            //         'rgba(255, 206, 86, 1)',
            //         'rgba(75, 192, 192, 1)',
            //         'rgba(153, 102, 255, 1)',
            //         'rgba(255, 159, 64, 1)'
            //     ],
            //     borderWidth: 1
            // }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
}
</script>

<style>

</style>