<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center" @click="$router.push({ name: 'landing' })">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <div>ULease</div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
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
    background-color: #222 !important;
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
</style>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
