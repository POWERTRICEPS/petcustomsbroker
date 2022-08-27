<template>
    <NavBar/>
    <div class="empty">
      <h1>       z</h1>
    </div>
    <form>
      <div class="centered">
        <label >Inquiry</label><br>
      </div>
      <label>Email:</label>
      <input type="text" required v-model="email">
      <label>Topic:</label>
      <input type="text" required v-model="topic">
      <label>Message:</label>
      <textarea required v-model="msg"> </textarea>
      <div class="centered">
        <button class="submit" >Submit</button>
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
  name: "InquiryPage",
  components: {
    NavBar,
    FooterBar      
  },
  data() {
    return {
      email: '',
      topic: '',
      msg: '',
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },

  
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
.empty {
  margin-bottom: 125px;
}

label {
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

textarea{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  
  
  color: #555;
  height:400px;
  width:100%;
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