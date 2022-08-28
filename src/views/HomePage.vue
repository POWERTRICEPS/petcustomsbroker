<template>
<div v-show="!mobile">
  <HomePageDesktop></HomePageDesktop>
</div>
<div v-show="mobile">
  <HomePageMobile></HomePageMobile>
</div>
</template>

<script>
import HomePageDesktop from "./HomePageDesktop.vue"
import HomePageMobile from "./HomePageMobile.vue"
export default {

  name: "HomePage",
  components: {
    HomePageDesktop,
    HomePageMobile
  },
  data() {
        return {
            mobile: false,
            windowWidth: null
        }
  },
  created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
  },
  methods: {
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
}
</script>