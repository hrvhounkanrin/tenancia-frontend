export default {
  immeubles: state => {
    return state.immeubles
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
  errorMessage: state => {
    return state.errorMessage
  }
}
