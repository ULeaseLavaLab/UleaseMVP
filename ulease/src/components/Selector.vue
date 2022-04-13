<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        class="t-bolded-button-text c-black-text"
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
        <div class="t-bolded-button-text c-black-text">{{ option }}</div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

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