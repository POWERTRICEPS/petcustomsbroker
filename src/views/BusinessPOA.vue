

<template>
    <NavBar/>
    <div class="empty">
      <h1>       z</h1>
    </div>
    <form>
      <div class="centered">
        <label class="title" >Business Power of Attorney</label><br>
      </div>
      <label>Company Style:</label><br>
      <input class="radio" type="radio" id="individual" value="Individual" name="company" v-model="style">
      <label for="individual">Individual</label>
      <input class="radio" type="radio" id="partnership" value="Partnership" name="company" v-model="style">
      <label for="partnership">Partnership</label>
      <input class="radio" type="radio" id="corporation" value="Corporation" name="company" v-model="style" checked="checked">
      <label for="corporation">Corporation</label>
      <input class="radio" type="radio" id="sole proprietorship" value="Sole Proprietorship" name="company" v-model="style">
      <label for="sole proprietorship">Sole Proprietorship</label>
      <input class="radio" type="radio" id="LLC" value="LLC" name="company" v-model="style">
      <label for="LLC">LLC</label>
      <br>
      <div class="label-input">
        <label>Company Name:</label>
        <input type="text" required v-model="companyName">
      </div>
      <div class="label-input">
        <label>Company IRS#/SSN:</label>
        <input type="text" required v-model="IRS">
      </div>
      <div class="label-input">
        <label>DBA:</label>
        <input type="text" required v-model="dba">
      </div>
      <div class="label-input">
        <label>Business Address:</label>
        <input type="text" required v-model="businessAdd">
      </div>
      <div class="label-input">
        <label>City:</label>
        <input type="text" required v-model="businessCity">
      </div>
      <div class="label-input">
        <label>State:</label>
        <input type="text" required v-model="businessState">
        <label>Zip:</label>
        <input type="text" required v-model="businessZip">
      </div>
      <!--
      <div class="label-input">
        <label>Company Residing Address:</label>
        <input type="text" required v-model="companyaddress">
      </div>
      <div class="label-input">
        <label>City:</label>
        <input type="text" required v-model="companycity">
      </div>
      <div class="label-input">
        <label>State:</label>
        <input type="text" required v-model="companystate">
        <label>Zip:</label>
        <input type="text" required v-model="companyzip">
      </div>
      -->
      <div class="label-input">
        <label>Incorporated State:</label>
        <input type="text" required v-model="corpState">
      </div>
      <div class="label-input">
        <label>Phone Number:</label>
        <input type="text" required v-model="phone">
      </div>
      <div class="label-input">
        <label>Email:</label>
        <input type="email" required v-model="email">
      </div>
      <div class="label-input">
        <label>First Name:</label>
        <input type="text" required v-model="firstName">
      </div>
      <div class="label-input">
        <label>Last Name:</label>
        <input type="text" required v-model="lastName">
      </div>
      <div class="label-input">
        <label>Title/Capacity:</label>
        <input type="text" required v-model="capacity">
      </div>
      <label>Disclaimer: ORIOX CUSTOMS BROKER INC IS ACTING SOLELY AS PET OWNER'S AGENT TO HANDLE PAPERWORK FOR CUSTOMS RELEASE. ORIOX CUSTOMS BROKER INC DOES NOT INVOLVE IN THE PHYSICAL HANDLING AND TRANSPORT OF YOUR PETS. IT IS THE PET OWNER'S RESPONSIBILITY TO MAKE SURE THEIR PET MEETS ENTRY REQUIREMENTS FROM ALL GOVERNMENTAL REGULATORY AGENCIES. FAILURE TO MEET THESE IMPORT REQUIREMENTS WILL RESULT IN PROBLEMS OF PET'S HEALTH, CARE, WELL-BEING, AND THE ADMISSIBILITY UPON ARRIVAL IN THE UNITED STATES.
 </label>

      <div class="disclaimer">
        <input type="checkbox" v-model="disclaimer" required>
        <label>I have read and understood the disclaimer </label>
      </div>

      <div v-show="disclaimer" class="centered">
        <router-link :to="{name: 'PrintBusiness',  params: { 'style': style, 'companyName': companyName, 'einssn': IRS, 'dba': dba, 'businessAdd': businessAdd, 'businessCity': businessCity, 'businessState': businessState, 'businessZip': businesZip, 'companyAdd': companyAdd, 'companyCity': companyCity, 'companyState': companyState, 'companyZip': companyZip, 'corpState': corpState, 'phone': phone, 'email':email, 'firstName': firstName, 'lastName': lastName, 'capacity': capacity}}">
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
  mounted () {
    window.scrollTo(0, 0)
  },
  data() {
    return {
      style: "Corporation",
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
      capacity: '',
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

.title {
  font-size:0.8em;
}
.empty {
  margin-bottom: 125px;
}


.label-input {
  display: flex;
  margin-bottom: 5px;
}

body {
  margin: 0;
  background: #fff;
}
form {
  max-width: 750px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding:40px;
  border-radius: 10px;
}

label {
  display: inline-block;
  margin: 25px 18px 15px 0;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  margin-top: 15px;
  display: block;
  padding: 10px 6px;
  height: fit-content;
  width: 60%;
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