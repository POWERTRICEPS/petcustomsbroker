<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import NavBar from './components/NavBar.vue'
//import FooterBar from './components/FooterBar.vue'
export default {
  name: 'App',
  components: {
    //NavBar,
    //FooterBar
  }
}
</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

.mobile-container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 400px;
}

.btn {
  font-weight: bold;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 25px;
  font-family: Helvetica, Arial,  sans-serif;
  height:75px;
  width:200px;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}



</style>