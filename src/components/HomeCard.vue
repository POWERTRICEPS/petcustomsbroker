<template>
    <div class="card">
      <img :src="require(`@/assets/${img}`)">
      <p class="caption">{{ text }}</p>
    </div>
</template>

<script>
    export default {
      name: 'HomeCard',
      props: {
        text: String,
        img: String
      },
    }
</script>

<style lang="scss">
.card {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 120px;
    margin: 40px 35px;
}
img {
    width: 100px;
    height: 100px;
    background-color: grey;
}
.caption {
    margin: 10px 0px;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
}
</style>