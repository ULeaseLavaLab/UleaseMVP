<template>
  <div class="d-flex" style="gap: 3px; align-items: center; flex-wrap: wrap">
    <v-btn 
      v-for="(tag, i) in tags" 
      :key="i"
      rounded
      outlined
      @click.stop
      style="padding: 17px unset"
    >
      <div class="t-button-text" style="font-size: 14px !important;">{{ tag }}</div>
    </v-btn>
    <v-btn
      v-if="nextBtn"
      rounded
      outlined
      icon
      small
      color="black"
      @click.stop
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
  border-color: var(--gainsboro);
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