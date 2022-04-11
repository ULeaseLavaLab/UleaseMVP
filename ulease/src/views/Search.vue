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

    <template v-for="(property, i) in properties" >
      <v-divider v-if="i !== 0" :key="`${i}-divider`" />
      <Property 
        @click="showListing"
        :key="i"
        v-bind="property"
      />
    </template>
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
          listerPic: require('@/assets/listings/gateway.png'),
          listDuration: '1 week',
          numListings: 3,
          rating: 4.32,
          numReviews: 103,
          roomOnly: false,
          sponsored: true,
        },
        {
          image: require('@/assets/property2.jpg'),
          title: '1-bed / 1-bath Spacious House on Menlo Avenue',
          address: '2723 Menlo Avenue, Los Angeles CA 90007',
          distance: 1.8,
          tags: ['Balcony/patio', 'Gated', 'Parking', 'Tile floors'],
          rent: 1200,
          lister: 'Mosaic Student Communities',
          listerPic: require('@/assets/listings/mosaic.png'),
          listDuration: '2 days',
          numListings: 236,
          rating: 4.32,
          numReviews: 103,
          roomOnly: false,
          sponsored: true,
        },
        {
          image: require('@/assets/property3.jpg'),
          title: 'One bedroom summer sublease on Ellendale Street',
          address: 'Student-listed sublease on Ellendale street',
          distance: 0.4,
          tags: ['Roommate', 'Location', 'Furnished', 'Parking'],
          rent: 980,
          lister: 'Jose Holloway',
          listerPic: require('@/assets/listings/jose.jpg'),
          listDuration: '1 hour',
          numListings: 1,
          rating: 0,
          numReviews: 0,
          roomOnly: true,
          sponsored: false,
        },
        {
          image: require('@/assets/property4.jpg'),
          title: '2-bed / 2-bath apartment unit in University Gateway',
          address: '1373 W 37th Dr, Los Angeles CA 90007',
          distance: 0.2,
          tags: ['2 bed 2 bath', 'Free wifi', 'Furnished', 'Kitchen'],
          rent: 1100,
          lister: 'TRIPALINK',
          listerPic: require('@/assets/listings/tripalink.png'),
          listDuration: '3 weeks',
          numListings: 90,
          rating: 4.0,
          numReviews: 283,
          roomOnly: false,
          sponsored: true,
        },
        {
          image: require('@/assets/property5.jpg'),
          title: '1-bed / 1-bath Spacious House on Menlo Avenue',
          address: '2723 Menlo Avenue, Los Angeles CA 90007',
          distance: 1.8,
          tags: ['Balcony/patio', 'Gated', 'Parking', 'Tile floors'],
          rent: 880,
          lister: 'Mosaic Student Communities',
          listerPic: require('@/assets/listings/mosaic.png'),
          listDuration: '2 days',
          numListings: 236,
          rating: 4.32,
          numReviews: 103,
          roomOnly: false,
          sponsored: true,
        },
      ]
    }
  },

  methods: {
    showListing(e) {
      setTimeout(() => {
        this.$router.push({ name: 'listing' })
      }, 200)
    }
  }
}
</script>