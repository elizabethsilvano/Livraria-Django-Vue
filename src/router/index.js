import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Full.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },

    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank.vue'),
    meta: {
      auth:false,
    },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      }

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if(!store.state.auth.loggedIn) {
      next({
        name:'Login'
      })
    }else {
      next()
    }
  }else {
    next()
  }
})

export default router
