export default {
  immeubles: state => {
    return state.immeubles
  },
  getImmeubleById: (state, id) => {
    return state.immeubles.find(im => im.id === id)
  },
  appartements: state => {
    return state.appartements
  },
  dependances: state => {
    return state.typedependances
  },
  selectedImmeuble: state => {
    return state.selectedImmeuble
  },
  reverseGeocodingResponse: state => {
    return state.reverseGeocodingResponse
  },
  errorMessage: state => {
    return state.errorMessage
  },
  currentAppartments: state => {
    const appartements = (state.selectedImmeuble===null) ? []: state.selectedImmeuble.appartements
    console.log('Selected appartments:', appartements)
    return appartements
  }
}
