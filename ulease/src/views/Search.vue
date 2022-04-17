<template>
  <v-container class="pt-8" style="max-width: 1200px;">
    <div class="d-flex" style="align-items: center;">
      <h2>Places near USC</h2>
      <div class="mx-4 grey lighten-1" style="width: 2px; height: 24px"></div>
      <div class="t-body c-silver-text"><a class="t-link c-blue-text" href="">Log in</a> to view 4 hidden properties</div>
      <v-spacer />
      <div class="t-button-text c-silver-text">100+ listings near campus</div>
    </div>

    <template v-for="(propertyId, i) in Object.keys(properties)" >
      <v-divider v-if="i !== 0" :key="`${i}-divider`" />
      <Property 
        @click="showListing(propertyId)"
        :key="i"
        v-bind="properties[propertyId]"
      />
    </template>
  </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Property from '@/components/Property'
import { mapState } from 'vuex'

export default {
  name: 'Search',

  components: {
    Property,
    SearchBar,
  },

  computed: {
    ...mapState([ 'properties' ]),
  },

  methods: {
    showListing(id) {
      console.log(id)
      setTimeout(() => {
        this.$router.push({ name: 'listing', params: { id }, })
      }, 200)
    }
  }
}
</script>