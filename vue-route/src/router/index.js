import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "fotos" */ '../views/Fotos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
