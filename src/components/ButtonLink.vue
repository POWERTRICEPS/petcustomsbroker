<template>
    <button @click="onClick()" style="background-color:red" class="btn">
      {{ text }}
    </button>
</template>

<script>
    export default {
      name: 'ButtonLink',
      props: {
        text: String,
      },
      methods: {
        onClick() {
          this.$emit('btn-click')
        },
      },
    }
</script>