<template>
  <v-container
    fluid
    pa-0
    :style="{background: $vuetify.theme.themes[theme].background2}"
    class="search-container mt-3">
    <v-row class="search-container__row overflow-hidden flex-nowrap">
      <!-- Карточки с вариантами аренды -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="5"
        xl="5"
        class="pt-0 pr-5 search-container__col">
        <v-list class="pa-0 search-container__list" color="#D7D7D8">
          <v-list-item v-for="i in 9" :key="i" class="pr-0 mb-5 search-container__list-item">
            <itemApartment></itemApartment>
          </v-list-item>
        </v-list>
        <v-pagination
          v-model="page"
          :length="3"
          circle
          class="pb-5 mt-5 d-none d-sm-flex"
        ></v-pagination>
        <v-btn rounded filled @click="showMore" color="primary"
          class="search-container__btn d-block d-sm-none my-11 font-weight-regular">+ Показать ещё</v-btn>
      </v-col>

      <!-- Карта -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="7"
        xl="7"
        class="flex-column align-end pa-0 search-container__col__map d-none d-sm-flex">
        <Map></Map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemApartment from "@/components/ItemApartment";
import Map from "@/components/Map";

export default {
  name: 'IndexPage',
  components: {ItemApartment, Map},
  data: () => ({
    page: 1,
  }),
  //! Переопределение основного фона для темы
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
    isFullPage() {
      return (
        this.$route.matched.map((r) => {
          return r.components.default.options.isFullPage
        })[0] || false
      )
    },
  },
  methods:{
    showMore(){}
  }
}
</script>

<style scoped></style>
