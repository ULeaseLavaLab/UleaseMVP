<template>
  <div class="d-flex">
    <div class="d-flex _container pa-2" style="align-items: center;">
      <template 
        v-for="(filter, i) in filters"
      >
        <div v-if="i !== 0" :key="`divider-${i}`" class="_divider" />
        <Selector 
          :key="i"
          v-if="filter.type === 'select'"
          v-model="filter.selected"
          :options="filter.options"
        />
        <RangeSelector
          :key="i"
          v-else-if="filter.type === 'range'"
          v-model="filter.range"
          :min="filter.min"
          :max="filter.max"
          prefix="$"
        />
      </template>
      
      
      <v-btn
        color="primary"
        icon
        @click="search"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
  ._container {
    min-width: 0;
    border-width: 1px;
    border-radius: 10px;
    border-color: lightgray;
    border-style: solid;
  }

  ._divider {
    width: 1px;
    background-color: lightgray;
    height: 100%;
  }

  .bar {
    text-align: center;
    color: white;
    flex: 1;
    background-color: #202ADF;
  }
</style>

<script>
import Selector from '@/components/Selector'
import RangeSelector from '@/components/RangeSelector'

export default {
  name: 'SearchBar',

  emits: ['search'],

  components: {
    Selector,
    RangeSelector,
  },

  data() {
    return {
      filters: [
        {
          type: 'select',
          selected: 'USC',
          options: [
            'USC',
            'UCLA',
            'LMU',
          ],
        },
        {
          type: 'select',
          selected: 'Fall 2022',
          options: [
            'Summer 2022',
            'Fall 2022',
            'Spring 2023',
          ],
        },
        {
          type: 'select',
          selected: 'Lease',
          options: [
            'Lease',
            'Sublease',
            'Any',
          ],
        },
        {
          type: 'range',
          min: 300,
          max: 3000,
          range: {
            min: 800,
            max: 1200,
          },
        }
      ]
    }
  },

  methods: {
    search() {
      this.$emit('search')
    },
  },
}
</script>
