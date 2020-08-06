import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// 要引入的fontawsome 樣式
import { faCreditCard, faStore, faGlobe, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
// 要引入的fontawsome 樣式
library.add(faCreditCard, faStore, faCcPaypal, faGlobe, faMoneyBillWave);
Vue.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
