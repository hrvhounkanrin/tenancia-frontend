const toggleFullScreen = () => {
  let doc = window.document
  let docEl = doc.documentElement

  let requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen
  let cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl)
  } else {
    cancelFullScreen.call(doc)
  }
}
const currencyToNumber = function (currency) {
  console.log('currencyToNumber:', currency)
  const convertedNumber = currency
  try {
    const stringValue = currency.replaceAll(/\s/g, '').replace(/[^\d.-]/g, '')
    return parseInt(stringValue)
  } catch (err) {
    return convertedNumber
  }
}
const periodiciteToString = function (periodicite) {
  strPeridicite = ''
  if (periodicite === 12) {
    periodicite = 'MENSUELLE'
  }
  if (periodicite === 4) {
    periodicite = 'TRIMESTRIELLE'
  }
  if (periodicite === 2) {
    periodicite = 'SEMESNTRIELLE'
  }
  if (periodicite === 2) {
    periodicite = 'ANNUELLE'
  }
  return strPeridicite
}
const getQuittanceClass = function (quittance) {
  if (quittance['statut'] === 'PENDING') {
    return 'badge-warning'
  }
  if (quittance['statut'] === 'PAID') {
    return 'badge-success'
  }
  return 'badge-danger'
}

const getAppartmentStatutClass = function (statutAppartment) {
  if (statutAppartment === 'RESERVE') {
    return 'badge-warning'
  }
  if (statutAppartment === 'LIBRE') {
    return 'badge-success'
  }
  return 'badge-danger'
}
export default {
  toggleFullScreen,
  currencyToNumber,
  periodiciteToString,
  getQuittanceClass,
  getAppartmentStatutClass
}
