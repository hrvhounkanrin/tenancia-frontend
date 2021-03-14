import jsPDF from 'jspdf'
import 'jspdf-autotable'
import moment from '@/helpers/moment'

export const mixin = {

  methods: {

    message(composant, type) {

      let msg = {};
      msg = {...messageComponent[composant][type] }
      return msg;
  },

    makeid (length) {
      var result = ''
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      return result
    },

    

    formatDate (dataString) {
      if (dataString != undefined) {
        var p = dataString.split(/\D/g)
        return [p[0], p[1], p[2]].join('/')
      }
    },
    filterJsonTable (table, key) {
      let listSort = table
      let res = listSort.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1
      })
      return res
    },
    filterJsonTableByLevel (table, level1, level2, level3) {
      let listSort = [...table]
      if (!level3 == '') {
        let res = listSort.sort((a, b) => {
          return a[level1][level2][level3].toLowerCase() > b[level1][level2][level3].toLowerCase() ? 1 : -1
        })
        return res
      } else {
        if (!level2 == '') {
          let res = listSort.sort((a, b) => {
            return a[level1][level2].toLowerCase() > b[level1][level2].toLowerCase() ? 1 : -1
          })
          return res
        } else {
          let res = listSort.sort((a, b) => {
            return a[level1].toLowerCase() > b[level1].toLowerCase() ? 1 : -1
          })
          return res
        }
      }
    },
    exportToData (
      dataList,
      dataTitles,
      dataHeaderVal,
      fileName,
      autoWidth,
      bookType
    ) {
            import ('@/vendor/Export2Excel').then(excel => {
              const list = dataList
              const data = this.formatJson(dataHeaderVal, list)
              excel.export_json_to_excel({
                header: dataTitles,
                data,
                filename: fileName,
                autoWidth: autoWidth,
                bookType: bookType
              })
            })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          return v[j]
        })
      )
    },
    exportToPdf (dataList, ColumnsFormated, fileName) {
      const doc = new jsPDF()
      doc.autoTable({
        body: dataList,
        columns: ColumnsFormated
      })
      doc.save(`${fileName}.pdf`)
    },
    lastLogin (lastLoginAt) {
      let title = 'Dernière connexion'
      let text = 'Néant'
      if (lastLoginAt) {
        text = moment(parseInt(lastLoginAt, 10)).format('DD/MM/YYYY [à] HH:mm')
      }
      return {
        title,
        text: 'Le ' + text
      }
    },
    userDateElement (data) {
      let { whoCreated, whoUpdated, createdAt, updatedAt } = data
      let title = 'Informations'
      let textWhoCreated = 'Néant'
      let textWhoUpdated = 'Néant'
      let textCreatedAt = 'Néant'
      let textUpdatedAt = 'Néant'

      if (createdAt) {
        textCreatedAt = moment(parseInt(createdAt, 10)).format(
          'DD/MM/YYYY [à] HH:mm'
        )
      }
      if (updatedAt) {
        textUpdatedAt = moment(parseInt(updatedAt, 10)).format(
          'DD/MM/YYYY [à] HH:mm'
        )
      }
      if (whoCreated) {
        textWhoCreated = `${whoCreated.person.firstname} ${whoCreated.person.lastname}`
      }
      if (whoUpdated) {
        textWhoUpdated = `${whoUpdated.person.firstname} ${whoUpdated.person.lastname}`
      }

      return {
        createdAt: `Par ${textWhoCreated}, le ${textCreatedAt}`,
        updatedAt: `Par ${textWhoUpdated}, le ${textUpdatedAt}`
      }
    },
    dateElement (data) {
      let { createdAt, updatedAt, birthday } = data
      let title = 'Informations'
      let textCreatedAt = 'Néant'
      let textUpdatedAt = 'Néant'
      let textBirthday = 'Néant'

      if (createdAt) {
        textCreatedAt = moment(parseInt(createdAt, 10)).format(
          'DD/MM/YYYY [à] HH:mm'
        )
      }
      if (updatedAt) {
        textUpdatedAt = moment(parseInt(updatedAt, 10)).format(
          'DD/MM/YYYY [à] HH:mm'
        )
      }
      if (birthday) {
        textBirthday = moment(parseInt(birthday, 10)).format(
          'DD/MM/YYYY'
        )
      }

      let text = `Création: le ${textCreatedAt} Modification: le ${textUpdatedAt}`

      let createdAtInfo = ` ${textCreatedAt} `
      let birthdayInfo = ` ${textBirthday} `

      return {
        title,
        text,
        createdAtInfo,
        birthdayInfo
      }
    },
    aboutElement (data) {
      let { whoCreated, whoUpdated, createdAt, updatedAt } = data
      let title = 'Informations'
      let textWhoCreated = 'Néant'
      let textWhoUpdated = 'Néant'
      let textCreatedAt = 'Néant'
      let textUpdatedAt = 'Néant'

      if (createdAt) {
        textCreatedAt = moment(parseInt(createdAt, 10)).format(
          'DD/MM/YYYY [à] HH:mm'
        )
      }
      if (updatedAt) {
        textUpdatedAt = moment(parseInt(updatedAt, 10)).format(
          'DD/MM/YYYY [à] HH:mm'
        )
      }
      if (whoCreated) {
        try {
          textWhoCreated = `${whoCreated.person.firstname} ${whoCreated.person.lastname}`
        } catch (error) {
          textWhoCreated = `Néant`
        }
      }
      if (whoUpdated) {
        try {
          textWhoUpdated = `${whoUpdated.person.firstname} ${whoUpdated.person.lastname}`
        } catch (error) {
          textWhoUpdated = `Néant`
        }
      }

      let text = `Création: ${textWhoCreated}, le ${textCreatedAt} Modification: ${textWhoUpdated}, le ${textUpdatedAt}`

      let createdAtInfo = ` ${textCreatedAt} `

      return {
        title,
        text,
        createdAtInfo
      }
    },
    deviseConverter (price) {
      let rate = 1.045 // replace by society data
      let symbole = '€' // replace by society data
      let result = (parseInt(price, 10) * parseInt(rate, 10))

      return `${symbole} ${result}`
    }
  }
}
