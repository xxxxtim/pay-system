import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入頁面component
import Home from '../views/Home.vue'
import EditCredit from '../views/EditCredit.vue'
import EditAtm from '../views/EditAtm.vue'
import EditMarket from '../views/EditMarket.vue'
import Finish from '../views/Finish.vue'
import PayContext from '../views/PayContext.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2',
    name: 'CreditCard',
    component: EditCredit

  },
  {
    path: '/3',
    name: 'Atm',
    component: EditAtm
  },
  {
    path: '/4',
    name: 'Market',
    component: EditMarket
  },
  {
    path: '/5',
    name: 'Finish',
    component: Finish
  },
  {
    path: '/6',
    name: 'Context',
    component: PayContext
  },
]

const router = new VueRouter({
  routes
})

export default router
