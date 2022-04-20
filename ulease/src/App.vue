<template>
  <v-app>
    <v-app-bar
      app
      style="background-color: white; box-shadow: unset;"
      :style="navbarStyle"
      height="90"
    >
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
          @click=""
          text
          rounded
          class="t-tabs c-black-text"
        >
          <v-icon class="mr-2">mdi-plus-circle-outline</v-icon> List your place
        </v-btn>
        <v-btn 
          @click=""
          v-if="loggedIn"
          text
          rounded
          class="t-tabs c-black-text"
        >
          <v-icon class="mr-2">mdi-email-outline</v-icon> Messages
        </v-btn>
        <v-btn 
          @click=""
          text
          outlined
          rounded
          class="t-tabs c-black-text"
        >
          <v-icon class="mr-2">mdi-account</v-icon> {{ loggedIn ? 'Profile' : 'Log in'}}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'App',

  components: {
    SearchBar,
  },

  data: () => ({
    loggedIn: true,
  }),

  computed: {
    showSearchBar() {
      return this.$route.name !== null && this.$route.name !== 'home'
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
  :root {
    --blue: #202ADF;
    --black: #222;
    --silver: #717171;
    --gainsboro: #ddd;
    --platinum: #ebebeb;
  }

  .theme--light.v-application {
    color: var(--black) !important;
  }

  /* TODO: make font sizes adjust to screen size */
  .shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  }

  .t-h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 48px !important;
    font-weight: 700 !important;
  }

  .t-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px !important;
    font-weight: 600 !important;
  }

  .t-h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 26px !important;
    font-weight: 500 !important;
  }

  .t-h4 {
    font-family: 'Inter', sans-serif;
    font-size: 22px !important;
    font-weight: 400 !important;
  }

  .t-body {
    font-family: 'Inter', sans-serif;
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  .t-small {
    font-family: 'Inter', sans-serif;
    font-size: 14px !important;
    font-weight: 400 !important;
  }

  .t-pre-title {
    font-family: 'Inter', sans-serif;
    font-size: 12px !important;
    font-weight: 700 !important;
  }

  .t-button-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  .t-link {
    font-family: 'Inter', sans-serif;
    font-size: 16px !important;
    font-weight: 500 !important;
    text-decoration: underline;
  }

  .t-tabs {
    font-family: 'Poppins', sans-serif;
    font-size: 14px !important;
    font-weight: 500 !important;
  }

  .t-bolded-button-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px !important;
    font-weight: 500 !important;
  }

  .t-body-large {
    font-family: 'Poppins', sans-serif;
    font-size: 18px !important;
    font-weight: 400 !important;
  }

  .t-body-large2 {
    font-family: 'Inter', sans-serif;
    font-size: 18px !important;
    font-weight: 400 !important;
  }

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

  .v-btn {
    letter-spacing: unset;
    text-indent: unset;
    text-transform: unset;
  }
</style>