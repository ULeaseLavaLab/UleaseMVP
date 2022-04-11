<template>
  <div class="d-flex p-2">
    <div class="bar">
      Search
    </div>
    <v-btn
      @click="search"
    ></v-btn>
  </div>
</template>

<style scoped>
  .bar {
    text-align: center;
    color: white;
    flex: 1;
    background-color: #202ADF;
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
