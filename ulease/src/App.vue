<template>
  <v-app>
    <v-app-bar
      app
      style="background-color: white; box-shadow: unset;"
      :style="navbarStyle"
      :height="appBarHeight"
    >
      <div style="width: 100%">
        <div class="d-flex align-center fill-height" style="width: 100%;">
          <v-img
            style="cursor: pointer;"
            @click="$router.push({ name: 'home' })"
            alt="ULease_logo"
            class="shrink mr-2"
            contain
            src='@/assets/ULease_logo.png'
            transition="scale-transition"
            width="150"
          />
          <SearchBar v-if="showSearchBar"/>
          <v-spacer />

          <v-btn 
            text
            rounded
            class="t-tabs c-black-text"
          >
            <v-icon class="mr-2">mdi-plus-circle-outline</v-icon> List your place
          </v-btn>
          <v-btn 
            v-if="loggedIn"
            text
            rounded
            class="t-tabs c-black-text"
          >
            <v-icon class="mr-2">mdi-email-outline</v-icon> Messages
          </v-btn>
          <v-btn 
            text
            outlined
            rounded
            class="t-tabs c-black-text"
          >
            <v-icon class="mr-2">mdi-account</v-icon> {{ loggedIn ? 'Profile' : 'Log in'}}
          </v-btn>
        </div>

        <div v-if="showFilters" class="mt-2 d-flex justify-center">
          <Filters />
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Filters from '@/components/Filters'

export default {
  name: 'App',

  components: {
    SearchBar,
    Filters,
  },

  data: () => ({
    loggedIn: true,
  }),

  computed: {
    appBarHeight() {
      return this.showFilters ? 135 : 90
    },
    showSearchBar() {
      return this.$route.name !== null && this.$route.name !== 'home'
    },
    showFilters() {
      return this.$route.name !== null && this.$route.name === 'search'
    },
    navbarStyle() {
      if (this.$route.name === 'home') return {}
      
      return {
        borderBottomColor: 'var(--gainsboro)',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
      }
    },
  },
};
</script>

<style >
  /* Variables */
  :root {
    --blue: #202ADF;
    --black: #222;
    --silver: #717171;
    --gainsboro: #ddd;
    --platinum: #ebebeb;
  }

  /* Custom Classes */
  .shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  }

  .dot {
    width: 3px;
    height: 3px;
    margin: 0 6px;
    border-radius: 50%;
    background-color: var(--black);
  }

  ._divider {
    width: 1px;
    background-color: lightgray;
    align-self: stretch;
  }

  .thick-btn {
    padding-top: 22px !important;
    padding-bottom: 22px !important;
  }

  /* Vuetify overrides */
  .v-btn {
    letter-spacing: unset;
    text-indent: unset;
    text-transform: unset;
    /*padding-top: 22px !important;
    padding-bottom: 22px !important;*/
  }

  .theme--light.v-application {
    color: var(--black) !important;
  }

  /* Fonts */
  .t-h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 48px !important;
    font-weight: 700 !important;
    line-height: 52px !important;
  }

  .t-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px !important;
    font-weight: 600 !important;
    line-height: 40px !important;
  }

  .t-h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 26px !important;
    font-weight: 500 !important;
    line-height: 32px !important;
  }

  .t-h4-inter {
    font-family: 'Inter', sans-serif;
    font-size: 22px !important;
    font-weight: 400 !important;
    line-height: normal !important;
  }

  .t-h4-poppins {
    font-family: 'Poppins', sans-serif;
    font-size: 22px !important;
    font-weight: 400 !important;
    line-height: normal !important;
  }

  .t-body {
    font-family: 'Inter', sans-serif;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: normal !important;
  }

  .t-small {
    font-family: 'Inter', sans-serif;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: normal !important;
  }

  .t-pre-title {
    font-family: 'Inter', sans-serif;
    font-size: 12px !important;
    font-weight: 700 !important;
    line-height: normal !important;
  }

  .t-button-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: normal !important;
  }

  .t-link {
    font-family: 'Inter', sans-serif;
    font-size: 16px !important;
    font-weight: 500 !important;
    text-decoration: underline;
    line-height: normal !important;
  }

  .t-tabs {
    font-family: 'Poppins', sans-serif;
    font-size: 14px !important;
    font-weight: 500 !important;
    line-height: normal !important;
  }

  .t-bolded-button-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: normal !important;
  }

  .t-body-large {
    font-family: 'Poppins', sans-serif;
    font-size: 18px !important;
    font-weight: 400 !important;
    line-height: 20px !important;
  }

  .t-body-large2 {
    font-family: 'Inter', sans-serif;
    font-size: 18px !important;
    font-weight: 400 !important;
    line-height: normal !important;
  }

  /* Colors */
  .c-blue {
    background-color: var(--blue) !important;
  }

  .c-blue-text {
    color: var(--blue)  !important;
  }

  .c-black {
    background-color: var(--black) !important;
  }

  .c-black-text {
    color: var(--black) !important;
  }

  .c-silver {
    background-color: var(--silver) !important;
  }

  .c-silver-text {
    color: var(--silver) !important;
  }

  .c-gainsboro {
    background-color: var(--gainsboro) !important;
  }

  .c-gainsboro-text {
    color: var(--gainsboro) !important;
  }

  .c-platinum {
    background-color: var(--platinum) !important;
  }

  .c-platinum-text {
    color: var(--platinum) !important;
  }
</style>