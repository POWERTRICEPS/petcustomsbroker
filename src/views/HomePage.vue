<template>
  <NavBar />
  <div>
    <img src="../assets/kitten.jpg">
    <h1 class="middle">Nationwide Customs Broker For Dogs and Cats</h1>
    <div class="row1">
      <form>
        <button formaction="mailto:oriox@att.net" style="background-color:red" class="btn">Send Inquiry</button>
      </form>
      <router-link class="link" :to="{name: 'Clearance'}">
        <button style="background-color:red" class="btn">Get Started</button>
      </router-link>
    </div>
    <h2 class="bottom">Call 650-866-3680</h2>
  </div>

  <p class="middle2">Customs clearance for dog, cat, ornamental fish, and other pet import shipments at San Francisco, Los Angeles, Seattle, Chicago, Boston, New York, Miami, Dallas, Houston,   and other major airports</p>
  <div class="row2">
    <HomeCard
      img= "plane.png"
      text= "Rapid and Reliable"
    />
    <HomeCard
      img= "pricetag.png"
      text= "Competitive Price"
    />
    <HomeCard
      img= "support.png"
      text= "24/7 Support"
    />
    <HomeCard
      img= "pay.png"
      text= "Accept Zelle/Paypal/Venmo"
    />
  </div>
  <FooterBar/>

</template>



<script>
import HomeCard from '../components/HomeCard.vue'
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// @ is an alias to /src
export default {
  name: "HomePage",
  components: {
    HomeCard,
    NavBar,
    FooterBar
  },
};
</script>

<style lang="scss" scoped>
img {
  opacity: 0.8;
  width: 100%;
  height: 700px;
  filter: brightness(40%);
}

.middle {
  font-weight: bold;
  font-family: Helvetica, Arial,  sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
}

.middle2 {
  font-family: Helvetica, Arial,  sans-serif;
  position: relative;
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
  display: block;
  margin: 50px 320px;
}

.row1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 25%;
  
}

.row2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  
  
}

.bottom {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 35px;
  font-weight: bold;
}
</style>