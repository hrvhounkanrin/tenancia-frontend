import Vue from 'vue'
import Router from 'vue-router'
import authGuard from './auth-guard'
import Home from '../views/Home.vue'
import Register from '@/views/register'
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

    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/activation-mail-sent',
      name: 'activation-mail-sent',
      component: () => import( '@/views/register/activation-mail-sent.vue')
    },
    {
      path: '/verify-email',
      name: 'activation-mail',
      component: () => import( '@/views/register/activation-mail.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    { path: '*', redirect: '/register' }
  ]
})

router.beforeEach(
  authGuard
)

// router.afterEach(() => {
//   setTimeout(() => NProgress.done(), 500);
// });

export default router
