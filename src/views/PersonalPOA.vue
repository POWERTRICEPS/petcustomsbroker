
<template>
    <NavBar/>
    <div class="empty">
      <h1>       z</h1>
    </div>
    <form>
      <div class="centered">
        <label class="title">Personal Power of Attorney</label><br>
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
        <label>SSN:</label>
        <input type="text" required v-model="ssn">
      </div>
      <div class="label-input">
        <label>Home Address:</label>
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
      <div class="label-input">
        <label>Phone Number:</label>
        <input type="text" required v-model="phone">
      </div>
      <div class="label-input">
        <label>Email:</label>
        <input type="email" required v-model="email">
      </div>
      <label>Disclaimer: ORIOX CUSTOMS BROKER INC IS ACTING SOLELY AS PET OWNER'S AGENT TO HANDLE PAPERWORK FOR CUSTOMS RELEASE. ORIOX CUSTOMS BROKER INC DOES NOT INVOLVE IN THE PHYSICAL HANDLING AND TRANSPORT OF THE PETS. IT IS THE PET OWNER'S RESPONSIBILITY TO MAKE SURE THEIR PET MEETS ENTRY REQUIREMENTS FROM ALL GOVERNMENTAL REGULATORY AGENCIES. FAILURE TO MEET THESE IMPORT REQUIREMENTS WILL RESULT IN PROBLEMS OF PET'S HEALTH, CARE, WELL-BEING, AND THE ADMISSIBILITY UPON ARRIVAL IN THE UNITED STATES.</label>

      <div class="disclaimer">
        <input type="checkbox" v-model="disclaimer" required>
        <label>I have read and understood the disclaimer </label>
      </div>

      <div v-show="disclaimer" class="centered">
        <router-link :to="{name: 'PrintPersonal',  params: { 'companyName': firstName + ' ' + lastName, 'firstName': firstName, 'lastName': lastName, 'einssn': ssn, 'businessAdd': businessAdd, 'businessCity': businessCity, 'businessState': businessState, 'businessZip': businessZip, 'phone': phone, 'email':email, 'dl': dl }}">
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
  name: "PersonalPOA",
  components: {
    NavBar,
    FooterBar      
  },
  mounted () {
    window.scrollTo(0, 0)
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
      dl: '',
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

.title {
  font-size:0.8em;
}
.empty {
  margin-bottom: 125px;
}

.label-input {
  display: flex;
  margin-bottom: 15px;
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
 
  display: inline-block;
  margin: 25px 10px 15px 0px;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  margin-top: 15px;
  display: block;
  padding: 10px 6px;
  height:fit-content;
  width: 70%;
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