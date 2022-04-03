<template>
  <v-container class="text-center">
    <h1>Find your place:</h1>
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
  name: 'Home',

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
