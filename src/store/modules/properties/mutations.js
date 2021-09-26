import {
  IMMEUBLE_LIST, ADD_IMMEUBLE, UPDATE_IMMEUBLE,SELECTED_IMMEUBLE, APPARTEMENT_LIST,
  ADD_APPARTEMENT, UPDATE_APPARTEMENT,DEPENDANCE_LIST,ADD_DEPENDANCE, ERROR_ADD, ERROR_REMOVE, REVERSE_GEOCODING_RESPONSE
} from './mutation-types'

export default {
  [IMMEUBLE_LIST] (state, immeubles) {
    state.immeubles = immeubles
  },
  [ADD_IMMEUBLE] (state, immeuble) {
    state.immeubles.push(immeuble)
  },
  [UPDATE_IMMEUBLE] (state, immeuble) {
    let index = state.immeubles.findIndex(im => im.id === immeuble.id)
    state.immeubles.splice(index, 1, immeuble)
  },
  [APPARTEMENT_LIST] (state, appartements) {
    state.appartements = appartements
  },
  [SELECTED_IMMEUBLE] (state, immeuble) {
    state.selectedImmeuble = immeuble
  },
  [REVERSE_GEOCODING_RESPONSE] (state, data) {
    state.reverseGeocodingResponse = data
  },
  [ADD_APPARTEMENT] (state, appartement) {
    if(Array.isArray(appartement)){
      state.selectedImmeuble.appartements.push(...appartement)
    }
    else{
      state.selectedImmeuble.appartements.push(appartement)
    }
    
    let index = state.immeubles.findIndex(im => im.id === state.selectedImmeuble.id)
    state.immeubles.splice(index, 1, state.selectedImmeuble)
  },
  [UPDATE_APPARTEMENT] (state, appartement) {
    let index = state.selectedImmeuble.appartements.findIndex(app => app.id === appartement.id)
    state.selectedImmeuble.appartements.splice(index, 1, appartement)
  },
  [DEPENDANCE_LIST] (state, dependances){
    state.typedependances = dependances
  },
  [ADD_DEPENDANCE] (state, dependance) {
    state.typedependances.unshift(dependance)
  },
  [ERROR_ADD] (state, errorObj) {
    state.errors.push(errorObj)
  },
  [ERROR_REMOVE] (state, errorKey) {
    let index = state.errors.findIndex(err => err.key === errorKey)
    state.errors.splice(index, 1)
  }
}
