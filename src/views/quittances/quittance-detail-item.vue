<template>
    <div class="card card-box mb-5">
                <div class="px-4 px-xl-5 pb-1">
                    <div class="card-header d-block">
                        <span class="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold">
                            QUITTANCE N° {{quittance.reference}}
                            <span :class="getStatusClass(quittance)"  class="badge badge-pill ml-2">{{quittance.statut}}</span>
                        </span>

                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <small>
                                    Date valeur
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.date_valeur}}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <small>
                                    Montant
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{Number(quittance.montant).toLocaleString('fr-FR')}} FCFA</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <small>
                                    Début période
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.debut_periode}} </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <small>
                                   Fin période
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.fin_periode}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6">
                                <small>
                                    Nature
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.nature}}</span>
                                </div>
                            </div>
                             <div class="col-md-6">
                                <small>
                                    Contrat N°
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.contrat_detail.reference_bail}}</span>
                                </div>
                            </div>
                        </div>
                         <div class="row">
                            <div class="col-md-6">
                                <small>
                                    Date d'effet
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.contrat_detail.date_effet}}</span>
                                </div>
                            </div>
                                <div class="col-md-6">
                                <small>
                                    Statut
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.contrat_detail.statut}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <small>
                                    Appartement
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.appartement.intitule}}</span>
                                </div>
                            </div>
                             <div class="col-md-6">
                                <small>
                                    Immeuble
                                </small>
                                <div class="d-flex align-items-left">
                                    <span class="font-size-lg">{{quittance.appartement.immeuble_intitule}}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="card-footer d-block text-center">
                    <b-button variant="success" v-b-modal="'modal-bbb4'">
                        <font-awesome-icon icon="money-check-alt" class="mr-2" />
                        PAYER
                    </b-button>
                </div>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export default {
  name: 'QuittanceDetailItem',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  data: function () {
    return {
      contrat: null
    }
  },
  props: {
    quittance: Object
  },
  methods: {
    getStatusClass: function (quittance) {
      if (quittance['statut'] === 'PENDING') {
        return 'badge-warning'
      }
      if (quittance['statut'] === 'PAID') {
        return 'badge-success'
      }
      return 'badge-danger'
    }
  }
}
</script>
