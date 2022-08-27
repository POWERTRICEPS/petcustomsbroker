<template>
<div>
  <NavBar :transparent=false />
 
    <img src="../assets/home.jpg">
    <div class="pic-text">
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

</div>
</template>



<script>
import HomeCard from '../components/HomeCard.vue'
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
// @ is an alias to /src
export default {
  name: "HomePageMobile",
  components: {
    HomeCard,
    NavBar,
    FooterBar
  },
  mounted() {
    window.scrollTo(0, 0)
  },
};
</script>

<style lang="scss" scoped>
img {
  opacity: 0.8;
  width: 100%;
  height: 600px;
  filter: brightness(60%);
  position: absolute;
}

.pic-text {
    width: 100%;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-top: 200px;
}

.middle {
  font-weight: bold;
  font-family: Helvetica, Arial,  sans-serif;
  position: absolute;
  color: white;
  font-size: 30px;
  width: 75%;
  text-align: center;
  margin-bottom: 20px;
  max-height:20px;
}

.middle2 {
  font-family: Helvetica, Arial,  sans-serif;
  position: relative;
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin: 300px 120px 100px 120px;
}

.row1 {
    margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  
}

.row2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  
}

.bottom {
    margin-top: 220px;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  color: white;
  font-size: 25px;
  font-weight: bold;
}
</style>