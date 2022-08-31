<template>
    <NavBar :transparent=false />
    <img src="../assets/long.png">
    <div class="row">
      
      <div :class="{ 'column': !mobile, 'column-mobile': mobile}">
        <h1 :class="{ 'clearance-section': !mobile, 'clearance-section-mobile': mobile}"> Documents for Clearance</h1>
        <ol :class="{ 'word-block1': !mobile, 'word-block-mobile': mobile}">
          <li>1. Power of Attorney</li>
          <li>2. Health Documents/Certificate/Passport/Permit</li>
          <li>3. Invoice/Pro Forma Invoice/Receipt</li>
          <li>4. Air Waybill</li>
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
        <ol :class="{ 'word-block2': !mobile, 'word-block-mobile': mobile}">
          <li>1. Send us POA and documents prior to shipment arrival</li>
          <li>2. Pay us via Zelle, Paypal, or Venmo</li>
          <li>3. We will send you pickup document and notify you once customs released</li>
          <li>4. Check the flight status and arrange pickup at the airlines' cargo facility.
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
  mobile: false,
  windowWidth: null
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
            return;
        }
  }
};
</script>

<style lang="scss" scoped>

.blue {
  background-color: rgba(50, 102, 152, 1);
}
img {
  margin-top:100px;
  
  height:175px;
  width:100%;
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
  margin: 50px 0px 100px 200px;
  
}

.column-mobile {
  float: left;
  width: 50%;
  margin: 80px 75px 100px 75px;
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

.word-block1 {
  line-height: 1.5;
  margin-bottom: 25px;
  font-size: 25px;

  list-style: none;
}

.word-block2 {
  line-height: 1.5;
  margin-bottom: 25px;
  font-size: 20px;
  background-color: rgba(50, 102, 152, 1);
  color: white;
  list-style: none;
  padding:30px;
  border-radius: 20px;
}

.word-block-mobile {
  line-height: 1.5;
  margin-bottom: 25px;
  font-size: 15px;
  list-style: none;
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
  font-size: 13px;
  font-family: Helvetica, Arial,  sans-serif;
  height: fit-content;
  width: fit-content;
}

</style>