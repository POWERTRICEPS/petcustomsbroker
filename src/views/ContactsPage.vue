<template>
  <NavBar/>
  <div class="empty">
    <h1>       z</h1>
  </div>
  <img v-show="!mobile" class="contactpic" src="../assets/contacts.png">
  <div class="row">

    <div class="column1">
      <div class="gmap_canvas">
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=139%20Mitchell%20Ave&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><a href="https://www.embedgooglemap.net">put google maps on your website</a>
      </div>
    </div>

    <div class="column2">
      <div class="contact">
        <h1 class="contact-title">Email</h1>
        <p class="contact-block">oriox@att.net</p>
      </div>
      <div class="contact">
        <h1 class="contact-title">Phone</h1>
        <p class="contact-block">Main:  650-866-3680</p>
        <p class="contact-block">Fax:   650-866-3679</p>
      </div>
      <div class="contact">
        <h1 class="contact-title">Address</h1>
        <p class="contact-block">Oriox Customs Broker Inc</p>
        <p class="contact-block">139 Mitchell Ave., Ste 223</p>
        <p class="contact-block">South San Francisco, CA 94080</p>
      </div>
    </div>
  </div>

  <FooterBar/>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// @ is an alias to /src
export default {
  name: "ContactsPage",
  components: {
     NavBar,
    FooterBar   
  },
  data() {
    return {
      mobile: false,
      windowWidth: null
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
  },
  methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1300) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        }
  }
};
</script>


<style>
.contactpic {
  position: absolute;
  left:40%;
  width:auto;
  height:300px;
  top:17.5%;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:400px;
  width:500px;}

.row {
  justify-content: space-between;
}
.empty {
  margin-bottom: 125px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
  
}

.column1 {
  float: left;
  width: 25%;
  margin: 80px 300px 100px 150px;
  
}

.column2 {
  float: left;
  width: 25%;
  margin: 80px 150px 100px 300px;
  
}

.contact-title {
  font-weight: bold;
  margin-bottom: 30px;
  font-size:20px;
}


.contact {
    vertical-align: top;
    display: inline-block;
    width: auto;
    margin: 20px 0px;
}

.contact-block {
  width: 300px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 5px;
  font-family: Helvetica, Arial,  sans-serif;
  font-size:20px;
}
</style>