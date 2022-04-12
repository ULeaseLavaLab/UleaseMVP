<template>
  <div class="d-flex">
    <div class="d-flex _container" style="align-items: center;">
      <template 
        v-for="(filter, i) in filters"
      >
        <Selector 
          :key="i"
          v-if="filter.type === 'select'"
          v-model="filter.selected"
          :options="filter.options"
        />
      </template>
      
      
      <v-btn
        color="primary"
        icon
        @click="search"
      >
        <div class="search-text">
            <v-icon>mdi-magnify</v-icon>
            <a class="t-body"> Search </a>
        </div>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
  a {
      color: white;
  }
  .search-text {
      position: absolute;
      left: 170px;
      color: white;
      text-align: center;
  }
  ._container {
    text-align: center;
    color: white;
    width: 440px;
    border-width: 1px;
    border-radius: 10px;
    border-color: white;
    border-style: solid;
    background: #202ADF;
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
  name: 'HomeSearch',

  emits: ['search'],

  components: {
    Selector,
    RangeSelector,
  },

  data() {
    return {
      Search
    }
  },

  methods: {
    search() {
      this.$emit('search')
    },
  },
}
</script>
