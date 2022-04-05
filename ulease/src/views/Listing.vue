<template>
  <v-container class="text-center">
    <h1 class="my-view ">Sunshine Apartments</h1>
    <div class = "main-shot">
        <img src="../assets/image1.jpeg" width = "400" height = "200" alt=" 1">
    </div>
    <div class = "second-shot">
        <img src="../assets/image2.jpeg" width = "200" height = "100" alt=" 2">
    </div>
    <div class = "second-shot">
        <img src="../assets/image3.jpeg" width = "200" height = "100" alt=" 3">
    </div>
    <div class = "third-shot">
        <img src="../assets/pool.jpeg" width = "200" height = "100" alt=" 4">
    </div>
    <div class = "third-shot">
        <img src="../assets/gym.png" width = "200" height = "100" alt=" 5">
    </div>
    <h3 class="main-text"> 
      Hi. I am sublisting a place right here at Sunset Apartments. There is a gym, a pool, and it will be a single room.
    </h3>
    <h4 class="asking-price">
      $900 per month
    </h4>
    
    <v-btn class="chat" @click = "search"> Chat </v-btn>
  </v-container>
 
</template>

<style scoped>
  .main-shot {
    position: center;
    margin: 10px;
  }
  .second-shot {
    position: left;
    float: left;
    margin: 10px;
  }
  .third-shot {
    position: right;
    float: right;
    margin: 10px;
  }
  .main-text {
  position: absolute;
   width: 300px;
   height: 250px;
   top: 420px;
   left: 550px;
   padding: 40px;
   text-align: center;
   border-style: dotted;
   color: black;
  }
  .asking-price {
    height: 100px;
    width: 100px;
    border-style: solid;
    border-radius: 80%;
    border-color: black;
    position: absolute;
    top: 420px;
    left: 1200px;
    padding-top: 20px;
  }
  .message-button {
    height: 100px;
    width: 100px;
    border-style: solid;
    border-radius: 80%;
    border-color: rgb(22, 17, 17);
    position: absolute;
    top: 620px;
    left: 1200px;
    padding-top: 20px;
  }
  .chat {
    position: absolute;
    left:1220px;
    top:580px;
  }
</style>

<script>
import SearchBar from '@/components/SearchBar'


export default {
  name: 'Listing',

  components: {
    SearchBar
  
  },

  methods: {
    search() {
      this.$router.push({ name: 'message' })
    },
  },
}
</script>
