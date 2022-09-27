<template>

  <v-app-bar
    class="flex-grow-0 align-center justify-sm-center align-content-center header"
    :style="{background: $vuetify.theme.themes[theme].background1}">
    <v-container fluid>
      <v-row class="header__top align-center justify-center mb-2 flex-nowrap">
        <v-btn plain icon small class="d-sm-none px-2 mr-4">
          <v-icon size="50" fab color="primary">mdi-menu</v-icon>
        </v-btn>
        <nuxt-link exact no-prefetch active-class="active" aria-current="page" to="/"
                   class="d-none d-sm-block mr-3">
          <IconLogo width="64" height="49"/>
        </nuxt-link>

        <v-spacer/>
        <SmallSearchForm/>
        <v-spacer/>

        <v-btn outlined color="primary" class="mr-5 header__btn d-none d-md-block">
          <nuxt-link to="/" class="text-decoration-none subtitle-1 text-capitalize">Вход</nuxt-link>
        </v-btn>
        <v-btn outlined color="primary" class="header__btn d-none d-md-block">
          <nuxt-link to="/" class="text-decoration-none subtitle-1 text-capitalize">Регистрация</nuxt-link>
        </v-btn>
      </v-row>
      <v-row class="header__filters filters align-center flex-nowrap mt-0">

        <v-col
          v-if="windowInnerWidth>493.01"
          class="filters__main align-center d-inline-flex pl-0" sm>

          <v-select
            v-model="housingType"
            :items="housingTypes"
            label="Тип жилья"
            multiple
            filled
            hide-details
            background-color="accent2"
            @click="updateList"
            @change="updateList"
            class="text-decoration-none filters__item filters__select"
            :menu-props="{ bottom: true, offsetY: true }"
            :append-icon="iconArrowDown"
          />
          <v-select
            v-if="windowInnerWidth>755.01"
            v-model="rentalType"
            :items="rentalTypes"
            label="Тип аренды"
            multiple
            filled
            hide-details
            background-color="accent2"
            @click="updateList"
            @change="updateList"
            class="text-decoration-none filters__item filters__select mx-4"
            :menu-props="{ bottom: true, offsetY: true }"
            :append-icon="iconArrowDown"
          />
          <v-menu
            v-if="windowInnerWidth>860.01"
            class="small-search-form__menu-prices mr-4"
            :nudge-bottom="57"
            transition="slide-y-transition"
            :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="priceRangeText"
                label="Цена" readonly v-bind="attrs" v-on="on" hide-details class="text-center filters__item"
                :append-icon="iconArrowDown" @click="priceHandler" filled background-color="accent2"
              />
            </template>
            <v-card>
              <v-range-slider
                v-model="priceRange" :max="maxPriceRange" :min="minPriceRange" step="5000"
                hide-details class="align-center pa-3"
              >
                <template v-slot:prepend>
                  <v-text-field
                    :value="priceRange[0] || 15000"
                    class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px"
                    @change="$set(priceRange, 0, $event)"
                  ></v-text-field>
                </template>
                <template v-slot:append>
                  <v-text-field
                    :value="priceRange[1] || 60000"
                    class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px"
                    @change="$set(priceRange, 1, $event)"
                  ></v-text-field>
                </template>
              </v-range-slider>
            </v-card>
          </v-menu>

        </v-col>

        <v-divider v-if="windowInnerWidth>1660.01" vertical class="mx-1"/>

        <v-col
          v-if="windowInnerWidth>1660.01"
          class="d-inline-flex filters__option align-center justify-space-between flex-nowrap">

          <v-btn filled background-color="accent2"
                 class="filters__item filters__btn"
                 :class="{ active: isActiveFreeCancel}"
                 @click="isActiveFreeCancel=!isActiveFreeCancel">
            Бесплатная отмена
          </v-btn>
          <v-btn filled background-color="accent2"
                 class="filters__item filters__btn mx-1"
                 :class="{ active: isActiveInstantConfirmation }"
                 @click="isActiveInstantConfirmation=!isActiveInstantConfirmation">
            Мгновенное подтверждение
          </v-btn>
          <v-btn filled background-color="accent2"
                 class="filters__item filters__btn"
                 :class="{ active: IsActiveSuperhost }"
                 @click="IsActiveSuperhost=!IsActiveSuperhost">
            Суперхозяин
          </v-btn>
          <v-btn filled background-color="accent2"
                 class="filters__item filters__btn ml-1"
                 :class="{ active: IsActiveHotDeal }"
                 @click="IsActiveHotDeal=!IsActiveHotDeal">
            Горящее предложение
          </v-btn>
        </v-col>

        <v-divider v-if="windowInnerWidth>493.01" vertical/>

        <v-col>
          <v-flex class="filters__all-wrapper">
            <v-btn filled background-color="accent2" x-small
                   class="filters__item filters__all filters__btn d-inline-flex"
                   :class="{ active: isActiveFreeCancel }"
                   @click="openAllFilters">
              Все фильтры
              <v-icon> mdi-dots-vertical</v-icon>

            </v-btn>
            <v-badge
              offset-x="-3" offset-y="-10"
              class="text--$accentColor-1"
              content="3"/>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import IconLogo from "~/components/icons/IconLogo";
import SmallSearchForm from "@/components/SmallSearchForm";
import {mdiChevronDown} from '@mdi/js';
import {mdiDotsVertical} from '@mdi/js';

export default {
  name: "Navbar",
  components: {IconLogo, SmallSearchForm, mdiChevronDown, mdiDotsVertical},
  data: () => ({
    housingType: [],
    housingTypes: ["Однокомнатная квартира", "Двухкомнатная квартира", "Трехкомнатная квартира"],
    rentalType: [],
    rentalTypes: ["На день", "На месяц", "На год"],
    iconArrowDown: mdiChevronDown,
    // priceRange: [15000, 60000],
    priceRange: [],
    minPriceRange: 10000,
    maxPriceRange: 100000,
    isActiveFreeCancel: true,
    isActiveInstantConfirmation: true,
    IsActiveSuperhost: false,
    IsActiveHotDeal: false,
    iconDotsVertical: mdiDotsVertical,
    windowInnerWidth: 1700,
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
    priceRangeText() {
      return this.priceRange.length ? this.priceRange.join(" - ") : "";
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });

    this.windowInnerWidth = window.innerWidth;
  },

  methods: {
    //Обновление списка вариантов размещения
    updateList() {
    },
    priceHandler() {
      if (!this.priceRange.length) {
        this.priceRange.push("15000");
        this.priceRange.push("60000");
      }
    },
    onResize() {
      this.windowInnerWidth = window.innerWidth;
      console.log("12312")
    },
    openAllFilters() {
    }
  }
}
</script>

<style scoped>

</style>
