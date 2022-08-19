<template>
  <NavBar/>
  <div class="row">

    <div class="column">
      <div class="gmap_canvas">
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=139%20Mitchell%20Ave&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><a href="https://www.embedgooglemap.net">put google maps on your website</a>
      </div>
    </div>
    <div class="column">
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
};
</script>


<style>
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:500px;
  width:600px;}

.row {
  justify-content: space-between;
}

.row:after {
  content: "";
  display: table;
  clear: both;
  
}

.column {
  float: left;
  width: 30%;
  margin: 80px 0px 100px 250px;
  
}

.contact-title {
  font-weight: bold;
  margin-bottom: 30px;
  font-size:20px;
}


.contact {
    vertical-align: top;
    display: inline-block;
    width: 1000px;
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