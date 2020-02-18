import Vue from 'vue'
import App from './App.vue'
import VueGeolocationApi from 'vue-geolocation-api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(VueGeolocationApi)
