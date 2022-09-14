<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // props: ['title'], // 일반적인 props 선언방식
  props: {
    title: String,
  }
}
</script>