import {
  PROFILES
} from './mutation-types'

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
    localStorage.setItem('profilesList', JSON.stringify(profileList))
    console.log('profilesList:', profileList)
    state.profiles = data
  }
}
