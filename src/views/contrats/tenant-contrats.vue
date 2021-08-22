<template>
  <div>
    <PageTitle
      heading="Mes contrats"
      subheading="Liste de vos contrats de bail"
    />
    <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
                      <alert  variant="warning" v-for="err in api_errors" :msg="err.message" icon="bell" :dismissSecs="15" :dismissible="true" :title="'Oups..'" :key="err.key"></alert>
              </div>
    </div>
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
          <div class="card card-box mb-5" v-for="co in contrats" :key="co.id">
                    <div class="card-header">
                        <div class="font-size-lg d-block text-truncate">
                            <span class="text-black-50 pr-2">#{{co.reference_bail}}</span> ({{co.appartement.ville}})
                        </div>
                        <div class="ml-auto d-flex align-items-center align-content-center">
                            <div class="avatar-wrapper-overlap">
                                 <a href="javascript:void(0);" v-b-tooltip title="Localisation map">
                                    <font-awesome-icon icon="map-marker-alt" class="mr-1 text-danger fa-2x"/>
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Appartement</span>
                                    <b class="font-size-sm">{{co.appartement.intitule}} ({{co.appartement.immeuble_intitule}})</b>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Bailleur</span>
                                    <b class="font-size-sm">{{co.appartement.proprietaire}}</b>
                                </div>
                            </div>
                             <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Loyer</span>
                                    <b class="font-size-sm">{{Number(co.montant_bail).toLocaleString('fr-FR')}} F CFA</b>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Proch. Echéance</span>
                                    <b class="font-size-sm">{{co.prochaine_echeance}}</b>
                                </div>
                            </div>
                            
                        </div>
                        
                                
                    </div>
                    <div class="card-footer bg-light p-4">
                    <div class="align-box-row">
                        <div class="ml-auto">
                           
                            <b-button variant="primary"  class="mr-2"> 
                                    <font-awesome-icon icon="file-invoice" class="mr-2" /> Quittances
                            </b-button>
                            <b-button variant="primary" class="mr-2" @click="setActiveContrat(co)">
                                        <font-awesome-icon icon="eye" class="mr-2" /> Détails
                            </b-button>
                            <b-button variant="success" v-if="!co.client_accord" @click="accepterContrat(co)"  class="mr-2">
                                <font-awesome-icon icon="handshake" class="mr-2" />
                                ACCEPTER
                            </b-button>
                        </div>
                    </div>
                </div>
                   
          </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
          <contrat-detail-tenant v-if="activeContrat" 
            :contrat="activeContrat" 
            :fa-style="faStyle" 
            :card-border="cardBorder"
            :total-bail="totalBail(activeContrat)"
            @accepter-contrat="accepterContrat(activeContrat)">
            </contrat-detail-tenant>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vueSlider from "vue-slider-component"
import paginate, { alert } from "@/components/shared/"
import ContractDetailTenant from './contract-detail-tenant.vue'
import utils from '@/utils/index'
library.add(fas)

export default {
  name: 'TenantContrats',
  components: {
    vueSlider,
    "font-awesome-icon": FontAwesomeIcon,
    "t-pagination": paginate,
    alert: alert,
    'contrat-detail-tenant': ContractDetailTenant
  },
 data: function(){
      return {
          activeContrat: null,
          faStyle: null,
          cardBorder: null,
      }
  },
  props: {

  },
  computed: {
      totalAPayer: function(){
        let montant_bail = parseFloat(this.selectedContrat.montant_bail) 
        return montant_bail + this.selectedContrat.accessoires.reduce((accumulateur, item) => accumulateur + parseFloat(item.montant) , 0)
      },
    ...mapGetters({
      contrats: 'contrats/clientContrats',
    }),
    ...mapState({
      api_errors: (state) => state.contrats.errors
    }),
  },
  mounted: function(){
      this.$store.dispatch('contrats/getClientContrats')
  },
  watch: { 
    contrat: function(newContrat, oldContrat) { 
        this.convertPeriodicite(newContrat.periodicite)
        console.log('faStyle:',this.cardBorder)
        this.$forceUpdate()
    }
  },
  methods: {
    ...mapActions('contrats', ['clientAccord',]),
    statutStyle: function(statut){
        if(statut=='PROPOSITION'){
            return {
                style: 'proposition', 
                badge: 'badge-first', 
                faStyle: 'faProposition',
                border: 'borderProposition'
            }
        }
        if(statut=='EN COURS'){
            return {
                style: 'encours', 
                badge: 'badge-success' , 
                faStyle: 'faEncours',
                border: 'borderEncours'
            }
        }
        if(statut=='RESILIE'){
            return {
                style: 'resilie', 
                badge: 'badge-warning', 
                faStyle: 'faResilie',
                border: 'borderResilie'
            }
        }
    },
    setActiveContrat: function(contrat){
        console.log('setActiveContrat: ', contrat)
        this.mainTableStyle = 'col-lg-8 col-md-8 col-sm-12 col-xl-8'
        this.activeContrat = {...contrat}
        const styleObject = this.statutStyle(contrat.statut)
        this.faStyle = styleObject.faStyle
        this.cardBorder = styleObject.border
        console.log('this.selectedContrat: ', this.activeContrat)
    },
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
    totalBail: function (contrat) {
        if(contrat===undefined){
            return 0
        }
        /*
        if (!this.contrat || !this.contrat.montant_bail){
            return this.contrat.accessoires.reduce((accumulateur, item) => accumulateur + utils.currencyToNumber(item.montant), 0)
        } */
        let montant_bail = isNaN(contrat.montant_bail) ? utils.currencyToNumber(contrat.montant_bail) : contrat.montant_bail
        let totalLoyer = (montant_bail * contrat.nb_avance) + (montant_bail * contrat.nb_prepaye)
        return totalLoyer + contrat.accessoires.reduce((accumulateur, item) => accumulateur + utils.currencyToNumber(item.montant), 0)
    },
    accepterContrat: async function(contrat){
          const clientAccord = {
              id: contrat.id,
              client_accord: false
          }
          const montantBail = Number(this.totalBail(contrat)).toLocaleString('fr-FR')
          const userResponse = await this.$swal.fire({
            title: 'Tenancia [Validation contrat]',
            text: `Confirmez vous la validation de ce contrat ${montantBail} FCFA?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, je confirme',
            cancelButtonText: 'NON'
            }).then((result) => {
                return result.value
            })
           if(!userResponse){
               return
           }
           clientAccord.client_accord=userResponse
           await this.clientAccord(clientAccord).then(response => {
               // console.log('clientAccord response:', response.data.client_accord)
               contrat.client_accord = response.data.payload.client_accord
               console.log('clientAccord contrat: ', contrat)
               //this.$store.commit('contrats/UPDATECLIENTCONTRAT', contrat)
               this.$store.commit('contrats/ERROR_REMOVE', 'clientAccord')
            })
            .catch(errors => {
                console.log(this.$store)
                this.$store.commit('contrats/ERROR_ADD', {key: 'clientAccord', message: errors.message})
            })
    }
  }
}
</script>
