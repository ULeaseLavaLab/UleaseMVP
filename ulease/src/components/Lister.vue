<template>
  <div class="d-flex" style="gap: 20px;">
    <v-avatar color="white" class="shadow">
      <v-img :src="listerPic">
      </v-img>
    </v-avatar>
    <div>
      <div><span class="t-body">Listed by</span> <span class="t-link">{{ lister }}</span></div>
      <div class="d-flex t-small c-silver-text" style="align-items: center;">{{ numListings }} listings | <v-icon class="c-blue-text">mdi-star</v-icon> {{ rating }} ({{ numReviews }} reviews)</div>
    </div>
  </div>
</template>

<script>
export default { 
  name: 'Lister',

  props: {
    listerPic: { type: String, required: true },
    lister: { type: String, required: true },
    numListings: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
}
</script>