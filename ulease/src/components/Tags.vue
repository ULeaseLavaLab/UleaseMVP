<template>
  <div class="d-flex">
    <v-btn v-for="(tag, i) in tags" :key="i">
      {{ tag }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Tags',

  props: {
    tags: { type: Array, default: [] },
    nextBtn: { type: Boolean, default: false },
  },
}
</script>