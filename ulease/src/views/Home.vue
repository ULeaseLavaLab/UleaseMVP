<template>
  <v-container>
    <div class="page">
      <div class="left-side">
        <h1 class="t-h1">Secure your place near campus</h1>
        <h2 class="t-h4"> Filter legitimate properties that fit your needs or sublease your place to college students. </h2>

        <div class="dropdowns">
          <v-row>
            <v-col cols="12">
              <v-select
                :items="items"
                :menu-props="{ top: true, offsetY: false }"
                label="CAMPUS"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="leases"
                :menu-props="{ top: true, offsetY: false }"
                label="LEASE TERM"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="types"
                :menu-props="{ top: true, offsetY: false }"
                label="LEASE TYPE"
              ></v-select>
            </v-col>
          </v-row>
          
        </div>
        
        <br>
        <SearchBar 
          @search="search"
        />
      </div>
      <div class="right-side">
         <img src="../assets/home.png" width = "600" height = "600" alt=" 1">
      </div>
    </div>
  </v-container>
</template>

<style scoped>
  .move_right {
    position: relative;
    left: 260px;
    top: -93px;
  }
  .dropdowns {
    border: 1px;
    border-style: solid;
    border-color: #DDDDDD;
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
import SearchBar from '@/components/SearchBar'

export default {
  data: () => ({
      items: ['University of Southern California (USC)', 'Arizona State University', 'UC San Diego', 'UCLA'],
      leases: ['Summer 2022','Fall 2022', 'Spring 2023', 'Fall 2022 - Summer 2023'],
      types: ['Single','Double', 'Full Room'],
    }),
  name: 'Home',

  components: {
    SearchBar,
  },

  methods: {
    search() {
      this.$router.push({ name: 'search' })
    },
  },
}
</script>
