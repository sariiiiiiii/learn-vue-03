<template>
  <div>
    <div v-for="item in items">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      items: [],
    }
  },
  created() {
    this.$axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(response => this.items = response.data)
      .catch(error => console.log(error))
  }

}
</script>

<style>

</style>