<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <!-- v-bind:href 축약 문법 :href -->
      <small>
        {{ job.time_ago }}, {{ job.domain }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>