<template>
  <v-container>
    <SearchBar class="mb-4" />

    <div class="d-flex" style="align-items: center;">
      <h2>Places near USC</h2>
      <div class="mx-4 grey lighten-1" style="width: 2px; height: 24px"></div>
      <div class="t-body"><a class="t-link" href="">Log in</a> to view 4 hidden properties</div>
      <v-spacer />
      <div class="t-button-text">100+ listings near campus</div>
    </div>

    <Property 
      v-for="(property, i) in properties"
      :key="i"  
      :property="property"
    />

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
import Property from '@/components/Property'

export default {
  name: 'Search',

  components: {
    Property,
    SearchBar,
  },

  data() {
    return {
      properties: [
        {
          image: require('@/assets/property1.jpg'),
          title: '2-bed / 2-bath apartment unit in University Gateway',
          address: '3131 S. Hoover St., Los Angeles, CA 90089',
          distance: 0.2,
          tags: ['2 bed 2 bath', 'Free wifi', 'Furnished', 'Kitchen'],
          rent: 1180,
          lister: 'University Gateway',
          listDuration: '1 week',
          numListings: 3,
          rating: 4.32,
          numReviews: 103,
          roomOnly: false,
          sponsored: true,
        }
      ]
    }
  },

  methods: {
    showListing() {
      this.$router.push({ name: 'listing' })
    }
  }
}
</script>