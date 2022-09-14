<script>
// 표현을 하지 않는 component == renderless component
// 데이터만 제공하는 component
import axios from 'axios';

export default {
  props: ['url'], // 상위 컴포넌트에서 받아온 url 속성
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then(response => {
        this.response = response.data;
        this.loading = false;
      })
      .catch(error => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },
  render() {
  // render라고 하는 속성은 컴포넌트를 그리는 것인데
  // html, css를 넘겨주는 것이 아니라 데이터만 넘겨주는 것이다
  // $scopedSlots이란 하위컴포넌트 즉, fetchData.vue에서 들고있던
  // response, loading에 접근할 수 있다
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
}
</script>