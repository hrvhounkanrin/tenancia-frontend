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
                                        <div class="text-center display-4 d-20 rounded-circle mb-3 mb-sm-2">
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
                                        <div class="text-center display-4 d-20 rounded-circle mb-3 mb-sm-2">
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
                                        <div class="text-center display-4 d-20 rounded-circle mb-3 mb-sm-2">
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
                            <span class="text-uppercase pt-2 pb-2 text-black d-block text-center font-weight-bold font-size-sm">Derniers règlements</span>
                        </div>
                        <div class="row">
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
                                                <span class="font-size-sm">Quittance de 50 000 XOF</span>
                                                <span class="badge badge-neutral-info text-info ml-2">EN ATTENTE</span>
                                            </div>
                                            <small class="d-block">
                                                <span class="text-black-50">Période:</span> 01/06/2021 - 30/06/2021
                                            </small>
                                            <small class="d-block">
                                                <span class="text-black-50">Date valeur:</span>  05/05/2021
                                            </small>
                                            <small class="d-block">
                                                <span class="text-black-50">Date règlement:</span> : N/A
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
                                                <span class="font-size-sm">Quittance de 50 000 XOF</span>
                                                <span class="badge badge-neutral-info text-info ml-2">EN ATTENTE</span>
                                            </div>
                                            <small class="d-block">
                                                <span class="text-black-50">Période:</span> 01/06/2021 - 30/06/2021
                                            </small>
                                            <small class="d-block">
                                                <span class="text-black-50">Date valeur:</span>  05/05/2021
                                            </small>
                                            <small class="d-block">
                                                <span class="text-black-50">Date règlement:</span> : N/A
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
                                                <span class="font-size-sm">Quittance de 50 000 XOF</span>
                                                <span class="badge badge-neutral-info text-info ml-2">EN ATTENTE</span>
                                            </div>
                                            <small class="d-block">
                                                <span class="text-black-50">Période:</span> 01/06/2021 - 30/06/2021
                                            </small>
                                            <small class="d-block">
                                                <span class="text-black-50">Date valeur:</span>  05/05/2021
                                            </small>
                                            <small class="d-block">
                                                <span class="text-black-50">Date règlement:</span> : N/A
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
                        <div class="mb-3">
                            <!--<apexchart type="area" height="120" :options="chartWarning" :series="series"></apexchart>-->
                        </div>
                    </div>
                    <div class="card-footer d-block text-center">
                        <a href="javascript:void(0);" class="btn btn-sm btn-success" v-b-tooltip title="Refresh">
                            <font-awesome-icon spin icon="sync"/>
                        </a>
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
