<template>
  <v-card class="flex-grow-1 apartment-item" flat>
    <v-container>
      <v-row class="flex-nowrap">
        <v-col style="max-width: 38.4%" class="pa-0 apartment-item__img">
          <v-img
            width="100%"
            height="100%"
            lazy-src="/search-page/apartments/1.png"
            src="/search-page/apartments/1.png"
          ></v-img>
        </v-col>

        <v-col class="apartment-item__description d-flex flex-column">
          <v-card-subtitle class="d-flex pa-0 justify-space-between align-end text-caption">
            {{ apartmentObject.subtitle }}
            <v-btn
              plain
              icon
              :class="{active: isFavoriteApartment}"
              @click="isFavoriteApartment=!isFavoriteApartment">
              <v-icon size="16">
                mdi-heart-outline
              </v-icon>
            </v-btn>
          </v-card-subtitle>
          <v-card-title
            class="pa-0 font-weight-medium text-body-2 text-lg-body-1 text-break">
            {{ apartmentObject.title }}
          </v-card-title>

          <v-card-text class="px-0 pb-5 apartment-item__info grow">
            <v-list class="params__list pa-0 d-flex flex-wrap">
              <v-list-item
                v-for="item in apartmentObject.params"
                :key="item.id.toString()"
                class="pa-0 mr-2 params__item"
              >
                {{ item.value }} {{ word_case(item.value, item.arrTitles) }}
              </v-list-item>
            </v-list>
            <v-list class="options__list pa-0 mt-1 d-flex flex-wrap">
              <v-list-item
                v-for="item in apartmentObject.options"
                :key="item.id.toString()"
                class="pa-0 mr-2 mb-1 options__item">
                <v-chip
                  class="options__chip"
                  outlined
                  small>
                  <v-icon size="16">{{ item.icon }}</v-icon> {{ item.title }}
                </v-chip>
              </v-list-item>
            </v-list>
            <v-list class="mt-1 pa-0 details__list flex-grow-1 d-none d-lg-block">
              <v-list-item
                v-for="item in apartmentObject.details"
                :key="item"
                class="pa-0 mr-2 details__item primary--text">
                <v-icon size="16" color="primary">mdi-circle-small</v-icon> {{ item }}
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-spacer></v-spacer>
          <v-card-actions class="pa-0 d-flex apartment-item__reviews-price">
            <v-flex class="caption d-inline-flex align-end pb-0">
              <v-flex class="d-inline-flex align-end flex-grow-0">
                <v-icon size="23" color="warning" class="mr-2">mdi-star</v-icon>
                <span class="mr-2">{{apartmentObject.rating}}</span>
              </v-flex>
              <span class="textColor1--text d-md-inline-flex">
                ({{apartmentObject.reviews.count}}<span class="d-xs-block d-sm-none d-md-none d-lg-block text-pre"> отзывов</span>)
              </span>
            </v-flex>

            <v-flex class="pb-0 font-weight-medium text-body-2 text-lg-body-1 text-right">
              от {{apartmentObject.price}} ₽ / ночь
            </v-flex>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {wordCase} from '@/plugins/helpers'

export default {
  name: "ItemApartment",
  components: {wordCase},
  props: {
    //Объекты подгружаются с сервера
    apartmentObject: {
      type: Object,
      default: () => ({
        id: 1,
        title: "Уютная однокомнатная квартира с видом на море",
        subtitle: "Квартира",
        price: 4500,
        //Другие параметры в карточке
        params: [
          {
            id: 1,
            name: "max_guests",
            title: "Максимальное количество гостей",
            arrTitles: ['гость', 'гостя', 'гостей'],
            value: 4
          },
          {
            id: 2,
            name: "max_guests",
            title: "Количество спальных мест",
            arrTitles: ['кровать', 'кровати', 'кроватей'],
            value: 2
          },
          {
            id: 3,
            name: "max_guests",
            title: "Количество комнат",
            arrTitles: ['спальня', 'спальни', 'спален'],
            value: 1
          },
          {id: 4, name: "max_guests", title: "Площадь", arrTitles: ["м2", "м2", "м2"], value: 40},
        ],
        //Опциональные предметы в номере
        options: [
          {id: 1, name: "wifi", title: "Wi-fi", value: true, icon: "mdi-wifi"},
          {id: 2, name: "petsAllowed", title: "Pets friendly", value: true, icon: "mdi-waves"},
          {id: 3, name: "freeCancel", title: "Бесплатная отмена", value: true, icon: "mdi-square-wave"},
        ],
        details:[
          "Несколько вариантов питания",
          "Горящее предложение",
          "Предоплата"
        ],
        //Рейтинг
        rating: 4.75,
        reviews: {
          count: 8,
          list: []
        }
      })
    },
  },
  data:()=>({
    isFavoriteApartment: false,
  }),
  methods: {
    word_case(num, words) {
      const cases = [2, 0, 1, 1, 1, 2]
      return words[
        num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
        ]
    }
  }
}
</script>

<style scoped>
.active{
  color: red !important;
}
</style>
