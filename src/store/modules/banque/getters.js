export default {
  banquesList: state => {
    return state.banque_list
  },
  virementList: state => {
    return [{id:'VIREMENT BANCAIRE', label:'VIREMENT BANCAIRE'},
    {id:'MOMO', label:'MOMO'},
    {id:'MOOV', label:'MOOV'},]
  },
  }
