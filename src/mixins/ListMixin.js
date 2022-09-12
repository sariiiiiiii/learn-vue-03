import bus from '../utils/bus'
// mixin
export default {
    mounted() {
      bus.$emit('end:spinner')
    }
}