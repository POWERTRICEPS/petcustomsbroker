<template>
  <NavBar :transparent=true />
  <div>
    <img src="../assets/home.jpg">
    <h1 class="middle">NATIONWIDE CUSTOMS BROKER FOR CATS AND DOGS</h1>
    <div class="row1">
      <router-link class="link" :to="{name: 'Inquiry'}">
        <button style="background-color:red" class="btn">Send Inquiry</button>
      </router-link>
      <router-link class="link" :to="{name: 'Clearance'}">
        <button style="background-color:red" class="btn">Get Started</button>
      </router-link>
    </div>
    <h2 class="bottom">Call 650-866-3680</h2>
  </div>

  <p class="middle2">Customs clearance for dog, cat, ornamental fish, and other pet import shipments at San Francisco, Los Angeles, Seattle, Chicago, Boston, New York, Miami, Dallas, Houston, and other major airports</p>
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
  name: "HomePageDesktop",
  components: {
    HomeCard,
    NavBar,
    FooterBar
  },
  mounted () {
    window.scrollTo(0, 0)
  },
};
</script>

<style lang="scss" scoped>
img {
  opacity: 0.8;
  width: 100%;
  height: 800px;
  filter: brightness(60%);
}

.middle {
  font-weight: bold;
  font-family: Helvetica, Arial,  sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 50px;
  width: 75%;
  text-align: center;
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