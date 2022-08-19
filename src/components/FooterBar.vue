<template>
    <div class="footer-container">
        <div class="footer">
            <h1>Oriox Customs Broker Inc, 139 Mitchell Ave Ste 223, South San Francisco, CA 94080. Tel 650-866-3680 Fax 650-866-3679 </h1>
            <h1>&copy; 2022 All Rights Reserved</h1>
            <img class="footer-logo" src="../assets/logo.jpg">
        </div>
    </div>
</template>

<script>
    export default {
      name: 'FooterBar',
      props: {
        text: String,
        img: String
      },
    }
</script>

<style lang="scss" scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
}

.footer-container {
    background-color: #212329;
    padding-bottom: 4rem;
}

.footer {
    width: 80%;
    height: 40vh;
    background-color: #212329;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    flex-direction: column;
    text-align:center;
    font-size: 12px;
    line-height: 2;
}

.footer-logo {
    margin-top:75px;
    position: relative;
    left: 47%;
    
}
</style>