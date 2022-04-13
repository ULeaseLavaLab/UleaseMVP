<template>
  <v-app>
    <v-app-bar
      app
    >
      <div class="d-flex align-center" style="width: 100%;">
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
        <v-spacer/>

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
    }
  },
};
</script>

<style>
  /* TODO: make font sizes adjust to screen size */
  .shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  }

  .t-h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
  }

  .t-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 600;
  }

  .t-h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 500;
  }

  .t-h4 {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 400;
  }

  .t-body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .t-small {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .t-pre-title {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
  }

  .t-button-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .t-link {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
  }

  .t-tabs {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  .t-bolded-button-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  .t-body-large {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  .t-body-large2 {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  .c-blue {
    background-color: #202ADF !important;
  }

  .c-blue-text {
    color: #202ADF !important;
  }

  .c-black {
    background-color: #222 !important;
  }

  .c-black-text {
    color: #222 !important;
  }

  .c-silver {
    background-color: #717171 !important;
  }

  .c-silver-text {
    color: #717171 !important;
  }

  .c-gainsboro {
    background-color: #ddd !important;
  }

  .c-gainsboro-text {
    color: #ddd !important;
  }

  .c-platinum {
    background-color: #ebebeb !important;
  }

  .c-platinum-text {
    color: #ebebeb !important;
  }

  .v-btn {
    letter-spacing: unset;
    text-indent: unset;
    text-transform: unset;
  }
</style>