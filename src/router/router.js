import Vue from 'vue'
import Router from 'vue-router'
import authGuard from './auth-guard'
import Home from '../views/Home.vue'
import Register from '@/views/register'
import Profile from '@/views/profiles/my-profiles.vue'
import UserPassForm from '@/views/profiles/user-profil/user-pass-form.vue'
import Properties from '@/views/properties/Properties.vue'
import AppartementForm from '@/views/properties/AppartmentForm.vue'
import ContractList from '@/views/contrats/contract-list.vue'
import ContratForm from '@/views/contrats/contrat-form.vue'
import TenantContrats from '@/views/contrats/tenant-contrats.vue'
import LessorQuittances from '@/views/quittances/lessor-quittances.vue'
import TenantQuittances from '@/views/quittances/tenant-quittances.vue'
import { LS_ROUTE } from '@/constants'
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
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'TENANT', 'REALESTATE'] }

    },
    {
      path: '/register',
      name: 'Register',
      meta: { layout: 'examples' },
      component: Register
    },
    {
      path: '/activation-mail-sent',
      name: 'activation-mail-sent',
      meta: { layout: 'examples' },
      component: () => import('@/views/register/activation-mail-sent.vue')
    },
    {
      path: '/verify-email',
      name: 'activation-mail',
      meta: { layout: 'examples' },
      component: () => import('@/views/register/activation-mail.vue')
    },
    {
      path: '/my-profiles',
      name: 'MyProfiles',
      component: Profile,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'TENANT', 'REALESTATE'] }
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: UserPassForm,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'TENANT', 'REALESTATE'] }
    },
    {
      path: '/my-properties',
      name: 'Myproperties',
      component: Properties,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'REALESTATE'] }
    },
    {
      path: '/mandats',
      name: 'MyMandate',
      component: Properties,
      meta: { auth: true, authorizedProfiles: ['REALESTATE'] }
    },
    {
      path: '/my-portfolio',
      name: 'MyContracts',
      component: ContractList,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'REALESTATE'] }
    },
    {
      path: '/edit-appartment',
      name: 'EditAppartment',
      component: AppartementForm,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'REALESTATE'] }
    },
    {
      path: '/edit-contrat',
      name: 'EditContrat',
      props: true,
      component: ContratForm,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'REALESTATE'] }
    },
    {
      path: '/my-contracts',
      name: 'TenantContrats',
      props: true,
      component: TenantContrats,
      meta: { auth: true, authorizedProfiles: ['TENANT'] }
    },
    {
      path: '/tenant-quittances',
      name: 'TenantQuittances',
      props: true,
      component: TenantQuittances,
      meta: { auth: true, authorizedProfiles: ['TENANT', 'REALESTATE'] }
    },
    {
      path: '/lessor-quittances',
      name: 'LessorQuittances',
      props: true,
      component: LessorQuittances,
      meta: { auth: true, authorizedProfiles: ['LESSOR', 'REALESTATE'] }
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

router.afterEach(
  (to, from) => {
    if(to.name !== 'Register' && to.name !== 'activation-mail-sent' && to.name !== 'activation-mail')
      sessionStorage.setItem(LS_ROUTE, to.name)
  }
)
/**
 * Do not throw an exception if push is rejected by redirection from navigation guard
 */
const originalPush = router.push
router.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  // if Redirected when going from <path> to another <path> error
  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err, Router.NavigationFailureType.redirected)) {
      return Promise.resolve(false)
    }
    // Otherwise throw error
    return Promise.reject(err)
  })
}

export default router
