<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :class="_btnClass"
        text
        :outlined="outlined"
        v-on="on"
        v-bind="attrs"
      >
        {{ value }}
        <v-icon v-if="dropdownIcon" class="mr-n1">mdi-chevron-down</v-icon>  
      </v-btn>
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
    btnClass: { type: String, default: '' },
    value: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    outlined: { type: Boolean, default: false },
    dropdownIcon: { type: Boolean, default: false },
    bold: { type: Boolean, default: false },
  },

  computed: {
    _btnClass() {
      let c = this.btnClass + ' c-black-text rounded-lg'
      if (this.bold) {
        c += ' t-bolded-button-text'
      } else {
        c += ' t-button-text'
      }

      return c
    }
  },

  methods: {
    select(option) {
      this.$emit('input', option)
    },
  },
}
</script>