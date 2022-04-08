<template>
  <div class="d-flex" style="gap: 10px; align-items: center;">
    <v-btn 
      v-for="(tag, i) in tags" 
      :key="i"
      rounded
      outlined
    >
      <span class="t-button-text">{{ tag }}</span>
    </v-btn>
    <v-btn
      v-if="nextBtn"
      rounded
      outlined
      icon
      small
      color="black"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.v-btn {
  font-weight: unset;
  letter-spacing: unset;
  text-indent: unset;
  text-transform: unset;
}

.v-btn--outlined {
  border-color: lightgray;
}
</style>

<script>
export default {
  name: 'Tags',

  props: {
    tags: { type: Array, default: [] },
    nextBtn: { type: Boolean, default: false },
  },
}
</script>