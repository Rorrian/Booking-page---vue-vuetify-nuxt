<template>
  <svg :width="width" :height="height" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 6.5C4.92 8.25 6.84 10 11 10C19 10 19 3 27 3C31.16 3 33.08 4.75 35 6.5C36.92 8.25 38.84 10 43 10C51 10 51 3 59 3C63.16 3 65.08 4.75 67 6.5M3 48.5C4.92 50.25 6.84 52 11 52C19 52 19 45 27 45C31.16 45 33.08 46.75 35 48.5C36.92 50.25 38.84 52 43 52C51 52 51 45 59 45C63.16 45 65.08 46.75 67 48.5M3 27.5C4.92 29.25 6.84 31 11 31C19 31 19 24 27 24C31.16 24 33.08 25.75 35 27.5C36.92 29.25 38.84 31 43 31C51 31 51 24 59 24C63.16 24 65.08 25.75 67 27.5"
      stroke="#00ACA2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: "logos",
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    }
  }
}
</script>

<style scoped>

</style>
