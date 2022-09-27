import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
});

// import { wordCase } from '@/plugins/helpers'
// Vue.filter('word_case', (value, words = [], withNum = true) => {
//   const resNum = withNum ? `${value} ` : ''
//   return `${resNum}${wordCase(value, words)}`
// })
