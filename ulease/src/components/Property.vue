<template>
  <div class="d-flex py-6">
    <v-img 
      max-width="250" 
      max-height="200" 
      :src="property.image"
      class="mr-8"
    ></v-img>
    <div class="py-4" style="flex: 1;">
      <div class="d-flex mb-4" style="justify-content: space-between">
        <div>
          <div class="t-body-large">{{ property.title }}</div>
          <div class="t-small">{{ property.address }}  <v-icon>mdi-walk</v-icon>  {{ property.distance }} miles from campus</div>
        </div>
        <div class="d-flex" style="flex-direction: column; align-items: flex-end;">
          <v-btn 
            icon
          >
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
          <div class="t-body-large"><span class="t-h3">${{ property.rent }}</span> / month</div>
        </div>
      </div>
      <div class="d-flex" style="justify-content: space-between">
        <div>
          <div><span class="t-body">Listed by</span> <span class="t-link">{{ property.lister }}</span> <span class="t-small"><v-icon>mdi-clock-time-nine-outline</v-icon> {{ property.listDuration }} ago</span></div>
          <div class="t-small">{{ property.numListings }} listings | <v-icon>mdi-star</v-icon> {{ property.rating }} ({{ property.numReviews }} reviews)</div>
        </div>
        <div>
          <Tags :tags="property.tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '@/components/Tags'

export default {
  name: 'Property',

  props: {
    property: { type: Object, required: true }
  },

  components: {
    Tags,
  },
}
</script>