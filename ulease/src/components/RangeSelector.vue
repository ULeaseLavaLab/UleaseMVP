<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        class="t-bolded-button-text"
        text
        v-on="on"
        v-bind="attrs"
      >{{ valueString }}</v-btn>
    </template>
    <v-list>
      
    </v-list>
  </v-menu>
</template>

<style scoped>
  .v-btn {
    letter-spacing: unset;
    text-indent: unset;
    text-transform: unset;
  }
</style>

<script>
export default {
  name: 'RangeSelector',

  emits: ['input'],
  
  props: {
    value: { type: Object, required: true }, // Object of the format { min: XX, max: XX }
    min: { type: Number, default: 0 },
    max: { type: Number, default: 1000 },
    prefix: { type: String, default: '' }, // String to prefix the numerical values
  },

  computed: {
    valueString() {
      return `${this.prefix}${this.value.min} - ${this.prefix}${this.value.max}`
    },
  },

  methods: {
    select(option) {
      this.$emit('input', option)
    }
  },
}
</script>