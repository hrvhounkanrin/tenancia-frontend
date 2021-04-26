import Vue from 'vue'
import Router from 'vue-router'
import authGuard from './auth-guard'
import Home from '../views/Home.vue'
import Register from '@/views/register'
import Profile from '@/views/profiles/my-profiles.vue'
import Properties from '@/views/properties/Properties.vue'
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
      meta: { auth: true }

    },

    {
      path: '/register',
      name: 'Register',
      meta: {layout: 'examples'},
      component: Register
    },
    {
      path: '/activation-mail-sent',
      name: 'activation-mail-sent',
      meta: {layout: 'examples'},
      component: () => import('@/views/register/activation-mail-sent.vue')
    },
    {
      path: '/verify-email',
      name: 'activation-mail',
      meta: {layout: 'examples'},
      component: () => import('@/views/register/activation-mail.vue')
    },
    {
      path: '/my-profiles',
      name: 'MyProfiles',
      component: Profile
    },
    {
      path: '/my-properties',
      name: 'Myproperties',
      component: Properties
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
