<template>
     <div class="card card-box mb-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col col-sm-12 col-md-2">
                            <small>
                                Montant
                            </small>
                            <div class="d-flex align-items-left">
                                  <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox1">
                                    <span class="font-size-lg">{{Number(quittance.montant).toLocaleString('fr-FR')}} F CFA</span>
                                </label>
                                <span class="badge badge-danger ml-2">PENDING</span>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-2">
                            <small>
                                Appartement
                            </small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-lg">{{quittance.appartement.intitule}}({{quittance.appartement.immeuble_intitule}})</span>
                            </div>
                             <div class="d-flex align-items-left">
                                <span class="font-size-lg">{{quittance.appartement.immeuble_address}}</span>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-3">
                            <small>
                                Quittance
                            </small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-lg">{{quittance.reference}}</span>
                            </div>
                             <div class="d-flex align-items-left">
                                <span class="font-size-lg">{{quittance.nature}}</span>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-md-3">
                            <small>
                                Bailleur
                            </small>
                            <div class="d-flex align-items-left">
                                <span class="font-size-lg">{{quittance.lessor.first_name + ' '+ quittance.lessor.last_name}}</span>
                            </div>
                             <div class="d-flex align-items-left">
                                <span class="font-size-lg">{{quittance.lessor.phone_number}}</span>
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
                            <b-button variant="success" class="col mb-1">
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
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)
export default {
    name: "QuittanceListeItem",
    components: {
        "font-awesome-icon": FontAwesomeIcon,
    },
    data: function() {
        return {
            contrat: null
        }
    },
    props: {
        quittance: Object
    }
}
</script>