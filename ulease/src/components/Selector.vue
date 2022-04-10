<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        class="t-bolded-button-text"
        text
        v-on="on"
        v-bind="attrs"
      >{{ value }}</v-btn>
    </template>
    <v-list>
      <v-list-item 
        v-for="(option, i) in options" 
        :key="i"
        @click="select(option)"
      >
        <v-list-item-title>{{ option }}</v-list-item-title>
      </v-list-item>
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
  name: 'Selector',

  emits: ['input'],
  
  props: {
    value: { type: String },
    options: { type: Array },
  },

  methods: {
    select(option) {
      this.$emit('input', option)
    }
  },
}
</script>