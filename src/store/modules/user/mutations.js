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
    console.log('PROFILES MUTATION: ', data)
    const profileList = []
    if (data.lessor) {
      localStorage.setItem('lessor', JSON.stringify(data.lessor))
      profileList.push('LESSOR')
    }

    if (data.tenant) {
      localStorage.setItem('tenant', JSON.stringify(data.tenant))
      profileList.push('TENANT')
    }
    if (data.realEstate) {
      localStorage.setItem('realEstate', JSON.stringify(data.realEstate))
      profileList.push('REALESTATE')
    }
    localStorage.setItem('profiles', JSON.stringify(data))
    state.profileList = profileList
    state.profiles = data
    /*
    const userMenus = []
    if (profileList.length>0) {
      state.initalMenu.forEach((item) => {
        if (item.authorizedProfiles && item.authorizedProfiles.some(p => profileList.includes(p))) {
          userMenus.push(item)
        }
      })
    }*/
    state.userMenus = computeUserMenus(state.initalMenu, profileList)
  },
  [USERMENUS](state, menus){
    localStorage.setItem('usermenus', JSON.stringify(menus))
    state.userMenus = menus
  }
}
