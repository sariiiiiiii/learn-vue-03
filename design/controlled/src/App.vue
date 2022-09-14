<template>
  <!-- 분명 세분화해서 컴포넌트 구조를 짤때가 온다 -->
  <!-- <check-box :checked="checked"></check-box> -->
  <!-- 그럴때는 이방법을 사용 -->
  <check-box v-model="checked"></check-box>
  <!-- <input type="checkbox"> -->
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  // 상위 컴포넌트에서 데이터를 받아와서 하위 컴포넌트에 뿌려줄 경우가 온다
  data() {
    return {
      checkboxes: [],
      checked: false,
    }
  },
  // created() {
  //   fetchCheckBox()
  //     .then(result => this.checkboxes = result.data)
  // }
}
</script>