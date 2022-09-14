<template>
  <li>
    <slot>
      <!-- NOTE: 등록하는 곳에서 정의할 화면 영역 -->
      <!-- 내가 Item.vue를 정의할 때 내가 다시 작성할꺼야 영역 -->
    </slot>
  </li>

  <!-- 요런식으로  코드를 작성하게 될 경우  -->
  <!-- 상위컴포넌트에서 텍스트에 대한 의미가 전혀 없어지게 된다 -->
  <!-- 
  <li>
    아이템1
  </li> 
  -->

  <!-- props 방식 -->
  <!-- <li>{{ item }}</li> -->

</template>
<script>
export default ({
  props: ['item']
})
</script>

