import moment from 'moment'
moment.locale('fr', {
  'months': 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
  'monthsShort': 'Janv._Févr._Mars_Avr._Mai_Juin_Juil._Août_Sept._Oct._Nov._Déc.'.split('_'),
  'monthsParseExact': true,
  'weekdays': 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  'weekdaysShort': 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  'weekdaysMin': 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  'weekdaysParseExact': true,
  'longDateFormat': {
    'LT': 'HH:mm',
    'LTS': 'HH:mm:ss',
    'L': 'DD/MM/YYYY',
    'LL': 'dddd D MMMM YYYY',
    'LLL': 'D MMMM YYYY HH:mm',
    'LLLL': 'dddd D MMMM YYYY HH:mm'
  },
  'calendar': {
    'sameDay': '[Aujourd’hui à] LT',
    'nextDay': '[Demain à] LT',
    'nextWeek': 'dddd [à] LT',
    'lastDay': '[Hier à] LT',
    'lastWeek': 'dddd [dernier à] LT',
    'sameElse': 'L'
  },
  'relativeTime': {
    'future': 'dans %s',
    'past': 'il y a %s',
    's': 'quelques secondes',
    'm': 'une minute',
    'mm': '%d minutes',
    'h': 'une heure',
    'hh': '%d heures',
    'd': 'un jour',
    'dd': '%d jours',
    'M': 'un mois',
    'MM': '%d mois',
    'y': 'un an',
    'yy': '%d ans'
  },
  'dayOfMonthOrdinalParse': /\d{1,2}(er|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? 'er' : '')
  },
  'meridiemParse': /PD|MD/,
  'isPM': function (input) {
    return input.charAt(0) === 'M'
  },
  'meridiem': function (hours, minutes, isLower) {
    return hours < 12 ? 'PD' : 'MD'
  },
  'week': {
    'dow': 1,
    'doy': 4
  }
})

moment.locale('fr')

export default moment
