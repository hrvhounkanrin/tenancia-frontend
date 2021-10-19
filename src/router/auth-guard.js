import store from '@/store'
import { LS_ROUTE } from '@/constants'

export default (to, from, next) => {
  const publicPages = ['Register', 'activation-mail-sent', 'activation-mail']
  const authenticated = store.getters['auth/authenticated']
  const isPublicPage = publicPages.includes(to.name)

  const profileLIst = store.getters['user/getProfilesList']
  console.log('profileLIst: ', profileLIst)
  // If not authenticated and not public page
  if (!authenticated && !isPublicPage) {
    return next({ name: 'Register' })
  }
  console.log('to.name: ', to.name)
  
  if (authenticated && profileLIst.length == 0 && to.name != 'MyProfiles') {
    return next({ name: 'MyProfiles' })
  }

  const authorizedProfiles = to.meta.authorizedProfiles
  const hasProfile = authenticated && authorizedProfiles && profileLIst.length > 0
  if (hasProfile && !authorizedProfiles.some(p => profileLIst.includes(p))) {
    return next({ name: 'Home' })
  }
  next()
}
