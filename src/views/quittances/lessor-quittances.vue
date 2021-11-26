<template>
  <div>
    <PageTitle
      heading="Mes quittances"
      subheading="Liste de vos quittances(Vue bailleur)"
    />
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-8 offset-sm-2 col-xl-8 offset-xl-2">
            <alert  variant="warning" v-for="err in api_errors" :msg="err.message" icon="bell" :dismissSecs="15" :dismissible="true" :title="'Oups..'" :key="err.key"></alert>
        </div>  
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="card card-box mb-5 ">
                <div class="card-header pr-2">
                        <div class="card-header--title">
                            <small>QUITTANCES</small>
                            <b>Liste des quittances de bails.</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0)" class="btn btn-sm text-primary btn-link" v-b-tooltip.hover title="Refresh">
                                <font-awesome-icon spin icon="sync"/>
                            </a>
                        </div>
                </div>
                <div class="card-body p-0">
                    <div>
                        <div class="table-responsive-md">
                            <table class="table table-striped table-hover mb-0">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col">Appartement</th>
                                    <th scope="col">Quittance</th>
                                    <th scope="col">Nature</th>
                                    <th scope="col">Montant</th>
                                    <th scope="col">Début période</th>
                                    <th scope="col">Fin période</th>
                                    <th scope="col">Locataire</th>
                                    <th scope="col">Date Règlement</th>
                                    <th scope="col" class="text-center">Statut</th>
                                </tr>
                                </thead>
                                
                                <tbody class="list">
                                <tr v-for="quittance in filteredQuittances" :key="quittance.reference">
                                    <td class="company">
                                    <div class="align-box-row">
                                            <span class="d-block">
                                                {{quittance.appartement.intitule}} - {{quittance.appartement.immeuble_intitule}}
                                                <small class="d-block text-black-50"><font-awesome-icon icon="map-marked" class="mr-1" />({{quittance.appartement.immeuble_address}})</small>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                    {{quittance.reference}}
                                    </td>
                                    <td>
                                    {{quittance.nature}}
                                    </td>
                                    <td class="text-rigth">
                                        {{Number(quittance.montant).toLocaleString('fr-FR')}}
                                    </td>
                                    <td>{{quittance.debut_periode}}</td>
                                    <td>{{quittance.fin_periode}}</td>
                                    
                                    <td class="owner">
                                        <div class="align-box-row">
                                            <div class="pl-2">
                                                <span class="d-block">
                                                    {{quittance.tenant.first_name + ' '+quittance.tenant.last_name}}
                                                    <small class="d-block text-black-50">
                                                        <font-awesome-icon :icon="['fas', 'phone-alt']"  /> {{quittance.tenant.phone_number}}
                                                    </small>
                                                    <small class="d-block text-black-50">
                                                        <font-awesome-icon :icon="['fas', 'envelope']" /> {{quittance.tenant.email}}
                                                    </small>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td class="status">
                                        <div class="text-center">
                                            <span :class="getStatusClass(quittance)"  class="badge badge-pill ">{{quittance.statut}}</span>
                                        </div>
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
  name: 'LessorQuittance',
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
          filteredQuittances: [],
          activeContrat: null,
          faStyle: null,
          cardBorder: null,
         
      }
  },
  props: {

  },
  computed: {
    ...mapGetters({
      quittances: 'quittances/lessorQuittances',
    }),
    ...mapState({
      api_errors: (state) => state.contrats.errors
    }),
    pageCount: function(){
        return getPageCount(this.quittances.length, this.nbItemPerPage)
    }
  },
  created: function(){
    
  },
  mounted: async function () {
      const contratId= this.$route.query.ref
      const hashids = new Hashids()
      console.log('contrat.id:', contratId, hashids.decode(contratId))
      if(contratId){
        const query = {'contrat_id': hashids.decode(contratId) }
        await this.$store.dispatch('quittances/getQuittanceByLessor', query)
      }
      else{
        await this.$store.dispatch('quittances/getQuittanceByLessor')
      }
      this.setActivePage(this.activePage)
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
    setActivePage: function(numPage){
        const paginationObject = paginator(this.quittances, numPage, this.nbItemPerPage)
        this.filteredQuittances = paginationObject.data
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
    getStatusClass: function(quittance){
        if (quittance['statut']==='PENDING'){
            return 'badge-warning'
        }
        if (quittance['statut']==='PAID'){
            return 'badge-success'
        }
        return 'badge-danger'
    }
  }
}
</script>
