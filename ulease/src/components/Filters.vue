<template>
  <div class="d-flex">
    <Selector 
      v-for="filter, i in filters"
      :key="i"
      btn-class="mr-2"
      :value="filter"
      outlined
      dropdown-icon
    />
    <v-btn class="rounded-lg" color="var(--gainsboro)" outlined>
      <span class="t-button-text c-blue-text">Clear</span>
    </v-btn>
  </div>
</template>

<script>
import Selector from '@/components/Selector'

export default {
  name: 'Filters',

  components: {
    Selector,
  },

  data() {
    return {
      filters: ['Roommates', 'Proximity to campus', 'Building type', 'Beds & Baths', 'Amenities', 'Housing company'],
    }
  },
}
</script>