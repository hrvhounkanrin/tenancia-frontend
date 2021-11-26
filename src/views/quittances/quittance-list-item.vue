<template>
     <div class="card card-box mb-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col col-sm-12 col-md-12 mr-2">
                            <span :class="getStatusClass(quittance)"  class="badge badge-pill ml-2">{{quittance.statut}}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-sm-12 col-md-3">
                           <small><b>Montant</b></small>
                            <div class="d-flex align-items-left">
                            <b-form-checkbox :id="'chk_'+quittance.reference" unchecked-value="not_accepted">
                                <span class="font-size-md">{{Number(quittance.montant).toLocaleString('fr-FR')}} F CFA</span>
                            </b-form-checkbox>
                                
                            </div>
                      
                        </div>
                        <div class="col col-sm-12 col-md-2">
                            <small><b>Appartement</b></small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.appartement.intitule}}({{quittance.appartement.immeuble_intitule}})</span>
                            </div>
                             <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.appartement.immeuble_address}}</span>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-2">
                            <small><b>Quittance</b></small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.reference}}</span>
                            </div>
                             <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.nature}}</span>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-3">
                            <small><b>Bailleur</b></small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.lessor.first_name + ' '+ quittance.lessor.last_name}}</span>
                            </div>
                             <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.lessor.phone_number}}</span>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-2">
                            <small><b>Date Val.</b></small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-md">{{quittance.date_valeur }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-row-reverse">
                        <b-button variant="secondary" pill class="mr-3"  @click="$emit('share-quittance')">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="share-alt" /> 
                                </span>
                                <span class="btn-wrapper--label">
                                Partager
                            </span>
                            </b-button>
                            <b-button variant="primary" pill class="mr-1" @click="$emit('select-quittance')" >
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="eye"/>
                                </span>
                                <span class="btn-wrapper--label">
                                Détails
                            </span>
                            </b-button>
                            <b-button variant="success" pill class="mr-1" v-b-modal="'modal-bbb4'">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="money-check-alt"/>
                                </span>
                                <span class="btn-wrapper--label">
                                Payer
                            </span>
                            </b-button>
                    </div>
                </div>
            </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas)
library.add(fab)
export default {
  name: 'QuittanceListeItem',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  data: function () {
    return {
      contrat: null,
      modalOpen: false
    }
  },
  props: {
    quittance: Object
  },
  methods: {
    openModal () {
      this.modalOpen = !this.modalOpen
    },
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
