import store from '../store'

/*
 * If the user is not authenticated and visits
 * a page that requires authentication, redirect to the login page
 */
export default (to, from, next) => {
  if (!store.getters['auth/authenticated'] && to.matched.some(route => route.meta.auth)) { // If it's wrong auth and route asks auth
    return next({ name: 'Session', query: { redirect: to.fullPath } }) // not access current route et redirect to Session route
  } else if ((store.getters['auth/authenticated'] && to.matched.some(route => route.name === 'Session'))) {
    return next({ name: 'Home' })
  }
  // is auth and authorize current route
  next()
}
