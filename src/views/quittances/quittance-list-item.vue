<template>
     <div class="card card-box mb-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col col-sm-12 col-md-3">
                           <small><b>Montant</b></small>
                            <div class="d-flex align-items-left">

                               <!--<label class="custom-control-label" :for="quittance.id">
                                    <span class="font-size-md">{{Number(quittance.montant).toLocaleString('fr-FR')}} F CFA</span>
                                    <input type="checkbox" :id="quittance.id" class="custom-control-input ml-2">
                                </label>-->
                            <b-form-checkbox :id="'chk_'+quittance.reference" unchecked-value="not_accepted">
                                <span class="font-size-md">{{Number(quittance.montant).toLocaleString('fr-FR')}} F CFA</span>
                            </b-form-checkbox>
                                <span :class="getStatusClass(quittance)"  class="badge badge-pill ml-2">{{quittance.statut}}</span>
                            </div>
                            <div class="d-flex align-items-left mt-2">
                            <b-button variant="secondary" pill class="col mr-2 mb-1"  @click="$emit('share-quittance')">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="share-alt" class="mr-2"/> Partager Quittance
                                </span>
                            </b-button>
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
                            <b-button variant="primary" class="col mr-2 mb-1" @click="$emit('select-quittance')" >
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="eye"/>
                                </span>
                                <span class="btn-wrapper--label">
                                Détails
                            </span>
                            </b-button>
                            <b-button variant="success" class="col mb-1"  v-b-modal="'modal-bbb4'">
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
