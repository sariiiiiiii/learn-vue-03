<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin], // 믹스인이 실행되면 믹스인 안에 있는 옵션들이 해당 위치 컴포넌트에 생성된다고 보면 된다?
}
</script>