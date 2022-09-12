import ListView from './ListView.vue'
import bus from '../utils/bus'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name, // 하이 오더 컴포넌트 명
        created() {
            bus.$emit('start:spinner')
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner')
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        render(createElement) {
            return createElement(ListView); // render함수로 컴포넌트를 로딩
        }
    }
}