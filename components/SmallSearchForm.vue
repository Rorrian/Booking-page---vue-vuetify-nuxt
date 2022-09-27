<template>
  <form ref="smallSearchForm" class="small-search-form" @submit.prevent="checkFormValid">
    <v-row class="align-center justify-center small-search-form__row flex-nowrap">

      <v-btn type="submit" small icon plain v-model="searchParams" @click="startSearch"
             class="small-search-form__item small-search-form__btn rounded-0 pr-2 ml-2 ml-lg-0 mb-lg-1 align-self-end">
        <IconLens width="24" height="24"/>
      </v-btn>

      <v-autocomplete
        auto-select-first
        flat
        hide-details
        dense
        solo
        background-color="transparent"
        label="Ростов-на-Дону"
        v-model="cityVariant"
        :items="cityVariants"
        :rules="cityVariantsRules"
        class="small-search-form__item small-search-form__city-select text-body-2 text-md-body-1"
        :menu-props="{transition: 'slide-y-transition'}"
      />

      <v-divider vertical class="mx-1 mx-lg-2"/>

      <v-menu
        class="small-search-form__item small-search-form__menu-date"
        :close-on-content-click="false"
        :nudge-bottom="35"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="datesText"
            readonly
            v-bind="attrs"
            v-on="on"
            hide-details
            class="small-search-form__menu-date-input text-center text-decoration-none text-body-2 text-md-body-1"
          />
        </template>
        <v-date-picker v-model="dates" no-title range class="small-search-form__menu-date-picker"/>
      </v-menu>

      <v-divider vertical class="mx-1 mx-lg-2"/>

      <v-menu
        class="small-search-form__item small-search-form__menu-details"
        :close-on-content-click="false"
        :nudge-bottom="10"
        transition="slide-y-transition"
        offset-y
        min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-input v-bind="attrs" v-on="on" hide-details
                   class="small-search-form__menu-details-input px-2 text-body-2 text-md-body-1">
            <span> Гостей: {{ countPerson }}, питомцев: {{ countPets }} </span>
          </v-input>
        </template>
        <v-card class="menu-details">

          <v-col class="menu-details__group align-center justify-center">
            <v-row class="align-center">
              <v-col class="menu-details__label text-body-2 text-md-body-1">Количество персон:</v-col>
              <v-col class="pa-0">
                <v-row class="align-center justify-center">
                  <v-btn icon plain small outlined @click="countPerson--" class="menu-details__btn">-</v-btn>
                  <!-- Атрибут "hide-spin-buttons" - скрывает кнопки для переключения кол-ва -->
                  <v-text-field v-model="countPerson" type="number" hide-spin-buttons :rules="countPersonRules"
                                class="menu-details__counter text-decoration-none text-body-2 text-md-body-1"/>
                  <v-btn icon plain small outlined @click="countPerson++" class="menu-details__btn">+</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="menu-details__group align-center justify-center">
            <v-row class="align-center">
              <v-col class="menu-details__label text-body-2 text-md-body-1">Количество питомцев:</v-col>
              <v-col class="pa-0">
                <v-row class="align-center justify-center">
                  <v-btn icon plain small outlined @click="countPets--" class="menu-details__btn">-</v-btn>
                  <v-text-field v-model="countPets" type="number" hide-spin-buttons :rules="countPetsRules"
                                class="menu-details__counter text-body-2 text-md-body-1"/>
                  <v-btn icon plain small outlined @click="countPets++" class="menu-details__btn">+</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-menu>

    </v-row>
  </form>
</template>

<script>
import IconLens from "@/components/icons/IconLens";
//Библиотека для форматирования дат - https://momentjs.com/
import moment from "moment";

export default {
  name: "smallSearchForm",
  components: {IconLens},
  data: () => ({
    cityVariant: "Ростов-на-Дону",
    cityVariants: ["Ростов-на-Дону", "Москва", "Санкт-Петербург", "Казань"],
    cityVariantsRules: [(v) => !!v || "Need select city!"],
    dateNow: Date.now(),
    dates: ["2022-08-01", "2022-08-03"],
    modifiedDates: [],
    countPerson: 2,
    countPets: 0,
    countPersonRules: [v => v>0 || "Error!"],
    countPetsRules: [v => v>-1 || "Error!"],
  }),
  methods: {
    startSearch() {
    },
    checkFormValid() {
    },
  },
  computed: {
    searchParams() {
    },
    //Вывод дат в требуемом виде
    datesText() {
      this.modifiedDates.length = 0;
      this.dates.forEach(date => {
        const newDate = moment(date).format('DD.MM');
        this.modifiedDates.push(newDate);
      });
      return this.modifiedDates.join(" - ");
    },
    detailInfo() {
      return [this.countPerson, this.countPets];
    }
  }
}
</script>

<style scoped>

</style>
