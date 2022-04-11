<template>
  <v-container class="text-center">
    <h1>Find your fdsdsfs:</h1>
    <SearchBar 
      @search="search"
    />
  </v-container>
</template>

<style scoped>
  .container {
    margin-top: 20%;
  }
</style>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Copy',

  components: {
    SearchBar,
  },

  methods: {
    search() {
      this.$router.push({ name: 'search' })
    },
  },
}
</script>
