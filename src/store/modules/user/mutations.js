import {
  PROFILES, USERMENUS
} from './mutation-types'

function computeUserMenus(initalMenu, profileList){
  const userMenus = []
  if (profileList.length>0) {
    initalMenu.forEach((item) => {
      if (item.authorizedProfiles && item.authorizedProfiles.some(p => profileList.includes(p))) {
        userMenus.push(item)
      }
    })
  }
  return userMenus
}

export default {
  [PROFILES] (state, data) {
    const profileList = []
    if (data.lessor) {
      localStorage.setItem('lessor', JSON.stringify(data.lessor))
      profileList.push('LESSOR')
    }

    if (data.tenant) {
      localStorage.setItem('tenant', JSON.stringify(data.tenant))
      profileList.push('TENANT')
    }
    if (data.real_estate) {
      localStorage.setItem('realEstate', JSON.stringify(data.realEstate))
      profileList.push('REALESTATE')
    }
    state.profileList = profileList
    state.profiles = data

    state.userMenus = computeUserMenus(state.initalMenu, profileList)
    localStorage.removeItem('userMenus')
    localStorage.removeItem('profileList')
    localStorage.removeItem('profiles')
    localStorage.setItem('profileList', JSON.stringify(profileList))
    localStorage.setItem('profiles', JSON.stringify(data))
    localStorage.setItem('userMenus', JSON.stringify(state.userMenus))
  },
  [USERMENUS](state, menus){
    localStorage.setItem('usermenus', JSON.stringify(menus))
    state.userMenus = menus
  }
}
