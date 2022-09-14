<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array, // 배열 타입
      required: true, // 필수적인 데이터인가... (true = 필수값)
    },
  },
}
</script>