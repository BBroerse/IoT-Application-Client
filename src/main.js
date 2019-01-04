import Vue from 'vue'
import App from './App.vue'

import './plugins/vuetify.js'
import './plugins/apexcharts.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
