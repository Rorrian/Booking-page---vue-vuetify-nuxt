<template>
  <!-- Переопределение основного фона для темы -->
  <v-app :style="{background: $vuetify.theme.themes[theme].background1}">
    <Navbar />
    <v-main color="#D7D7D8">
        <Nuxt />
    </v-main>

    <Footer />
  </v-app>

</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default {
  name: 'DefaultLayout',
  components: { Navbar, Footer },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    }
  }
}
</script>
