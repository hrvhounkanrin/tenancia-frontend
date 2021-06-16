import store from '@/store'

export default (to, from, next) => {
  let publicPages = ['Register', 'activation-mail-sent', 'activation-mail']
  let authenticated = store.getters['auth/authenticated']
  let isPublicPage = publicPages.includes(to.name)

  const profiles = store.getters['user/getProfiles']
  if (!authenticated && !isPublicPage) {
    return next({ name: 'Register' }) // not access current route et redirect to Register route
  }
  if(authenticated && Object.keys(profiles).length==0 && to.name !='MyProfiles'){
    return next({ name: 'MyProfiles' }) 
  }
  next()
}
