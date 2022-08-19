
<template>
    <NavBar/>
    <form>
      <div class="centered">
        <label >Personal Power of Attorney</label><br>
      </div>
      <label>First Name:</label>
      <input type="text" required v-model="firstName">
      <label>Last Name:</label>
      <input type="text" required v-model="lastName">
      <label>SSN:</label>
      <input type="text" required v-model="ssn">
      <label>Home Address:</label>
      <input type="text" required v-model="businessAdd">
      <label>City:</label>
      <input type="text" required v-model="businessCity">
      <label>State:</label>
      <input type="text" required v-model="businessState">
      <label>Zip:</label>
      <input type="text" required v-model="businessZip">
      <label>Phone Number:</label>
      <input type="text" required v-model="phone">
      <label>Email:</label>
      <input type="email" required v-model="email">
      <label>Disclaimer: We are acting solely as pet owner's agent to handle paperwork for customs release. We do not involve in the physical handling and transport of your pets. It is the pet owner's responsibility to make sure their pet meets entry requirements from all related U.S government agencies. Failure to meet these import requirements will result in problems of pet's health, care, well-being, and the admissibility upon arrival in the United States. </label>

      <div class="disclaimer">
        <input type="checkbox" v-model="disclaimer" required>
        <label>I have read and understood the disclaimer </label>
      </div>

      <div v-show="disclaimer" class="centered">
        <router-link :to="{name: 'PrintPOA',  params: { 'companyName': firstName + ' ' + lastName, 'firstName': firstName, 'lastName': lastName, 'einssn': ssn, 'businessAdd': businessAdd, 'businessCity': businessCity, 'businessState': businessState, 'businessZip': businessZip, 'phone': phone, 'email':email }}">
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
    
      firstName: '',
      lastName: '',
      ssn: '',
      businessAdd: '',
      businessCity: '',
      businessState: '',
      businessZip: '',
      phone: '',
      email: '',
      
      disclaimer: false
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