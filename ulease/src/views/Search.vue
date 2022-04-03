<template>
  <v-container>
    <SearchBar class="mb-4" />

    <v-card 
      v-for="i in 3" 
      :key="i" 
      class="mb-4"
      @click="showListing"  
    >
      <div style="display: flex;">
        <v-img max-width="250" max-height="200" src="https://www.hollandresidential.com/globalassets/550-harborfront/550-harborfront-exterior.png"></v-img>
        <div>
          <v-card-title>
            Sunshine Apartments
          </v-card-title>
          <v-card-text>
            lmao this is a description
          </v-card-text>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Search',

  components: {
    SearchBar,
  },

  methods: {
    showListing() {
      this.$router.push({ name: 'listing' })
    }
  }
}
</script>