import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'
import 'swiper/css/swiper.css'

import axios from 'axios'
Vue.prototype.axios = axios;



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
