export default {
  adminList: state => {
    const idx = state.admin_list.findIndex(el => el.id == crrUser.id)
    idx < 0 ? false : state.admin_list.splice(idx, 1)
    return state.admin_list
  },
  getProfiles: (state)=>{
    return state.profiles
  },
  tenantProfile: (state) => {
    return state.profiles.tenant
  },
  haveTenantProfile: (state) => {
    return state.profiles !== undefined 
      && state.profiles.tenant !== undefined 
      && !Object.values(state.profiles.tenant).some(x => (x === null ))
  },
  lessorProfile: (state) => {
    return state.profiles.lessor
  },
  haveLessorProfile: (state) => {
    return state.profiles !== undefined 
      && state.profiles.lessor !== undefined
  },
  realEstateProfile: (state) => {
    return state.profiles.real_estate
  },
  haveRealEstateProfile: (state) => {
    return state.profiles !== undefined 
      && state.profiles.real_estate !== undefined
  },
  haveOneProfile: (state) => {
    return state.profiles !== undefined && Object.keys(state.profiles).length >0
  }
}
