<template>
  <div class="outer">
    <div class="inner">
      <h1>ULease</h1>
      <v-btn
        @click="signIn"
      >Sign in!</v-btn>
    </div>
  </div>
</template>

<style scoped>
  .outer {
    display: flex;
    justify-content: center;
    margin-top: 20%;
  }

  .inner {
    text-align: center; 
    width: 200px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
  }
</style>

<script>
export default {
  name: 'Landing',

  methods: {
    signIn() {
      this.$router.push({ name: 'home' })
    },
  }
}
</script>
