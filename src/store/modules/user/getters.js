export default {
  getProfiles: (state) => {
    // lecture des profiles du localstorage mais je suis pas sur que ce soit bien de faire une modif dans un getter
    let profiles = {}
    if (localStorage.getItem('lessor')) {
      profiles.lessor = JSON.parse(localStorage.getItem('lessor'))
    }
    if (localStorage.getItem('tenant')) {
      profiles.tenant = JSON.parse(localStorage.getItem('tenant'))
    }
    if (localStorage.getItem('realEstate')) {
      profiles.realEstate = JSON.parse(localStorage.getItem('realEstate'))
    }
    if (Object.entries(profiles).length === 0) { return profiles }
    state.profiles = profiles
    return state.profiles
  },
  tenantProfile: (state) => {
    return state.profiles.tenant
  },
  haveTenantProfile: (state) => {
    return state.profiles !== undefined &&
      state.profiles.tenant !== undefined &&
      !Object.values(state.profiles.tenant).some(x => (x === null))
  },
  lessorProfile: (state) => {
    return state.profiles.lessor
  },
  haveLessorProfile: (state) => {
    return state.profiles !== undefined &&
      state.profiles.lessor !== undefined
  },
  realEstateProfile: (state) => {
    return state.profiles.real_estate
  },
  haveRealEstateProfile: (state) => {
    return state.profiles !== undefined &&
      state.profiles.real_estate !== undefined
  },
  haveOneProfile: (state) => {
    return state.profiles !== undefined && Object.keys(state.profiles).length > 0
  }
}
