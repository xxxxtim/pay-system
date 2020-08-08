import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入頁面component
import Home from '../views/Home.vue'
import EditCredit from '../views/EditCredit.vue'
import EditAtm from '../views/EditAtm.vue'


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
]

const router = new VueRouter({
  routes
})

export default router
