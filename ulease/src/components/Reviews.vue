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

    <template v-for="review, i in reviews">
      <v-divider 
        v-if="i !== 0"
        :key="`divider-${i}`"
      />
      <Review
        :key="i"
        class="my-6"
        v-bind="review"
      />
    </template>
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