import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/listing/:id',
    name: 'listing',
    component: () => import('../views/Listing.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
