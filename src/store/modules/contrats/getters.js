export default {
  contrats: state => {
    return state.contrats
  },
  clientContrats: state => {
    return state.clientContrats
  },
  retrievedTenants: state => {
    return state.tenants
  },
  searchTenantRequest: state => {
    return state.searchTenantRequest
  },
  typeAccessoireLoyer: state => {
    return state.typeAccessoireLoyer
  },
  selectedContrat: state => {
    return state.selectedContrat
  },
  errorMessage: state => {
    return state.errorMessage
  }, 
  retrievedAppartments: state => {
    return state.freeAppartment
  },
  freeAppartmentRequest: state => {
    return state.freeAppartmentRequest
  },
}
