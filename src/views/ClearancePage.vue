<template>
    <NavBar :transparent=false />
    <img src="../assets/dogcat.jpg">
    <div class="row">
      
      <div :class="{ 'column': !mobile, 'column-mobile': mobile}">
        <h1 :class="{ 'clearance-section': !mobile, 'clearance-section-mobile': mobile}"> Documents for Clearance</h1>
        <ol :class="{ 'word-block': !mobile, 'word-block-mobile': mobile}">
          <li>Power of Attorney</li>
          <li>Health Documents/Certificate/Passport/Permit</li>
          <li>Invoice/Pro Forma Invoice/Receipt</li>
          <li>Air Waybill</li>
        </ol>
        
        <router-link class="poa-link" :to="{ name: 'Personal'}">
          <button style="background-color:black" :class="{ 'black-btn': !mobile, 'black-btn-mobile': mobile}">Personal/Non Commercial Import Power of Attorney</button>
        </router-link>
        <router-link class="poa-link" :to="{ name: 'Business'}">
          <button style="background-color:black" :class="{ 'black-btn': !mobile, 'black-btn-mobile': mobile}">Business/Commercial Import Power of Attorney</button>
        </router-link>
        <a href="/files/proforma_invoice_fillable.pdf" class="poa-link" download>
          <button style="background-color:black" :class="{ 'black-btn': !mobile, 'black-btn-mobile': mobile}">Pro forma Invoice Template</button>
        </a>
      </div>

      <div :class="{ 'column': !mobile, 'column-mobile': mobile}">
        <h1 :class="{ 'clearance-section': !mobile, 'clearance-section-mobile': mobile}">How It Works</h1>
        <ol :class="{ 'word-block': !mobile, 'word-block-mobile': mobile}">
          <li>Send us POA and documents prior to shipment arrival</li>
          <li>Pay us via Zelle, Paypal, or Venmo</li>
          <li>We will send you pickup document and notify you once customs released</li>
          <li>You should check the flight status and arrange pickup at the airlines' cargo facility.
Usually it takes 1 to 2 hours for the pets to be transferred to the cargo facility after landing</li>
        </ol>
      </div>
    </div>
  <FooterBar/>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// @ is an alias to /src
export default {
  name: "ClearancePage",
  components: {
    NavBar,
    FooterBar
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
  },
data () {
  return {
  publicPath: process.env.BASE_URL,
  mobile: false
  }
},
methods :{
          checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1100) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.movileNav = false;
            return;
        }
  }
};
</script>

<style lang="scss" scoped>
img {
  opacity: 0.8;
  width: 100%;
  height: 700px;
}
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

.column-mobile {
  float: left;
  width: 30%;
  margin: 80px 0px 100px 150px;
}

.clearance-section {
  font-weight: bold;
  margin-bottom: 30px;
}

.clearance-section-mobile {
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 20px;
}

.word-block {
  line-height: 1.5;
  margin-bottom: 25px;
  font-size: 30px;
}

.word-block-mobile {
  line-height: 1.5;
  margin-bottom: 25px;
  font-size: 20px;
}

.poa-link {
  line-height: 1.5;
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 16px;
  
}



.black-btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: Helvetica, Arial,  sans-serif;
  height: fit-content;
  width: fit-content;
}

.black-btn-mobile {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: Helvetica, Arial,  sans-serif;
  height: fit-content;
  width: fit-content;
}

</style>