<template>
  <div>
    <div class="d-flex align-center">
      <v-avatar>
        <img :src="pic">
      </v-avatar>

      <div>
        <div class="t-button-text">{{ name }}</div>
        <div class="t-small c-silver-text">{{ dateLeaseTerm }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',

  props: {
    name: { type: String, required: true },
    pic: { type: String, required: true },
    date: { type: Date, required: true },
    leaseTerm: { type: Array, required: true },
    text: { type: String, required: true },
    helpfulCount: { type: Number, required: true },
  },

  computed: {
    dateLeaseTerm() {
      return `${this.date.toLocaleString()} Lease Term: `
    },
  },
}
</script>