<template>
  <svg :width="width" :height="height" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" width="24" height="24" rx="12" fill="#5F5F61"/>
    <path
      d="M13.4941 12.2189H15.7275L16.0781 9.93638H13.4937V8.68885C13.4937 7.74064 13.8016 6.89982 14.6832 6.89982H16.0999V4.90789C15.851 4.87408 15.3246 4.80005 14.3299 4.80005C12.2528 4.80005 11.0351 5.90363 11.0351 8.41787V9.93638H8.8999V12.2189H11.0351V18.4927C11.458 18.5566 11.8863 18.6 12.3259 18.6C12.7234 18.6 13.1113 18.5635 13.4941 18.5114V12.2189Z"
      fill="#FFFBF9"/>
  </svg>
</template>

<script>
export default {
  name: "facebook",
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    }
  },
  data: () => ({

  }),
}
</script>

<style scoped>

</style>
