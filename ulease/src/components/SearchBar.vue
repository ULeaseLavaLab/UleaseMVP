<template>
  <div class="d-flex">
    <div class="bar">
    </div>
    <v-btn
      @click="search"
    >Search</v-btn>
  </div>
</template>

<style scoped>
  .bar {
    flex: 1;
    background-color: lightgray;
  }
</style>

<script>
export default {
  name: 'SearchBar',

  emits: ['search'],

  methods: {
    search() {
      this.$emit('search')
    },
  },
}
</script>
