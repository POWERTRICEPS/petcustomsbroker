

<template>
    <NavBar/>
    <form>
      <div class="centered">
        <label >Business Power of Attorney</label><br>
      </div>
      <label>Company Style:</label><br>
      <input class="radio" type="radio" id="individual" value="Individual" name="company" v-model="style">
      <label for="individual">Individual</label>
      <input class="radio" type="radio" id="partnership" value="Partnership" name="company" v-model="style">
      <label for="partnership">Partnership</label>
      <input class="radio" type="radio" id="corporation" value="Corporation" name="company" v-model="style">
      <label for="corporation">Corporation</label>
      <input class="radio" type="radio" id="sole proprietorship" value="Sole Proprietorship" name="company" v-model="style">
      <label for="sole proprietorship">Sole Proprietorship</label>
      <br>
      <label>Company Name:</label>
      <input type="text" required v-model="companyName">
      <label>Company IRS#:</label>
      <input type="text" required v-model="IRS">
      <label>DBA:</label>
      <input type="text" required v-model="dba">
      <label>Business Address:</label>
      <input type="text" required v-model="businessAdd">
      <label>City:</label>
      <input type="text" required v-model="businessCity">
      <label>State:</label>
      <input type="text" required v-model="businessState">
      <label>Zip:</label>
      <input type="text" required v-model="businessZip">
      <label>Company Residing Address:</label>
      <input type="text" required v-model="companyaddress">
      <label>City:</label>
      <input type="text" required v-model="companycity">
      <label>State:</label>
      <input type="text" required v-model="companystate">
      <label>Zip:</label>
      <input type="text" required v-model="companyzip">
      <label>Incorporated State:</label>
      <input type="text" required v-model="corpState">
      <label>Phone Number:</label>
      <input type="text" required v-model="phone">
      <label>Email:</label>
      <input type="email" required v-model="email">
      <label>First Name:</label>
      <input type="text" required v-model="firstName">
      <label>Last Name:</label>
      <input type="text" required v-model="lastName">

      <label>Disclaimer: We are acting solely as pet owner's agent to handle paperwork for customs release. We do not involve in the physical handling and transport of your pets. It is the pet owner's responsibility to make sure their pet meets entry requirements from all related U.S government agencies. Failure to meet these import requirements will result in problems of pet's health, care, well-being, and the admissibility upon arrival in the United States. </label>

      <div class="disclaimer">
        <input type="checkbox" v-model="disclaimer" required>
        <label>I have read and understood the disclaimer </label>
      </div>

      <div v-show="disclaimer" class="centered">
        <router-link :to="{name: 'PrintPOA',  params: { 'style': style, 'companyName': companyName, 'einssn': IRS, 'dba': dba, 'businessAdd': businessAdd, 'businessCity': businessCity, 'businessState': businessState, 'businessZip': businesZip, 'companyAdd': companyAdd, 'companyCity': companyCity, 'companyState': companyState, 'companyZip': companyZip, 'corpState': corpState, 'phone': phone, 'email':email, 'firstName': firstName, 'lastName': lastName}}">
          <button class="submit" >Submit</button>
        </router-link>
      </div>

    </form>
    <FooterBar/>

</template>


<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// @ is an alias to /src
export default {
  
  name: "BusinessPOA",
  components: {
    NavBar,
    FooterBar  
  },

  data() {
    return {
      style: "Individual",
      companyName: '',
      IRS: '',
      dba: '',
      businessAdd: '',
      businessCity: '',
      businessState: '',
      businessZip: '',
      companyaddress: '',
      companycity: '',
      companystate: '',
      companyzip: '',
      corpState: '',
      phone: '',
      email: '',
      firstName: '',
      lastName: '',
      disclaimer: false
    }
  }
};
</script>


<style lang="scss" scoped>

.radio {
  display: inline-block;
  width:16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}


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
  margin: 25px 18px 15px 0;
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