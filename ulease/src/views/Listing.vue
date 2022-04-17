<template>
  <v-container>
    <div class="d-flex mb-4" style="height: 400px; gap: 10px;">
      <v-img src="@/assets/listing/1.png" style="flex: 1;"/>
      <div class="d-flex" style="flex-direction: column; gap: 10px; max-width: 400px;">
        <v-img src="@/assets/listing/2.png" style="flex: 1;"/>
        <v-img src="@/assets/listing/3.png" style="flex: 1;"/>
      </div>
    </div>

    <div class="d-flex">
      <div class="t-h3">{{ property.title }}</div>
      <v-spacer />
      <v-btn
        class="c-black-text t-body"
        text
        @click.stop="saved = !saved"
      >
        <v-icon v-if="!saved">mdi-bookmark-outline</v-icon>
        <v-icon v-else>mdi-bookmark</v-icon>
        Save
      </v-btn>
      <v-btn
        class="c-black-text t-body"
        text
      >
        <v-icon>mdi-share</v-icon>
        Share
      </v-btn>
    </div>

    <div style="margin-right: 400px;">
      <div class="d-flex align-center mb-8">
        <div class="t-body-large c-silver-text mr-6">{{ property.address }}</div>
        <div class="t-small c-blue-text"><v-icon class="c-blue-text">mdi-account-supervisor</v-icon> 12 people are viewing this property</div>
      </div>

      <Lister
        class="mb-8"
        :listerPic="property.listerPic"
        :lister="property.lister"
        :numListings="property.numListings"
        :rating="property.rating"
        :numReviews="property.numReviews"
      />

      <div class="t-h4 mb-2">Overview</div>
      <div class="t-body mb-8">{{ property.description }}</div>

      <table>
        <tr>
          <td><v-icon class="c-silver-text">mdi-walk</v-icon></td>
          <td><div class="t-body c-silver-text mr-12">{{ property.distance }} miles from campus</div></td>
          <td><v-icon class="c-silver-text">mdi-bed</v-icon></td>
          <td><div class="t-body c-silver-text mr-12">{{ property.layout }}</div></td>
        </tr>
        <tr>
          <td><v-icon class="c-silver-text">mdi-ruler-square</v-icon></td>
          <td><div class="t-body c-silver-text mr-12">{{ property.squareFootage }} square feet</div></td>
          <td><v-icon class="c-silver-text">mdi-domain</v-icon></td>
          <td><div class="t-body c-silver-text mr-12">{{ property.propertyType }}</div></td>
        </tr>
        <tr>
          <td><v-icon class="c-silver-text">mdi-account</v-icon></td>
          <td><div class="t-body c-silver-text mr-12">{{ property.maxOccupants }} occupant maximum</div></td>
          <td><v-icon class="c-silver-text">mdi-clipboard-text</v-icon></td>
          <td><div class="t-body c-silver-text mr-12">Available for lease</div></td>
        </tr>
      </table>

      <v-divider class="my-8" />

      <div class="t-h4 mb-2">Property amenities</div>
      <Tags class="mb-4" :tags="property.amenities" />
      <v-btn
        class="c-blue-text t-button-text"
        outlined
      >Show all amenities (23)</v-btn>

      <v-divider class="my-8" />

      <div class="t-h4 mb-2">Hoover Street in Los Angeles, CA</div>
      <v-img src="@/assets/listing/map.png" />

      <v-divider class="my-8" />

      <v-tabs>
        <v-tabs-slider color="var(--blue)"></v-tabs-slider>

        <v-tab>
          <span class="t-h4">Reviews for this property</span>
        </v-tab>
        <v-tab>
          <span class="t-h4">Questions & Answers</span>
        </v-tab>
      </v-tabs>
    </div>

  </v-container>
 
</template>

<style scoped>
table {
  border-spacing: 5px 10px;
}

.v-tab {
  font-size: unset;
  font-weight: unset;
  letter-spacing: unset;
  text-transform: unset;
}
</style>

<script>
import SearchBar from '@/components/SearchBar'
import Lister from '@/components/Lister'
import Tags from '@/components/Tags'
import Reviews from '@/components/Reviews'
import { mapState } from 'vuex'

export default {
  name: 'Listing',

  components: {
    SearchBar,  
    Lister,
    Tags,
    Reviews
  },

  data() {
    return {
      saved: false,
    }
  },

  computed: {
    ...mapState([ 'properties' ]),
    property() {
      return this.properties[this.$route.params.id]
    },
  },

  methods: {
    search() {
      this.$router.push({ name: 'message' })
    },
  },
}
</script>
