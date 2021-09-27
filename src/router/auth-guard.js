import store from '@/store'

export default (to, from, next) => {
  const publicPages = ['Register', 'activation-mail-sent', 'activation-mail']
  const authenticated = store.getters['auth/authenticated']
  const isPublicPage = publicPages.includes(to.name)

  const profiles = store.getters['user/getProfiles']
  if (!authenticated && !isPublicPage) {
    return next({ name: 'Register' })
  }
  if (authenticated && Object.keys(profiles).length == 0 && to.name != 'MyProfiles') {
    return next({ name: 'MyProfiles' })
  }

  const userProfiles = store.getters['user/getProfilesList']
  const authorizedProfiles = to.meta.authorizedProfiles
  if (authorizedProfiles && userProfiles && !authorizedProfiles.some(p => userProfiles.includes(p))) {
    return next({ name: 'Home' })
  }
  next()
}
