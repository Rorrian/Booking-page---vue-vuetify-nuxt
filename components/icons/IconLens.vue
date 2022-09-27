<template>
  <svg :width="width" :height="height" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.3333 12.6667C13.2789 12.6667 15.6667 10.2789 15.6667 7.33333C15.6667 4.38781 13.2789 2 10.3333 2C7.38781 2 5 4.38781 5 7.33333C5 10.2789 7.38781 12.6667 10.3333 12.6667Z" stroke="#00ACA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.0001 14.0001L14.1001 11.1001" stroke="#00ACA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
svg{
  margin-bottom: -2px;
}
</style>
