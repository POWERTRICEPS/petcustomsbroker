<template>
    <NavBar/>
    <div class="empty">
      <h1>       z</h1>
    </div>
    <form @submit.prevent="sendEmail">
      <div class="centered">
        <label >Inquiry</label><br>
      </div>
      <label>Name:</label>
      <input type="text" required v-model="name">
      <label>Email:</label>
      <input type="text" required v-model="email">
      <label>Subject:</label>
      <input type="text" required v-model="subject">
      <label>Message:</label>
      <textarea required v-model="msg"> </textarea>
      <div class="centered">
        <input class="submit" type="submit" value="Submit">
        <!--<button class="submit" >Submit</button>-->
     </div>
    </form>
    <FooterBar/>

</template>


<script>
import emailjs from 'emailjs-com';
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
// @ is an alias to /src
export default {
  name: "InquiryPage",
  components: {
    NavBar,
    FooterBar      
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      msg: '',
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    sendEmail() {
      console.log(this.name);
      try {
        emailjs.send('service_i7alwaf', 'template_jt5n7jn',
        {
          name: this.name,
          subject: this.subject,
          email: this.email,
          msg: this.msg
        },
        'rLUmHSy89Rry8grvs');
        this.$toast.success(`Inquiry successully sent!`);
        setTimeout(this.$toast.clear, 3000);

      } catch(error) {
          console.log({error})
          this.$toast.error(`Error! Please try again later.`);
          setTimeout(this.$toast.clear, 3000);
      }
      this.name = ''
      this.subject = ''
      this.email = ''
      this.msg = ''
    },
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
  height:200px;
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
  width:100px;
  margin-left: 215px;
}
</style>