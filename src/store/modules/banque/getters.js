<<<<<<< HEAD
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
=======
export default {
  banquesList: state => {
    return state.banque_list
  },
  modePaiementList: state => {
    return [{ id: 'VIREMENT BANCAIRE', label: 'VIREMENT BANCAIRE' },
      { id: 'MONNAIE ELECTRONIQUE', label: 'MONNAIE ELECTRONIQUE' }
    ]
  }
}
>>>>>>> ea0f95438d39187276bb192d231601cf6c2332d8
