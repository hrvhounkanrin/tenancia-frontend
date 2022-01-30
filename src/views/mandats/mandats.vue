<template>
  <div>
    <PageTitle
      heading="Mandats de gestion"
      subheading="Liste des mandats de gestion"
    />
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
            <alert  variant="warning" v-for="err in api_errors" :msg="err.message" icon="bell" :dismissSecs="15" :dismissible="true" :title="'Oups..'" :key="err.key"></alert>
        </div>  
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="card card-box mb-5 ">
                <div class="card-header pr-2">
                        <div class="card-header--title">
                            <small>Mandats de gestion</small>
                            <b>Liste des mandats de gestion.</b>
                        </div>
                       <div class="card-header--actions">
                            <b-button variant="primary" @click="addImmeuble">
                                <font-awesome-icon icon="plus" class="mr-2" />
                                Ajouter mandat
                            </b-button>
                        </div>
                </div>
                <div class="card-body p-0">
                    <div>
                        <div class="table-responsive-md">
                            <table class="table table-striped table-hover mb-0">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col">Référence</th>
                                    <th scope="col">Immeuble</th>
                                    <th scope="col">Propriétaire</th>
                                    <th scope="col">Date effet</th>
                                    <th scope="col" class="text-right">Durée</th>
                                    <th scope="col" class="text-right">Taux commission</th>
                                    <th scope="col" class="text-right">Nb Appartement</th>
                                    <th scope="col" class="text-right">CA Mensuel</th>
                                    <th scope="col" class="text-center">Action</th>
                                </tr>
                                </thead>
                                
                                <tbody class="list">
                                <tr v-for="mandat in filteredMandats" :key="mandat.reference">
                                    <td>
                                    {{mandat.reference_mandat}}
                                    </td>
                                     <td class="owner">
                                        <div class="align-box-row">
                                            <div class="pl-2">
                                                <span class="d-block">
                                                    {{ mandat.immeuble.intitule }}
                                                    <small class="d-block text-black-50">
                                                        <font-awesome-icon :icon="['fas', 'map-marker']"  /> {{mandat.immeuble.adresse}}
                                                    </small>
                                                    <small class="d-block text-black-50">
                                                        <font-awesome-icon :icon="['fas', 'city']" /> {{mandat.immeuble.ville}}
                                                    </small>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="company">
                                        <div class="align-box-row">
                                            <span class="d-block">
                                                <div class="pl-2">
                                                    <small class="d-block">
                                                        {{mandat.owner_name}}  {{mandat.owner_firstname}}
                                                    </small>
                                                    <small class="d-block text-black-50">
                                                        <font-awesome-icon :icon="['fas', 'phone-alt']"  /> {{mandat.owner_phone_number}}
                                                    </small>
                                                </div>
                                            </span>
                                        </div>
                                    </td>
                                    
                                    <td>
                                    {{mandat.date_debut}}
                                    </td>
                                    <td class="text-right">
                                        {{Number(mandat.duree).toLocaleString('fr-FR')}}
                                    </td>
                                    <td class="text-right">{{ mandat.taux_commission }}</td>
                                    <td class="text-right">{{ mandat.nb_appartement}}</td>
                                    
                                   
                                    <td class="text-right">60000</td>
                                    <td class="text-center" width="5%">
                                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                                                <template slot="button-content">
                                                    <div class="font-size-xl">
                                                        <font-awesome-icon icon="ellipsis-h"/>
                                                    </div>
                                                </template>
                                                <b-dropdown-item ><a href="#" @click="triggerEditContrat(co)">Modifier</a></b-dropdown-item>
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
                                <li class="page-item" >
                                    <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                        <font-awesome-icon icon="chevron-left"/>
                                    </a>
                                </li>
                                <li  v-for="i in pageCount" :key="i" class="page-item" :class="[(activePage==i) ? 'active' : '']">
                                    <a class="page-link" href="javascript:void(0)" @click="setActivePage(i)">{{i}}</a>
                                </li>
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
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import vueSlider from "vue-slider-component"
import paginate, { alert } from "@/components/shared/"
import Hashids from 'hashids'
import { paginator, getPageCount } from '@/utils/index'
library.add(fas)

export default {
  name: 'Mandats',
  components: {
    vueSlider,
    "font-awesome-icon": FontAwesomeIcon,
    "t-pagination": paginate,
    alert: alert,
  },
 data: function(){
      return {
          activePage: 1,
          nbItemPerPage: 10,
          filterQuery: '',
          filteredMandats: [],
          activeContrat: null,
          faStyle: null,
          cardBorder: null,
         
      }
  },
  props: {

  },
  computed: {
    ...mapGetters({
      mandats: 'mandats/mandats',
    }),
    ...mapState({
      api_errors: (state) => state.mandats.errors
    }),
    pageCount: function(){
        return getPageCount(this.mandats.length, this.nbItemPerPage)
    }
  },
  created: function(){
    
  },
  mounted: async function () {
     await this.$store.dispatch('mandats/getMandats')
      this.setActivePage(this.activePage)
  },
  watch: { 
  
  },
  methods: {
    ...mapActions('contrats', ['clientAccord',]),
    setActivePage: function(numPage){
        const paginationObject = paginator(this.mandats, numPage, this.nbItemPerPage)
        this.filteredMandats = paginationObject.data
        this.activePage = numPage
    },
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
    getStatusClass: function(mandat){
        /*if (quittance['statut']==='PENDING'){
            return 'badge-warning'
        }
        if (quittance['statut']==='PAID'){
            return 'badge-success'
        }*/
        return 'badge-danger'
    }
  }
}
</script>
