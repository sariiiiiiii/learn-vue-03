import bus from '../utils/bus' // 이벤트 버스는 보통 라이플사이클 훅 안에서 사용
// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    created() {
        bus.$emit('start:spinner')
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched')
            bus.$emit('end:spinner')
          })
          .catch((error) => {
            console.log(error)
          })
      }
}


// // hoc
// export default function create() {
//     // 재사용할 컴포넌트 옵션
// }