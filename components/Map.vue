<template>
  <div style="position:relative;overflow:hidden; width: 100%;">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae2d545376cd9761c77d790aaf1b347e4383a40d19a01ca3e4745e07a53487b3a&amp;source=constructor"
            width="100%" height="2200" frameborder="0"></iframe>
  </div>

</template>

<script>
import itemApartment from "@/components/ItemApartment";

export default {
  name: 'Map',
  components: { itemApartment }
}
</script>

<style scoped></style>
