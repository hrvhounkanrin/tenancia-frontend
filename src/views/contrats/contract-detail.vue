<template>

    <div>
        <div class="card card-box mb-5">
                    <div class="px-4 px-xl-5 pb-1">
                        <div class="card-header d-block">
                            <span class="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold">DETAIL CONTRAT N° {{contrat.reference_bail}}</span>
                            <!--
                            <div class="text-center">
                                 <b-button variant="primary">
                                    <font-awesome-icon icon="money-check-alt" class="mr-2" />
                                    ACCEPTER CONTRAT N° {{contrat.reference_bail}}
                                </b-button>
                            </div>-->
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                                <div class="d-flex align-items-left flex-column flex-sm-row">
                                    <div class="pl-0 pl-sm-3">
                                        <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                            <font-awesome-icon icon="calendar-alt" :class="faStyle" class="mr-2"/>
                                            <span class="font-size-md">Date signature</span>
                                        </div>
                                        <p class=" mb-0">
                                            <b>{{contrat.date_signature}}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                                <div class="d-flex align-items-left flex-column flex-sm-row">
                                    <div class="pl-0 pl-sm-3">
                                        <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                            <font-awesome-icon icon="calendar-alt" :class="faStyle" class="mr-2"/>
                                            <span class="font-size-md">Date effet</span>
                                        </div>
                                        <p class=" mb-0">
                                            <b>{{contrat.date_effet}}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                                <div class="d-flex align-items-left flex-column flex-sm-row">
                                    <div class="pl-0 pl-sm-3">
                                        <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                            <font-awesome-icon icon="clock" :class="faStyle" class="mr-2"/>
                                            <span class="font-size-md">Périodicité</span>
                                        </div>
                                        <p class=" mb-0">
                                            <b>{{strPeriodicite}}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                                <div class="d-flex align-items-left flex-column flex-sm-row">
                                    <div class="pl-0 pl-sm-3">
                                        <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                            <font-awesome-icon icon="business-time" :class="faStyle" class="mr-2"/>
                                            <span class="font-size-md">Durée</span>
                                        </div>
                                        <p class=" mb-0">
                                            <b>{{contrat.duree}}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                        <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                            <div class="d-flex align-items-left flex-column flex-sm-row">
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                        <font-awesome-icon icon="fist-raised" :class="faStyle" class="mr-2"/>
                                        <span class="font-size-md">Nombre avance</span>
                                    </div>
                                    <p class=" mb-0">
                                        <b>{{contrat.nb_avance}}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                            <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                                <div class="d-flex align-items-left flex-column flex-sm-row">
                                    <div class="pl-0 pl-sm-3">
                                        <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                            <font-awesome-icon icon="hand-holding-usd" :class="faStyle" class="mr-2"/>
                                            <span class="font-size-md">Nombre prépayé</span>
                                        </div>
                                        <p class=" mb-0">
                                            <b>{{contrat.nb_prepaye}}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                                <div class="d-flex align-items-left flex-column flex-sm-row">
                                    <div class="pl-0 pl-sm-3">
                                        <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                            <font-awesome-icon icon="dollar-sign" :class="faStyle" class="mr-2"/>
                                            <span class="font-size-md">Montant bail</span>
                                        </div>
                                        <p class=" mb-0">
                                            <b>{{contrat.montant_bail}}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                          <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                            <div class="d-flex align-items-left flex-column flex-sm-row">
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                        <font-awesome-icon icon="exchange-alt" :class="faStyle" class="mr-2"/>
                                        <span class="font-size-md">Tacite reconduction</span>
                                    </div>
                                    <p class=" mb-0">
                                        <b>OUI</b>
                                    </p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-2 mb-2">
                          <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                            <div class="d-flex align-items-left flex-column flex-sm-row">
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                        <font-awesome-icon icon="balance-scale" :class="faStyle" class="mr-2"/>
                                        <span class="font-size-md">Statut</span>
                                    </div>
                                    <p class=" mb-0">
                                        <b>{{contrat.statut}}</b>
                                    </p>
                                </div>
                            </div>
                          </div>
                          <div class="col-xl-6 col-lg-6 col-md-6  col-sm-12 col">
                            <div class="d-flex align-items-left flex-column flex-sm-row">
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                        <font-awesome-icon icon="comment" :class="faStyle" class="mr-2"/>
                                        <span class="font-size-md">Commentaires</span>
                                    </div>
                                    <p class=" mb-0">
                                        <b>{{contrat.observation}}</b>
                                    </p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="card card-box mb-2 card-box-border-bottom" :class="cardBorder">
                                <div class="card-body">
                                    <div class="align-box-row align-items-start">
                                        <div>
                                            <div class="font-weight-bold">
                                                <small class="text-black-50 d-block mb-1 text-uppercase">Locataire</small>
                                                <span class="font-size-xl  mt-1">{{contrat.client.user.first_name+ ' '+contrat.client.user.last_name}}</span>
                                            </div>
                                            <div class="mt-2">
                                                <font-awesome-icon icon="phone-alt" class="mr-1"/>
                                                <span class="pr-1">{{contrat.client.phone_number}}</span>
                                            </div>
                                             <div class="mt-2">
                                                <font-awesome-icon icon="envelope" class="mr-1"/>
                                                <span class="pr-1">{{contrat.client.user.email}}</span>
                                            </div>
                                        </div>
                                        <div class="ml-auto card-hover-indicator align-self-center">
                                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="card card-box mb-2 card-box-border-bottom"  :class="cardBorder">
                                <div class="card-body"> 
                                    <div class="align-box-row align-items-start">
                                        <div>
                                            <div class="font-weight-bold">
                                                <small class="text-black-50 d-block mb-1 text-uppercase">Bailleur</small>
                                                <span class="font-size-xl  mt-1">{{contrat.appartement.proprietaire}}</span>
                                            </div>
                                            <div class="mt-2">
                                                <font-awesome-icon icon="phone-alt" class="mr-1"/>
                                                <span class="pr-1">{{contrat.appartement.proprietaire_phone_number}}</span>
                                            </div>
                                             <div class="mt-2">
                                                <font-awesome-icon icon="envelope" class="mr-1"/>
                                                <span class="pr-1">{{contrat.appartement.proprietaire_mail}}</span>
                                            </div>
                                        </div>
                                        <div class="ml-auto card-hover-indicator align-self-center">
                                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="card-header border-0 d-block">
                            <span class="text-uppercase pt-2 pb-2 text-black d-block text-center font-weight-bold font-size-sm">Frais accessoires</span>
                        </div>
                        <div class="row" v-for="acc in contrat.accessoires" :key="acc.id">
                              <div class="col-lg-12">
                            <div class="card card-box mb-2">
                                <div class="card-body">
                                    <div class="d-flex align-items-center flex-column flex-sm-row">
                                        <div>
                                            <div class="bg-deep-blue text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                                                <font-awesome-icon icon="file-invoice-dollar"/>
                                            </div>
                                        </div>
                                        <div class="pl-0 pl-sm-4">
                                            <div class="d-flex align-items-center">
                                                <span class="font-size-sm">Intitulé:</span> 
                                                <span class="font-size-sm ml-2">{{acc.accesoireloyer.libelle}}</span>
                                            </div>
                                            <small class="d-block">
                                                <span class="font-size-sm">Montant:</span> 
                                                <span class="font-size-sm ml-2">{{Number(acc.montant).toLocaleString('fr-FR')}} F CFA</span>
                                            </small>
                                            <small class="d-block">
                                                <span class="font-size-sm">Statut:</span>
                                                <span class="font-size-sm ml-2">{{acc.statut}}</span>
                                            </small>
                                            <small class="d-block">
                                                <span class="font-size-sm">Mode:</span>
                                                <span class="font-size-sm ml-2">PONCTUEL</span>
                                            </small>
                                        </div>
                                       <!-- <div class="mt-3 mt-sm-0 ml-sm-auto">
                                            <b-button variant="success">
                                                <span class="btn-wrapper--icon">
                                                    <font-awesome-icon icon="question-circle"/>
                                                </span>
                                                <span class="btn-wrapper--label">
                                                Contact
                                            </span>
                                            </b-button>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
               
                    </div>
                    <div class="card-footer d-block text-center">
                        <b-button variant="primary">
                            <font-awesome-icon icon="money-check-alt" class="mr-2" />
                            PAYER {{Number(totalAPayer).toLocaleString('fr-FR')}} FCFA
                        </b-button>
                    </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default {
  name: 'ContractDetail',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  data: function(){
       return {
          strPeriodicite: null
      }
  },
  props: {
    contrat: Object,
    faStyle: String,
    cardBorder: String
  },
  computed: {
      totalAPayer: function(){
        let montant_bail = parseFloat(this.contrat.montant_bail) 
        return montant_bail + this.contrat.accessoires.reduce((accumulateur, item) => accumulateur + parseFloat(item.montant) , 0)
      }
  },
  mounted: function(){
      this.convertPeriodicite(this.contrat.periodicite)
      
  },
  
  watch: { 
    contrat: function(newContrat, oldContrat) { 
        this.convertPeriodicite(newContrat.periodicite)
        console.log('faStyle:',this.cardBorder)
        this.$forceUpdate()
    }
  },
  methods: {
      convertPeriodicite: function(periodicite){
            if(periodicite===12){
                this.strPeriodicite = 'MENSUELLE'
            }
            if(periodicite===4){
                this.strPeriodicite = 'TRIMESTRIELLE'
            }
            if(periodicite===2){
                this.strPeriodicite = 'SEMESTRIELLE'
            }
            if(periodicite===1){
                this.strPeriodicite = 'ANNUELLE'
            }
      }
  }
}
</script>
