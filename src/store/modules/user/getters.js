export default {
  adminList: state => {
    const idx = state.admin_list.findIndex(el => el.id == crrUser.id)
    idx < 0 ? false : state.admin_list.splice(idx, 1)
    return state.admin_list
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
      && !Object.values(state.profiles.lessor).some(x => (x === null ))
  },
  realEstateProfile: (state) => {
    return state.profiles.realEstate !== undefined
  },
  haveRealEstateProfile: (state) => {
    return state.profiles !== undefined 
      && state.profiles.realEstate !== undefined 
      && !Object.values(state.profiles.realEstate).some(x => (x === null ))
  }
}
