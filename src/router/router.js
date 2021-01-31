import Vue from 'vue'
import Router from 'vue-router'
import authGuard from './auth-guard'
import Home from '../views/Home.vue'
import Session from '@/views/sessions'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { auth: true },
      redirect: '/session'
    },

    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    { path: '*', redirect: '/session' }
  ]
})

router.beforeEach(
  authGuard
)

// router.afterEach(() => {
//   setTimeout(() => NProgress.done(), 500);
// });

export default router
