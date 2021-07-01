export default {
  banquesList: state => {
    return state.banque_list
  },
  modePaiementList: state => {
    return [{id:'VIREMENT BANCAIRE', label:'VIREMENT BANCAIRE'},
    {id:'MONNAIE ELECTRONIQUE', label:'MONNAIE ELECTRONIQUE'},
    ]
  },
  }
