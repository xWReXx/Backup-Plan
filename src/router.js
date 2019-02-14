import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile'
import Dashboard from './views/Dashboard'
import MakePlans from './views/MakePlans'
import Donate from './views/Donate.vue'
import Donate1 from './views/Donate1.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/donate1',
      name: 'Donate1',
      component: Donate1
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/makeplans',
      name: 'MakePlans',
      component: MakePlans
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

export default router