<template>
  <v-container class="pt-8" style="max-width: 1200px;">
    <v-overlay :value="overlay" />

    <div class="d-flex align-center">
      <h2>Places near USC</h2>
      <div v-if="!loggedIn" class="mx-4 grey lighten-1" style="width: 2px; height: 24px"></div>
      <div v-if="!loggedIn" class="t-body c-silver-text"><a class="t-link c-blue-text" @click="showOverlay">Log in</a> to view 4 hidden properties</div>
      <v-spacer />
      <div class="t-button-text c-silver-text">100+ listings near campus</div>
    </div>

    <template v-for="(propertyId, i) in Object.keys(properties)" >
      <div v-if="properties[propertyId].sponsored || loggedIn" :key="i">
        <v-divider v-if="i !== 0" />
        <Property 
          @click="showListing(propertyId)"
          v-bind="properties[propertyId]"
        />
      </div>
    </template>
  </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Property from '@/components/Property'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Search',

  components: {
    Property,
    SearchBar,
  },

  mounted() {
    google.accounts.id.disableAutoSelect();
    this.setLoggedIn(false)
    if (!this.loggedIn)
      google.accounts.id.prompt()
  },

  watch: {
    loggedIn(loggedIn) {
      if (loggedIn) {
        this.overlay = false
      }
    },
  },

  data() {
    return {
      overlay: false,
    }
  },

  computed: {
    ...mapState([ 'properties', 'loggedIn' ]),
  },

  methods: {
    ...mapMutations([ 'setLoggedIn' ]),
    showListing(id) {
      console.log(id)
      setTimeout(() => {
        this.$router.push({ name: 'listing', params: { id }, })
      }, 200)
    },
    showOverlay() {
      this.overlay = true
    },
  }
}
</script>