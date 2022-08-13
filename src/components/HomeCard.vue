<template>
    <div>
        <img :src="require(`@/assets/${img}`)">
    </div>
    <p>{{ text }}</p>
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