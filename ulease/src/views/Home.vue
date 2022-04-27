<template>
  <div class="d-flex justify-center align-center pa-8" style="column-gap: 100px; height: 80%;">
    <div style="flex: 0 0 500px;">
      <div class="t-h1 c-black-text mb-4">Secure your place near campus</div>
      <div class="t-h4-inter mb-8 c-silver-text"> Filter legitimate properties that fit your needs or sublease your place to college students. </div>
      <div class="dropdowns mb-4">
        <v-row no-gutters>
          <v-col cols="12" class="mb-2">
            <v-select
              :items="items"
              :menu-props="{ top: true, offsetY: false }"
              label="Campus"
              hide-details
              outlined
            ></v-select>
          </v-col>
          <v-col cols="6" class="mb-2 pr-1">
            <v-select
              :items="leases"
              :menu-props="{ top: true, offsetY: false }"
              label="Lease Term"
              outlined
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="6" class="mb-2 pl-1">
            <v-select
              :items="types"
              :menu-props="{ top: true, offsetY: false }"
              label="Lease Type"
              hide-details
              outlined
            ></v-select>
          </v-col>
          <v-col md="6" class="mb-2 pr-1">
            <v-text-field
              label="Min Price"
              prefix="$"
              required
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col md="6" class="mb-2 pl-1">
            <v-text-field
              label="Max Price"
              prefix="$"
              required
              hide-details
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        
      </div>
      
      <div class="d-flex">
        <v-btn
          color="primary"
          class="t-button-text mr-1"
          style="flex: 1; align-self: stretch; height: unset;"
          @click="search"
          dark
        >
          <v-icon class="t-button-text mr-1">mdi-magnify</v-icon>
          Search
        </v-btn>
        
        <v-btn
          class="thick-btn"
          outlined
          color="var(--gainsboro)"
        >
          <span class="c-black-text t-button-text">
            <v-icon class="t-button-text">mdi-tune-variant</v-icon>
            Filters
          </span>
        </v-btn>
      </div>
    </div>


    <div style="width: 50%;">
      <v-img src="../assets/home.png" class="rounded-lg" max-height="600px"/>
    </div>
  </div>
</template>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>

<script>
export default {
  data: () => ({
      items: ['University of Southern California (USC)', 'Arizona State University', 'UC San Diego', 'UCLA'],
      leases: ['Summer 2022','Fall 2022', 'Spring 2023', 'Fall 2022 - Summer 2023'],
      types: ['Lease','Sublease', 'Either'],
    }),
  name: 'Home',

  methods: {
    search() {
      this.$router.push({ name: 'search' })
    },
  },
}
</script>
