<template>
  <div class="py-8">
    <div class="t-h4 d-flex align-center mb-8"><v-icon class="c-blue-text">mdi-star</v-icon> <div>{{ `${rating} (${numReviews} reviews)` }}</div> </div>
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

    <Review
      v-for="review, i in reviews"
      :key="i"
      v-bind="review"
    />
  </div>
</template>

<script>
import Review from '@/components/Review.vue'
export default {
  name: 'Reviews',

  components: {
    Review
  },

  props: {
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: { type: Array, default: [] },
  },
}
</script>