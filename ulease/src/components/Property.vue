<template>
  <div 
    v-ripple="true" 
    @click="e => $emit('click', e)" 
    class="_container d-flex py-10"
    style="align-items: stretch;"
  >
    <v-img 
      max-width="300" 
      max-height="200" 
      :src="image"
      class="mr-10"
    ></v-img>
    <div class="d-flex" style="flex: 1;">
      <div class="d-flex mr-2" style="flex: 1; flex-direction:column; justify-content: space-between">
        <div class="d-flex" style="flex: 1; justify-content: space-between">
          <div>
            <div class="t-body-large mb-1">
              <span class="mr-4">{{ title }}</span> 
              <v-chip v-if="sponsored" small class="t-pre-title c-blue white--text" label><v-icon small class="ml-n1 white--text">mdi-lightning-bolt</v-icon>BOOSTED</v-chip>
              <v-chip v-else small class="t-pre-title" outlined label>STUDENT LISTED</v-chip>
            </div>
            <div class="t-small mb-4 c-silver-text d-flex align-center">{{ address }}  <div class="c-silver dot" /><v-icon class="t-small ml-n1">mdi-walk</v-icon>  {{ distance }} miles from campus</div>
            <Tags class="mb-2" :tags="tags" />
          </div>
          <div class="d-flex" style="flex-direction: column; align-items: flex-end;">
            <div class="t-small c-silver-text"><v-icon class="t-small">mdi-clock-time-nine-outline</v-icon> {{ listDuration }} ago</div>
            <div class="t-body-large d-flex" style="flex: 1; align-items: center;"><span class="t-h3">${{ rent }}</span> / month</div>
          </div>
        </div>
        <div class="d-flex" style="justify-content: space-between">
          <Lister
            :listerPic="listerPic"
            :lister="lister"
            :numListings="numListings"
            :rating="rating"
            :numReviews="numReviews"
          />
          <div style="align-self: flex-end;">
            <div class="t-small" style="text-align: right;">
              <span v-if="roomOnly">This listing is available as a room.</span> 
              <span v-else>This listing is available as a room or full unit.</span>
            </div>
          </div>
        </div>
      </div>
      <v-btn
        class="mt-n2 c-black-text"
        large 
        icon
        @click.stop="saved = !saved"
      >
        <v-icon v-if="!saved" class="t-h2">mdi-bookmark-outline</v-icon>
        <v-icon v-else class="t-h2">mdi-bookmark</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.v-image {
  border-radius: 5px;
}

._container {
  cursor: pointer;
}

._container:hover {
  background-color: #eee;
}

.v-chip {
  padding: 0 6px;
}
</style>

<script>
import Tags from '@/components/Tags'
import Lister from '@/components/Lister'

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
    Lister,
  },

  data() {
    return {
      saved: false,
    }
  }
}
</script>