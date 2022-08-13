<template>
  <img src="../assets/kitten.jpg">
  <h1>Nationwide Customs Broker For Dogs and Cats</h1>
  <form>
    <button formaction="mailto:oriox@att.net" style="background-color:red" class="btn">Send Inquiry</button>
  </form>
  <router-link class="link" :to="{name: 'Clearance'}">
    <button style="background-color:red" class="btn">Get Started</button>
  </router-link>

  <h2>Call 650-866-3680</h2>
  <p>Customs clearance for dog cat ornamental fish and other pet import shipments at San Francisco Los Angeles Seattle Chicago Boston New York Miami Dallas Houston and other major airports</p>
  <div>
  <HomeCard
    img= "logo.png"
    text= "Rapid and Reliable"
  />
  <HomeCard
    img= "logo.png"
    text= "Competitive Price"
  />
  <HomeCard
    img= "logo.png"
    text= "24/7 Support"
  />
  <HomeCard
    img= "logo.png"
    text= "Accept Zelle/Paypal/Venmo"
  />

  </div>

</template>



<script>
import HomeCard from '../components/HomeCard.vue' 
// @ is an alias to /src
export default {
  name: "HomePage",
  components: {
    HomeCard
  },
};
</script>

<style lang="scss" scoped>
img {
  opacity: 0.8;
  width: 100%;
  height: 700px;
}

.hero {
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>