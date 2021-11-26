<template>

    <div>
        <div class="card card-box mb-5">
            <div class="px-4 px-xl-5 pb-1">
                <div class="card-header d-block">
                    <span class="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold">DETAIL CONTRAT N° {{contrat.reference_bail}}</span>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="d-flex align-items-left flex-column flex-sm-row">
                            <div>
                                <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                    <font-awesome-icon icon="calendar-alt" :class="faStyle"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-3">
                                <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                    <span class="font-size-md">Date signature</span>
                                </div>
                                <p class=" mb-0">
                                    <b>{{contrat.date_signature}}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="d-flex align-items-left flex-column flex-sm-row">
                            <div>
                                <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                    <font-awesome-icon icon="calendar-alt" :class="faStyle"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-3">
                                <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
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
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="d-flex align-items-left flex-column flex-sm-row">
                            <div>
                                <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                    <font-awesome-icon icon="clock" :class="faStyle"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-3">
                                <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                    <span class="font-size-md">Périodicité</span>
                                </div>
                                <p class=" mb-0">
                                    <b>{{strPeriodicite}}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="d-flex align-items-left flex-column flex-sm-row">
                            <div>
                                <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                    <font-awesome-icon icon="business-time" :class="faStyle"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-3">
                                <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
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
                <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="d-flex align-items-left flex-column flex-sm-row">
                        <div>
                            <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                <font-awesome-icon icon="fist-raised" :class="faStyle" />
                            </div>
                        </div>
                        <div class="pl-0 pl-sm-3">
                            <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                <span class="font-size-md">Nombre avance</span>
                            </div>
                            <p class=" mb-0">
                                <b>{{contrat.nb_avance}}</b>
                            </p>
                        </div>
                    </div>
                </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="d-flex align-items-left flex-column flex-sm-row">
                            <div>
                                <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                    <font-awesome-icon icon="hand-holding-usd" :class="faStyle"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-3">
                                <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
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
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="d-flex align-items-left flex-column flex-sm-row">
                            <div>
                                <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                    <font-awesome-icon icon="dollar-sign" :class="faStyle"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-3">
                                <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                    <span class="font-size-md">Montant bail</span>
                                </div>
                                <p class=" mb-0">
                                    <b>{{contrat.montant_bail}}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="d-flex align-items-left flex-column flex-sm-row">
                        <div>
                            <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                <font-awesome-icon icon="exchange-alt" :class="faStyle" />
                            </div>
                        </div>
                        <div class="pl-0 pl-sm-3">
                            <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
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
                    <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="d-flex align-items-left flex-column flex-sm-row">
                        <div>
                            <div class="text-center text-first display-4 d-20 rounded-circle mb-3 mb-sm-2">
                                <font-awesome-icon icon="balance-scale" :class="faStyle"/>
                            </div>
                        </div>
                        <div class="pl-0 pl-sm-3">
                            <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
                                <span class="font-size-md">Statut</span>
                            </div>
                            <p class=" mb-0">
                                <b>{{contrat.statut}}</b>
                            </p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="d-flex align-items-left flex-column flex-sm-row">
                        <div>
                            <div class="text-center text-first display-4 d-20 mb-3 mb-sm-2">
                                <font-awesome-icon icon="comment" :class="faStyle"/>
                            </div>
                        </div>
                        <div class="pl-0 pl-sm-3">
                            <div class="d-block text-left text-black-50 opacity-8 d-sm-flex align-items-center">
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
                                        <small class="text-black-50 d-block mb-1 text-uppercase">APPARTEMENT</small>
                                        <font-awesome-icon icon="home" class="font-size-lg mr-2" :class="faStyle"/>
                                        <span class="font-size-lg  mt-1 mr-2">{{contrat.appartement.intitule}}</span>
                                        <span class="font-size-lg  mt-1">({{contrat.appartement.immeuble_intitule}})</span>
                                    </div>
                                     <ul class="list-unstyled card-columns">
                                        <li v-for="(typedependence, index) in contrat.appartement.structures" :key="index">
                                            <font-awesome-icon icon="check-square" class="mr-2"  :class="faStyle"/>
                                            <span class="mr-1">{{'0'+typedependence.nbre}}</span>
                                            <span> {{ typedependence.libelle }}</span>
                                            <span> ({{ typedependence.superficie + ' m²'}})</span> 
                                           
                                        </li>
                                    </ul>
                                    <p><font-awesome-icon icon="comments" :class="faStyle"/><span class="ml-2">{{contrat.appartement.autre_description}}...</span></p>
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
                                        <font-awesome-icon icon="phone-alt" class="mr-1"  :class="faStyle"/>
                                        <span class="pr-1">{{contrat.appartement.proprietaire_phone_number}}</span>
                                    </div>
                                        <div class="mt-2">
                                        <font-awesome-icon icon="envelope" class="mr-1"  :class="faStyle"/>
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
                <div class="row">
                    <div class="col-lg-12">
                    <div class="card card-box mb-2 card-box-border-bottom"  :class="cardBorder">
                        <div class="card-body"> 
                            <div class="align-box-row align-items-start">
                                <div>
                                    <div class="font-weight-bold">
                                        <small class="text-black-50 d-block mb-1 text-uppercase">TOTAL A PAYER</small>
                                        <font-awesome-icon icon="calculator" class="font-size-xl mr-2"  :class="faStyle"/>
                                        <span class="font-size-xl  mt-1"> {{Number(totalBail).toLocaleString('fr-FR')}} FCFA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="card-footer d-block text-center">
                <b-button variant="danger" class="mr-2" v-if="!contrat.client_accord">
                    <font-awesome-icon icon="ban" class="mr-2"/>
                    DECLINER
                </b-button>
                <b-button variant="success" v-if="!contrat.client_accord" @click="$emit('accepter-contrat')" >
                    <font-awesome-icon icon="handshake" class="mr-2"/>
                    ACCEPTER
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
  name: 'ContratDetaiTenant',
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
    cardBorder: String,
    totalBail: Number
  },
  computed: {
     
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
      },
     
  }
}
</script>
