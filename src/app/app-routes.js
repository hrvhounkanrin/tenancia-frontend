import Vue from 'vue'
import Router from 'vue-router'
import { usersRoutes } from './users'
import { AppPageNotFound } from './shared/components'

Vue.use(Router)

const appRoutes = [
  {
    path: '*',
    name: 'page-not-found',
    component: AppPageNotFound
  },
  {
    path: '/',
    name: 'home',
    component: AppPageNotFound
  }
]

const routes = [...appRoutes, ...usersRoutes];

export default new Router({
  mode: 'history',
  routes
})
