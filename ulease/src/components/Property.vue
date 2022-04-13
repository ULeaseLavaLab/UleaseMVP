<template>
  <div 
    v-ripple="true" 
    @click="e => $emit('click', e)" 
    class="_container d-flex pa-6"
    style="align-items: center;"
  >
    <v-img 
      max-width="300" 
      max-height="200" 
      :src="image"
      class="mr-6"
    ></v-img>
    <div class="py-4" style="flex: 1;">
      <div class="d-flex mb-10" style="justify-content: space-between">
        <div>
          <div class="t-body-large">{{ title }}</div>
          <div class="t-small mb-4">{{ address }}  <v-icon>mdi-walk</v-icon>  {{ distance }} miles from campus</div>
          <Tags class="mb-2" :tags="tags" />
        </div>
        <div class="d-flex" style="flex-direction: column; align-items: flex-end;">
          <v-btn
            large 
            icon
            @click.stop="saved = !saved"
          >
            <v-icon v-if="!saved">mdi-bookmark-outline</v-icon>
            <v-icon v-else>mdi-bookmark</v-icon>
          </v-btn>
          <span class="t-small"><v-icon>mdi-clock-time-nine-outline</v-icon> {{ listDuration }} ago</span>
          <div class="t-body-large"><span class="t-h3">${{ rent }}</span> / month</div>
        </div>
      </div>
      <div class="d-flex" style="justify-content: space-between">
        <div class="d-flex" style="gap: 20px;">
          <v-avatar color="white" class="shadow">
            <v-img :src="listerPic">
            </v-img>
          </v-avatar>
          <div>
            <div><span class="t-body">Listed by</span> <span class="t-link">{{ lister }}</span></div>
            <div class="d-flex t-small" style="align-items: center;">{{ numListings }} listings | <v-icon class="c-blue-text">mdi-star</v-icon> {{ rating }} ({{ numReviews }} reviews)</div>
          </div>
        </div>
        <div>
          <div class="t-small" style="text-align: right;">
            <span v-if="roomOnly">This listing is available as a room.</span> 
            <span v-else>This listing is available as a room or full unit.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-image {
  border-radius: 10px;
}

._container {
  cursor: pointer;
}

._container:hover {
  background-color: #eee;
}
</style>

<script>
import Tags from '@/components/Tags'

export default {
  name: 'Property',

  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    distance: { type: Number, required: true },
    tags: { type: Array, required: true },
    rent: { type: Number, required: true },
    lister: { type: String, required: true },
    listerPic: { type: String, required: true },
    listDuration: { type: String, required: true },
    numListings: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    roomOnly: { type: Boolean, required: true },
    sponsored: { type: Boolean, required: true },
  },

  components: {
    Tags,
  },

  data() {
    return {
      saved: false,
    }
  }
}
</script>