'use strict'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import feather from 'vue-icon'


export const bus = new Vue();

Vue.use(feather, 'v-icon')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')