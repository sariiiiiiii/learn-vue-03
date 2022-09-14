<template>
  <!-- 항상 상위에서 아래로는 props -->
  <!-- 아래에서는 위로 emit으로 올리자 -->
  <!-- 여기서 checkbox를 체크하게 되면 props로 내려받은 데이터가 false -> true, true -> false로 바뀐다 -->
  <!-- 그 때, props의 데이터를 바꾸지 마라 에러가 발생한다 -->
  <!-- <input type="checkbox" v-model="checked"> -->
  <input type="checkbox" :value="value" @click="toggleCheck">

  <!-- v-model은 기본적으로 -->
  <!-- input 이벤트와 value값으로 조작이 된다 -->
  <!-- 그 관점에서 봤을 때 내릴 때는 :value라는 props로 내리고 -->
  <!-- 올릴 때는 @input 이벤트로 올린다 -->

</template>

<script>
export default {
  // props: ['checked']
  props: ['value'], // 일단 value를 내려받음, == false
  methods: {
    toggleCheck() {
      this.$emit('input', !this.value) // input 올리기
      // true가 아닌 !this.value로 올리는 이유(true로 올리면 항상 true값이기 때문에)
    }
  }
}
</script>