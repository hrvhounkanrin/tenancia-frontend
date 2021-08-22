<template>
    <div>
        <PageTitle heading="Mes contrats de bail" subheading="Liste des contrats dans votre portefeuille"/>
        <div>
            <!--<contract-dashboard></contract-dashboard>-->
        </div>
        <div class="row">
            <div :class="mainTableStyle">
                    <div class="card card-box mb-5">
                    <div class="card-header pr-2">
                        <div class="card-header--title">
                            <small>Vue bailleur</small>
                            <b>Liste des contrats de bail</b>
                            <font-awesome-icon icon="circle" class="ml-3 faProposition"/> Contrat en proposition
                            <font-awesome-icon icon="circle" class="mr-2 ml-3 faEncours"  /> Contrat en en cours
                            <font-awesome-icon icon="circle" class="mr-2 ml-3 faResilie" /> Contrat à terme ou résilié
                        </div>
                        <div class="card-header--actions">
                            <router-link :to="{name: 'EditContrat'}">
                                 <b-button variant="primary">
                                    <font-awesome-icon icon="plus" class="mr-2" />
                                    Créer un nouveau contrat
                                </b-button>
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div>
                            <div class="table-responsive-md">
                                <table class="table table-striped table-hover mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Appartement</th>
                                        <th scope="col">N° Contrat</th>
                                        <th scope="col">Locataire</th>
                                        <th scope="col">Date effet</th>
                                        <th scope="col" class="text-left">Loyer</th>
                                        <th scope="col">Proch. échéance</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody class="list">
                                    <tr :class="statutStyle(co.statut).style" v-for="co in contrats" :key="co.reference_bail">
                                        <td style="">
                                             <div class="align-box-row">
                                                <span class="d-block">
                                                    {{co.appartement.intitule}} - {{co.appartement.immeuble_intitule}}
                                                    <small class="d-block text-black-50"><font-awesome-icon icon="map-marked" class="mr-1" />({{co.appartement.ville}})</small>
                                                </span>
                                            </div>

                                        </td>
                                         <td>
                                            <div class="badge  px-3" :class="statutStyle(co.statut).badge">{{co.reference_bail}}</div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="pl-2">
                                                    <span class="d-block">
                                                        {{co.client.user.first_name + ' '+co.client.user.last_name}}
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'phone-alt']"  /> {{co.client.phone_number}}
                                                        </small>
                                                        <small class="d-block text-black-50">
                                                            <font-awesome-icon :icon="['fas', 'envelope']" /> {{co.client.user.email}}
                                                        </small>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            {{co.date_effet}}
                                        </td>
                                        <td class="text-left">
                                            {{co.montant_bail}} F CFA
                                        </td>
                                        <td>
                                            {{co.prochaine_echeance}}
                                        </td>
                                         <td>
                                             <a href="#"><font-awesome-icon icon="eye" @click="setActiveContrat(co)" class="fa-2x" :class="statutStyle(co.statut).faStyle"/></a>
                                            
                                        </td>
                                        
                                        <td class="text-center" width="5%">
                                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                                                <template slot="button-content">
                                                    <div class="font-size-xl">
                                                        <font-awesome-icon icon="ellipsis-h"/>
                                                    </div>
                                                </template>
                                                <b-dropdown-item >Modifier</b-dropdown-item>
                                                <b-dropdown-item>Voir quittances</b-dropdown-item>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item active>Résilier</b-dropdown-item>
                                            </b-dropdown>
                                        </td>
                                    </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                            <div class="divider"></div>
                            <div class="divider"></div>
                            <div class="p-3">
                                <ul class="pagination justify-content-center mb-0">
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                            <font-awesome-icon icon="chevron-left"/>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                            <font-awesome-icon icon="chevron-right"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
             <div class="col-lg-12 col-xl-4">
                 <contract-detail v-if="activeContrat" :contrat="activeContrat" :fa-style="faStyle" :card-border="cardBorder"></contract-detail>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ContractDetail from './contract-detail.vue'
import ContractDashboard from './contract-dashboard.vue'
library.add(fas)
export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    'contract-detail': ContractDetail,
    'contract-dashboard': ContractDashboard
  },
  data: function () {
    return {
        activeContrat: null,
        faStyle: null,
        cardBorder: null,
        mainTableStyle: 'col-lg-12 col-md-12 col-sm-12 col-xl-12'
    }
  },
  props: {
  },
  computed: {
    ...mapGetters({
      immeubles: 'properties/immeubles',
      typeAccessoires: 'contrats/typeAccessoireLoyer',
      contrats: 'contrats/contrats',
    }),
    ...mapState({
      api_errors: (state) => state.contrats.errors
    })
  },
  created () {
    this.$store.dispatch('contrats/getContrats')
  },
  mounted () {
   
  },
  methods: {
    ...mapActions('contrats', ['createContrat', 'searchTenantsByEmail', 'getFreeAppartment']),
    statutStyle: function(statut){
        if(statut=='PROPOSITION'){
            return {
                style: 'proposition', 
                badge: 'badge-warning', 
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
                badge: 'badge-error', 
                faStyle: 'faResilie',
                border: 'borderResilie'
            }
        }
        if(statut=='CONTRAT ACCEPTE'){
            return {
                style: 'accepte', 
                badge: 'badge-primary', 
                faStyle: 'faAccepte',
                border: 'borderAccepte'
            }
        }
        console.log(statut)
    /*ANNULE
    
    TERME = "TERME"
    */
        return {
                style: '', 
                badge: '', 
                faStyle: '',
                border: ''
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
    }
  }
}
</script>

