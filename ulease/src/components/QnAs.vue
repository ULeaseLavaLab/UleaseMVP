<template>
  <div class="py-8">
    <div class="d-flex align-center mb-4">
      <v-text-field 
        class="mr-2"
        outlined 
        placeholder="Search reviews" 
        append-icon="mdi-magnify"
        dense
        hide-details
      />
      <v-btn
        dark
        color="var(--blue)"
        class="t-button-text"
      >Write a review</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QnAs',
  
  props: {
    questions: { type: Array, default: [] },
  },
}
</script>