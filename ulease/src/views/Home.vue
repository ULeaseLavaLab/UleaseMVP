<template>
  <v-container>
    <div class="page">
      <div class="left-side">
        <h1 class="t-h1">Secure your place near campus</h1>
        <h2 class="t-h4 mb-8"> Filter legitimate properties that fit your needs or sublease your place to college students. </h2>
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
            class="t-button-text mr-1"
            style="flex: 1;"
            color="var(--blue)"
            @click="search"
            dark
          >
            <v-icon class="mr-1">mdi-magnify</v-icon>
            Search
          </v-btn>
          
          <v-btn
            outlined
            color="var(--gainsboro)"
          >
            <span class="c-black-text t-button-text">
              <v-icon>mdi-tune-variant</v-icon>
              Filters
            </span>
          </v-btn>
        </div>
      </div>
      <div class="right-side">
         <img src="../assets/home.png" width = "600" height = "600" alt=" 1">
      </div>
    </div>
  </v-container>
</template>

<style scoped>
  .filter_button 
  {
    position: relative;
    text-align: center;
    
    top: -60px;
    left: 420px;
    color: black;
    border-color: #DDDDDD;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    width: 100px;
    height: 35px;
    border-radius: 10%;


  }
  .move_right {
    position: relative;
    left: 260px;
    top: -93px;
  }
  .dropdowns {
  }
  h2 {
    color: #717171;
  }
  .container {
    margin-top: 20px;
  }
  .left-side {
    margin-top: 40px;
    width: 45%;
    float: left;
    text-align: left;
    font-family: 'Poppins';
  }
  .right-side {
    width: 55%;
    float: right;
  }
  img {
    margin: 20px 60px;
    border-radius: 1%;
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
