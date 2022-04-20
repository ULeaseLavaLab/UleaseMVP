<template>
  <div class="my-6">
    <div class="d-flex align-center mb-4">
      <v-avatar class="mr-2">
        <img :src="pic">
      </v-avatar>

      <div>
        <div class="t-button-text">{{ name }}</div>
        <div class="t-small c-silver-text d-flex align-center">
          {{ dateString }} <div class="dot c-silver"></div> {{ leaseTermString }}
        </div>
      </div>
    </div>

    <div>
      {{ text }}
    </div>

    <v-btn text dense color="var(--blue)" class="t-small px-0 mb-4">
      <v-icon>mdi-chevron-down</v-icon> Read more
    </v-btn>

    <div class="d-flex align-center">
      <v-btn text color="var(--silver)" class="t-pre-title px-0" @click="helpful = !helpful">
        <v-icon v-if="helpful" class="c-blue-text">mdi-thumb-up</v-icon>
        <v-icon v-else>mdi-thumb-up-outline</v-icon> 
        <span class="ml-2">Helpful</span>
      </v-btn>
      <v-spacer />
      <div class="t-pre-title c-silver-text">{{ _helpfulCount }} people found this helpful</div>
    </div>
  </div>
</template>

<style scoped>
.dot {
  width: 3px;
  height: 3px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: var(--black);
}
</style>

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

  data() {
    return {
      helpful: false,
    }
  },

  computed: {
    leaseTermString() {
      return `Lease Term: ${this.leaseTerm.join(', ')}`
    },
    dateString() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return `${months[this.date.getMonth()]} ${this.date.getDay()}, ${this.date.getFullYear()}`
    },
    _helpfulCount() {
      return this.helpfulCount + ( this.helpful ? 1 : 0 )
    },
  },
}
</script>