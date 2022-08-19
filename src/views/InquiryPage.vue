<template>
    <NavBar/>
    <form>
      <div class="centered">
        <label >Personal Power of Attorney</label><br>
      </div>
      <label>Topic:</label>
      <input type="text" required v-model="firstName">
      <label>Message:</label>
      <input type="text" required v-model="lastName">

      <div v-show="disclaimer" class="centered">
        <router-link :to="{name: 'InquiryPage'}">
          <button class="submit" >Submit</button>
        </router-link>
      </div>

    </form>
    <FooterBar/>

</template>


<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
//import axios from 'axios'
// @ is an alias to /src
export default {
  name: "PersonalPOA",
  components: {
    NavBar,
    FooterBar      
  },

  data() {
    return {
    }
  }
  
};
</script>


<style lang="scss" scoped>
body {
  margin: 0;
  background: #fff;
}
form {
  max-width: 620px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding:40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width:16px;
  margin: 0 20px 0 0;
  position: relative;
  top: 2px;
}

.centered {
  text-align:center;
}
.submit {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}
</style>