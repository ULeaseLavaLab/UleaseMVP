<template>
  <div class="d-flex">
    <Selector 
      v-for="filter, i in filters"
      :key="i"
      btn-class="mr-2 py-5"
      :value="filter.value"
      :options="filter.options"
      outlined
      dropdown-icon
    />
    <v-btn class="rounded-lg py-5" color="var(--gainsboro)" outlined>
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
      filters: [
        {
          value: 'Roommates',
          options: ['1', '2', '3', '4'],
        }, 
        {
          value: 'Proximity to campus',
          options: ['<1 miles', '2 miles', '5+ miles'],
        },
        {
          value: 'Building type',
          options: ['Apartment', 'House'],
        },
        {
          value: 'Beds & Baths',
          options: ['1B1B', '2B2B', '3B2B'],
        },
        {
          value: 'Amenities',
          options: ['Gym', 'Pool', 'Courtyard'],
        },
        {
          value: 'Housing company',
          options: ['Gateway', 'Stuho', 'Tripalink', 'Mosaic'],
        },
      ],
    }
  },
}
</script>