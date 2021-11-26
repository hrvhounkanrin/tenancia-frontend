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
  const convertedNumber = currency
  try {
    const stringValue = currency.replaceAll(/\s/g, '').replace(/[^\d.-]/g, '')
    return parseInt(stringValue)
  } catch (err) {
    return 0
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
export const paginator = function(items, current_page, per_page_items) {
  console.log('items, current_page, per_page_items: ',items, current_page, per_page_items)
	let page = current_page || 1,
	per_page = per_page_items || 10,
	offset = (page - 1) * per_page,

	paginatedItems = items.slice(offset).slice(0, per_page_items),
	total_pages = Math.ceil(items.length / per_page);

	return {
		page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: (total_pages > page) ? page + 1 : null,
		total: items.length,
		total_pages: total_pages,
		data: paginatedItems
	};
}

export const previousPage = function () {
  if (this.selectedPage <= 1) return
  this.paginate(this.selectedPage - 1)
}

export const nextPage = function () {
  if (this.selectedPage >= this.paginationLength) return
  this.paginate(this.selectedPage + 1)
}

export const getPageCount = function (itemLength, nbItemPerPage) {
  const nbPages = Math.round(
    itemLength / nbItemPerPage
  )
  return nbPages
}
export default {
  toggleFullScreen,
  currencyToNumber,
  periodiciteToString,
  getQuittanceClass,
  getAppartmentStatutClass,
}
